 
import {StyleSheet} from 'react-native';
import font from '../../../theme/font';
import color from '../../../theme/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {    
    fontSize: 16,
    fontFamily: font.PoppinsMedium,
    color: color.primaryText,
  },
});