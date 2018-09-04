import React from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import { formatDateShort } from '../../utils/dates';

const MovieListItem = (props) => {

  const { title, releaseDate, imageURL, onPress } = props;

  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.movieImage}
            source={{uri: imageURL}}
          />
        </View>
        <View style={styles.textContainer}>
          <Text numberOfLines={3} style={styles.titleText}>{title}</Text>
          <View style={styles.dateTextContainer}>
            <Text style={styles.releaseDateTitle}>RELEASE DATE:  </Text>
            <Text style={styles.releaseDateText}>{formatDateShort(releaseDate).toUpperCase()}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
  
}

MovieListItem.propTypes = {
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  imageURL: PropTypes.string,
  onPress: PropTypes.func
};

MovieListItem.defaultProps = {
  title: '',
  releaseDate: '',
  imageURL: '',
  onPress: () => console.log('onPress')
};

export default MovieListItem;