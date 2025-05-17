import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 55,
    backgroundColor: color.secondaryBG,
    borderRadius: 30,
    position: 'absolute',
    bottom: '2%',
    left: '5%',
    right: '5%',
    alignItems: 'center',
  },
  rowView: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 30,
    padding: 19,
  },
  nameText: {
    fontFamily: font.PoppinsSemiBold,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    color: color.secondaryText,
  },
  financialAlignItems: {
    marginBottom: 8,
  },
});
