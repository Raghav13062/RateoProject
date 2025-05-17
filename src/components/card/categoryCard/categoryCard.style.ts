import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: color.secondaryBG,
    marginVertical: 10,
    marginHorizontal: 10,
    width: 110,
    alignItems: 'center',
    paddingVertical: 10,

    //
    borderRadius: 8,
    shadowColor: color.secondaryTexts,
    shadowOffset: {
      width: 10,
      height: 8,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 7,
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  viewTitleStyle: {height: 50, justifyContent: 'center'},
  title: {
    color: color.primaryText,
    fontSize: 10,
    lineHeight: 16,
    fontWeight: '100',
    fontFamily: font.PoppinsMedium,
    paddingHorizontal: 8,
    textAlign: 'center',
  },
});
