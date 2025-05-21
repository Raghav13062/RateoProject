import {StyleSheet} from 'react-native';
import font from '../../../theme/font';
import color from '../../../theme/color';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  lable: {
    fontFamily: font.PoppinsSemiBold,
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 22,
    color: color.primaryText,
  },
  lableSecondView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    zIndex: 1,
    position: 'absolute',
    paddingHorizontal: 4,
    marginLeft: 7,
    height: 18,
    top: -9,
  },
  lableSecondIconView: {
    paddingLeft: 2.4,
    paddingRight: 4.4,
  },
  lableSecond: {
    fontSize: 13,
    fontFamily: font.PoppinsSemiBold,
    fontWeight: '600',
    color: color.primaryText,
    lineHeight: 17.7,
  },
  inputContainer: {
    height: 55,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: color.lightgray,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: 'white',
  },
  inputStyle: {
    fontFamily: font.PoppinsSemiBold,
    fontSize: 15,
    color: color.whiteLight,
    fontWeight: '400',
    lineHeight: 20,
    flex: 1,
  },
  leftIconView: {
    marginRight: 10,
  },
  textBtnText: {
    fontFamily: font.PoppinsSemiBold,
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 15.25,
    color: color.darkGreen,
  },
  errorLabel: {
    fontSize: 12,
    lineHeight: 16,
    color: color.warning,
    fontFamily: font.PoppinsRegular,
    marginTop: 50,
    fontWeight: '400',
    position: 'absolute',
  },
  lableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  dropDownStyle: {
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
  },
});
