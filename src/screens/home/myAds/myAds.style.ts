import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.buttonBG,
  },
  stepTitle: {
    fontSize: 24,
    lineHeight: 29,
    fontWeight: '800',
    color: color.secondaryBG,
    fontFamily: font.PoppinsBold,
    flex: 1,
  },
  stepHeader: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: color.pacificBlue,
    paddingVertical: 20,
  },
  flatStyle: {
    marginTop: 10,
    flex: 1,
    marginHorizontal: 20,
  },
  backButtonViewLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    backgroundColor: color.secondaryBG,
    borderRadius: 30,
    padding: 1.3,
  },
  userLogo: {
    height: 43,
    width: 43,
    resizeMode: 'contain',
  },
  searchContainerStyle: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  headingText: {
    fontFamily: font.PoppinsMedium,
    fontSize: 18,
    lineHeight: 22,
    color: color.pacificBlue,
    flex: 1,
    fontWeight: '600',
  },
  filetrRowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 8,
    alignItems: 'center',
  },
  // card style
  card: {
    flexDirection: 'row',
    backgroundColor: color.secondaryBG,
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
    elevation: 2,
    shadowColor: color.secondaryTexts,
    shadowOpacity: 0.6,
    shadowRadius: 8,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 6,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 20,
    color: color.primaryText,
    fontFamily: font.PoppinsSemiBold,
  },
  description: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: font.PoppinsRegular,
    color: color.secondaryTexts,
    fontWeight: '400',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    color: color.secondaryText,
    fontSize: 12,
    lineHeight: 15,
    fontFamily: font.PoppinsRegular,
    fontWeight: '400',
  },
  callButton: {
    backgroundColor: color.pacificBlue,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  callText: {
    color: color.secondaryBG,
    fontSize: 12,
    lineHeight: 15,
    fontFamily: font.PoppinsSemiBold,
    fontWeight: '700',
  },
  flatAnimation: {
    flex: 1,
  },
});

export default styles;
