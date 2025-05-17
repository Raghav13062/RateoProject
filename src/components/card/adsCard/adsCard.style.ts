import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: color.secondaryBG,
    marginVertical: 10,
    marginHorizontal: 10,
    width: 270,
    height: 180,
    borderRadius: 8, // match with image borderRadius
    overflow: 'hidden', // ✨ this makes borderRadius work
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
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
  title: {
    color: color.pacificBlue,
    fontSize: 14,
    lineHeight: 19,
    fontWeight: '700',
    fontFamily: font.PoppinsMedium,
    paddingHorizontal: 8,
    textAlign: 'center',
  },
  buttonstyle: {
    paddingHorizontal: 8,
    paddingVertical: 7,
    backgroundColor: color.whiteLight,
    alignSelf: 'flex-end',
    borderRadius: 5,
    shadowColor: color.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
