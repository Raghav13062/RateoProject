
import {StyleSheet} from 'react-native';
import font from '../../../theme/font';
import color from '../../../theme/color';

const styles = StyleSheet.create({
  errorStyle: {
    fontFamily: font.PoppinsRegular,
    fontWeight: '400',
    fontSize: 12,
    color: color.warning,
    lineHeight: 16.34,
  },
  errorViewStyle: {
    marginTop: 6,
  },
});
export default styles;
