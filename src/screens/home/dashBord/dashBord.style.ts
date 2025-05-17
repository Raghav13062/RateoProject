import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.buttonBG,
  },
  stepHeader: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: color.pacificBlue,
    paddingVertical: 20,
  },
  stepTitle: {
    fontSize: 24,
    lineHeight: 29,
    fontWeight: '800',
    color: color.secondaryBG,
    fontFamily: font.PoppinsBold,
    flex: 1,
  },
  flatStyle: {
    marginTop: 2,
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
  card: {
    height: 153,
    width: 372,
    borderRadius: 10,
    marginHorizontal: 20,
    overflow: 'hidden',
    backgroundColor: color.transparentColor,
  },
  imageCardStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  flatListBorderViewStyle: {
    flex: 1,
  },
  categoryFlatList: {flex: 1, marginHorizontal: 10},
  headingText: {
    fontFamily: font.PoppinsBold,
    fontSize: 18,
    lineHeight: 22,
    color: color.primaryText,
    marginVertical: 15,
    marginHorizontal: 20,
    marginBottom: 8,
  },
  categoryFlatStyle: {
    flex: 1,
    paddingBottom: '19%',
  },
});

export default styles;
