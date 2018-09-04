import React, { Component } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import styles from './styles';
import { getImageURL } from '../../api/MovieDB'
import { formatDateLong } from '../../utils/dates';

export default class Details extends Component {

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('movie', {});
    return (
      <ScrollView style={styles.scroll}
        alwaysBounceVertical={false}
      >
        <View style={styles.container}>
          <Image style={styles.movieImage}
            source={{uri: getImageURL(item.poster_path)}}
          />
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.releaseDateTitle}>RELEASE DATE:</Text>
          <Text style={styles.releaseDateText}>{formatDateLong(item.release_date)}</Text>
          <Text style={styles.descriptionText}>{item.overview}</Text>
        </View>
      </ScrollView>
    );
  }

}
