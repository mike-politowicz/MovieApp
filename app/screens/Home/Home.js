import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import styles from './styles';
import { getURLForPage } from '../../api/MovieDB'
import MovieList from '../../components/MovieList/MovieList';

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      data: [],
      nextPage: 1,
      error: null,
      isRefreshing: false,
      isShowingAlert: false
    };
  }

  componentDidMount() {
    this.handleLoadMore();
  }

  makeRemoteRequest = () => {
    const { nextPage } = this.state;

    fetch(getURLForPage(nextPage))
      .then(res => res.json())
      .then(res => {
        if (res.page === nextPage) {
          if (res.page === 1) {

          }
          this.setState({
            data: this.state.nextPage === 1 ? res.results : [...this.state.data, ...res.results],
            error: res.error || null,
            nextPage: this.state.nextPage + 1,
            isLoading: false,
            isRefreshing: false
          });
        }
      })
      .catch(error => {
        if (!this.state.isShowingAlert) {
          this.setState({ error: error, isShowingAlert: true, isLoading: false, isRefreshing: false });
          Alert.alert(
            'Network Error',
            'We were unable to load the movies. Please check your network connection and try again.',
            [
              {text: 'Dismiss', onPress: () => this.setState({ isShowingAlert: false})},
            ]
          )
        }
      });
  };

  handleRefresh = () => {
    if (!this.state.isRefreshing) {
      this.setState(
        {
          nextPage: 1,
          isRefreshing: true
        },
        () => {
          this.makeRemoteRequest();
        }
      );
    }
  };

  handleLoadMore = () => {
    if (!(this.state.isLoading || this.state.isRefreshing)) {
      this.setState({isLoading: true}, () => {this.makeRemoteRequest()});
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <MovieList style={styles.list}
          data={this.state.data}
          isRefreshing={this.state.isRefreshing}
          isLoading={this.state.isLoading}
          onRefresh={this.handleRefresh}
          onEndReached={this.handleLoadMore}
          onPress={(item) => this.props.navigation.navigate('Details', {'movie' : item})}
        />
      </View>
    );
  }

}
