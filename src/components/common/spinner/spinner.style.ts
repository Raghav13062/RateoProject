import { StyleSheet } from 'react-native';
import color from '../../../theme/color';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.transparentColor,
  },
  animation: {
    width: 250,
    height: 250,
  },
});
