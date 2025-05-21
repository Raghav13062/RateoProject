import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryBG,
  },
  headerStyle: {
    paddingLeft: 18,
    backgroundColor: color.transparent,
    marginBottom: 0,
    paddingTop: 6,
  },
  formContainer: {
    flex: 1,
  },
  containerScroll: {
    flex: 1,
    paddingHorizontal: 23,
  },
  statusBarContainer: {
    height: 0,
  },
  emailContainer: {
    marginTop: 0,
  },
  btnLoginStyle: {
    alignSelf: 'center',
    width: 300,
    marginBottom: 30,
  },
  inputErrorStyle: {
    marginTop: 86,
  },
  contentContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 8,
  },
  headingText: {
    fontFamily: font.PoppinsSemiBold,
    fontSize: 28,
    lineHeight: 32.84,
    color: color.whiteLight,
    fontWeight: '700',
    marginBottom: 24,
    marginTop: 24,
  },
  dropMainViewStyle: {
    marginTop: 0,
    marginBottom: 20,
  },
  imageContainer: {},
  imageStyle: {
    height: 55,
    width: 55,
    borderRadius: 10,
  },
});

export default styles;
