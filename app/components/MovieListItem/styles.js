import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

const listItemHeight = 130;

export default StyleSheet.create({
  container: {
    flex: 1,
    height: listItemHeight,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.listItemBackground
  },
  movieImage: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 3,
    backgroundColor: colors.imageBackground
  },
  textContainer: {
    flex: 1,
    height: listItemHeight,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    margin: 2,
    marginRight: 20,
    backgroundColor: colors.listItemBackground
  },
  imageContainer: {
    width: (listItemHeight - 30) * (2/3),
    height: listItemHeight - 30,
    margin: 13,
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowColor: colors.imageShadow
  },
  titleText: {
    marginTop: 18,
    marginBottom: 6,
    lineHeight: 26,
    fontFamily: 'AvenirNext-UltraLight',
    fontSize: 21,
    letterSpacing: 0.2,
    textAlign: 'left',
    flexWrap: 'wrap',
    fontWeight: '500',
    color: colors.lightText,
    opacity: 0.8
  },
  dateTextContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  releaseDateTitle: {
    fontFamily: 'AvenirNext-Regular',
    fontSize: 12,
    textAlign: 'left',
    letterSpacing: 0.9,
    fontWeight: '600',
    color: colors.lightText,
    opacity: 0.6
  },
  releaseDateText: {
    alignContent: 'center',
    fontFamily: 'AvenirNext-Regular',
    fontSize: 12,
    textAlign: 'left',
    letterSpacing: 0.6,
    flexWrap: 'wrap',
    color: colors.lightText,
    fontWeight: '600',
    opacity: 0.75
  }
});