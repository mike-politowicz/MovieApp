import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
  list: {
    backgroundColor: colors.appBackground,
  },
  separator: {
    height: 1.5,
    backgroundColor: colors.listSeparator,
    opacity: 0.3
  },
  footer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: colors.listSeparator
  }
});