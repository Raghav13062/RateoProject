import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryText,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: '3%',
  },
  headingText: {
    fontFamily: font.PoppinsSemiBold,
    fontSize: 38,
    lineHeight: 43,
    color: color.buttonBG,
    fontWeight: '800',
    marginLeft: 20,
    marginBottom: 6,
  },
  headingDecText: {
    fontFamily: font.PoppinsBold,
    fontSize: 23,
    lineHeight: 27,
    color: color.buttonBG,
    fontWeight: '600',
    marginLeft: 20,
    marginBottom: '20%',
  },
  btnContainer: {
    paddingHorizontal: 20,
  },
  btnStyle: {
    alignSelf: 'center',
    width: 300,
    marginBottom: 10,
  },
  orTextStyle: {
    fontFamily: font.PoppinsMedium,
    fontSize: 18,
    lineHeight: 22,
    color: color.priceTagBG,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 5,
  },
  bottomText: {
    fontFamily: font.PoppinsMedium,
    fontSize: 16,
    color: color.priceTagBG,
    textAlign: 'center',
    marginTop: 40,
  },
  logo: {
    width: 200,
    height: 180,
    resizeMode: 'contain',
     alignSelf: 'center',
   },
});

export default styles;
