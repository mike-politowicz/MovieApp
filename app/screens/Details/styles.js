import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

const movieImageHeight = 400;
const movieImageAspectRatio = 2 / 3;

export default StyleSheet.create({
  scroll: {
    backgroundColor: colors.detailsBackground
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 21,
    backgroundColor: colors.detailsBackground
  },
  movieImage: {
    width: movieImageHeight * movieImageAspectRatio,
    height: movieImageHeight,
    margin: 10,
    resizeMode: 'cover',
    borderRadius: 4,
    backgroundColor: colors.imageBackground
  },
  titleText: {
    marginTop: 10,
    marginBottom: 7,
    fontFamily: 'AvenirNext-UltraLight',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.3,
    flexWrap: 'wrap',
    color: colors.darkText
  },
  releaseDateTitle: {
    marginBottom: 3,
    fontFamily: 'AvenirNext-Regular',
    fontSize: 12,
    textAlign: 'center',
    letterSpacing: 0.9,
    fontWeight: '600',
    opacity: 0.6,
    color: colors.darkText
  },
  releaseDateText: {
    marginBottom: 20,
    alignContent: 'center',
    fontFamily: 'AvenirNext-Regular',
    fontSize: 12,
    textAlign: 'center',
    letterSpacing: 0.6,
    flexWrap: 'wrap',
    fontWeight: '600',
    opacity: 0.75,
    color: colors.darkText
  },
  descriptionText: {
    marginBottom: 20,
    fontFamily: 'AvenirNext-Regular',
    fontSize: 15,
    textAlign: 'justify',
    letterSpacing: 0.3,
    flexWrap: 'wrap',
    color: colors.darkText
  }
});