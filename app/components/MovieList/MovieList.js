import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import { getImageURL } from '../../api/MovieDB'
import MovieListItem from '../MovieListItem/MovieListItem';

export default class MovieList extends Component {

  renderSeparator = () => {
    return (
      <View style={styles.separator}/>
    );
  };

  renderFooter = () => {
    if (!this.props.isLoading) return null;
    return (
      <View style={styles.footer}>
        <ActivityIndicator animating size='large' />
      </View>
    );
  };

  render() {
    return (
      <FlatList style={styles.list}
        data={this.props.data}
        renderItem={({ item }) => (
          <MovieListItem
            title={item.title}
            releaseDate={item.release_date}
            imageURL={getImageURL(item.poster_path)}
            onPress={() => this.props.onPress(item)}
          />
        )}
        keyExtractor={item => String(item.id)}
        ItemSeparatorComponent={this.renderSeparator}
        ListHeaderComponent={this.renderHeader}
        ListFooterComponent={this.renderFooter}
        onRefresh={this.props.onRefresh}
        refreshing={this.props.isRefreshing}
        onEndReached={this.props.onEndReached}
        onEndReachedThreshold={2}
      />
    );
  }
}

MovieList.propTypes = {
  data: PropTypes.array,
  isRefreshing: PropTypes.bool,
  isLoading: PropTypes.bool,
  onRefresh: PropTypes.func,
  onEndReached: PropTypes.func,
  onPress: PropTypes.func
};

MovieList.defaultProps = {
  data: [],
  isRefreshing: false,
  isLoading: false,
  onRefresh: () => console.log('onRefresh'),
  onEndReached: () => console.log('onEndReached'),
  onPress: () => console.log('onPress')
};
