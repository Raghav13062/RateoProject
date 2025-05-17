import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headerStyle: {
    paddingLeft: 18,
    backgroundColor: color.transparent,
    marginBottom: 0,
    paddingTop: 6,
  },
  headingText: {
    fontFamily: font.PoppinsBold,
    fontSize: 28,
    lineHeight: 32.84,
    color: color.priceTagBG,
    textAlign: 'center',
    marginTop: 17,
  },
  textLabel: {
    fontFamily: font.PoppinsRegular,
    fontSize: 14,
    lineHeight: 18,
    color: color.black,
    textAlign: 'center',
    fontWeight: '200',
    marginTop: 8,
    letterSpacing: 0.2,
    opacity: 0.5,
  },
  formContainer: {
    flex: 1,
    marginTop: 20,
  },
  inputContainer: {
    marginBottom: 0,
    marginTop: 5,
  },
  btnContainer: {
    paddingHorizontal: 20,
  },
  btnStyle: {
    alignSelf: 'center',
    width: 300,
    marginBottom: 10,
  },
  emailContainer: {
    marginTop: 0,
    marginBottom: 0,
  },
  logo: {
    width: 200,
    height: 130,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  haveAnAcountStyl: {
    fontFamily: font.PoppinsMedium,
    fontSize: 15,
    lineHeight: 20,
    color: color.primaryText,
    fontWeight: '300',
    marginTop: 5,
  },
  registerTextStyle: {
    fontFamily: font.PoppinsMedium,
    fontSize: 15,
    lineHeight: 20,
    color: color.whiteLight,
    fontWeight: '300',
    textAlign: 'right',
    marginTop: 5,
  },
});

export default styles;
