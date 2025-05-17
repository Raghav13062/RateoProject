import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: color.darkGreen,
    height: 66,
    paddingHorizontal: 20,
    borderBottomWidth: 0.4,
    borderBottomColor: color.whiteLight,
  },
  rightIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 7,
  },
  titleRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  backButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 15,
    marginRight: 8,
    paddingVertical: 8,
  },
  textViewStyle: {
    flex: 0.6,
  },
  labelText: {
    fontFamily: font.PoppinsMedium,
    fontWeight: '400',
    fontSize: 20,
    color: color.pacificBlue,
    lineHeight: 28,
  },
});
