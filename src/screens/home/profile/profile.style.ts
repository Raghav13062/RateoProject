import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.buttonBG,
  },
  flatStyle: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: color.secondaryBG,
  },
  headingText: {
    fontFamily: font.PoppinsSemiBold,
    fontSize: 18,
    lineHeight: 22,
    color: color.pacificBlue,
    flex: 1,
    fontWeight: '700',
    marginTop: 20,
  },
  headerStyle: {
    paddingLeft: 18,
    backgroundColor: color.buttonBG,
    marginBottom: 0,
    paddingTop: 6,
  },
  flatAnimation: {
    flex: 1,
  },
  emailContainer: {
    marginTop: 0,
  },
  inputErrorStyle: {
    marginTop: 86,
  },
  btnLoginStyle: {
    alignSelf: 'center',
    width: 300,
    marginBottom: 30,
  },
  contentContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 8,
  },
});

export default styles;
