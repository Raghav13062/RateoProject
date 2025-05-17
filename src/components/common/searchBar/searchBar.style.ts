import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 31,
    marginBottom: 17,
  },
  textInputView: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 14,
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: color.secondaryBG,
  },
  searchIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },
  searchInputStyle: {
    flex: 1,
    fontSize: 13.4,
    fontFamily: font.PoppinsRegular,
    color: color.darkGreen,
    fontWeight: '400',
    textAlignVertical: 'bottom',
    alignItems: 'center',
  },
});

export default styles;
