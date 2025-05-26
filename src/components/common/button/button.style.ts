import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

const style = StyleSheet.create({
  marginContainer: {
    marginHorizontal: 20,
  },
  container: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 10,
    backgroundColor: color.secondaryBG,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inActiveContainer: {
    flexDirection: 'row',
    backgroundColor: color.lightgray,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlineContainer: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: color.lightgray,
  },
  nameStyle: {
    fontFamily: font.PoppinsSemiBold,
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 19,
    color: color.priceTagBG,
  },
  inActiveNameStyle: {
    fontFamily: font.PoppinsSemiBold,
    fontSize: 16,
    fontWeight: '700',
    color: color.whiteLight,
    lineHeight: 19,
  },
  iconView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIcon: {
    marginRight: 5,
  },
  rightIcon: {
    marginLeft: 5,
  },
});
export default style;
