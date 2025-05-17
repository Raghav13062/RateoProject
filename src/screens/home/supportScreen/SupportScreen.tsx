import React, {FC} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import color from '../../../theme/color';
import {CustomStatusbar, TextCustom} from '../../../components/componentsIndex';
import * as Animatable from 'react-native-animatable';
import font from '../../../theme/font';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAppDispatch, useAppSelector} from '../../../hooks/useRedux';
import {RootState} from '../../../services/redux/store';
import imageIndex from '../../../assets/imageIndex';
import {drawerItems} from './profile.const';
import {logoutSucces} from '../../../services/redux/userReducer/reducer';
import {useAuthNavigation} from '../../../hooks/useAppNavigation';
import { LinearGradient } from 'react-native-linear-gradient';

const SupportScreen: FC = () => {
  // ✅ Hook must be called here, inside the function component
  const {userData} = useAppSelector((state: RootState) => state.UserData);
  const dispatch = useAppDispatch();
  const navigation = useAuthNavigation();

  const onPress = (screenName: string) => {
    if (screenName === 'Logout') {
      dispatch(logoutSucces());
      navigation.reset({
        index: 0,
        routes: [{name: 'Login'}],
      });
    } else if (screenName === 'TermsAndConditions') {
      //
    } else if (screenName === 'PrivacyPolicy') {
      //
    } else {
      navigation.navigate(screenName);
    }
  };

  return (
    <View style={styles.container}>
      <CustomStatusbar
        backgroundColor={color.secondaryBG}
        barStyle="light-content"
      />
           <LinearGradient

              style={styles.stepHeader}
              colors={color.linerCollor}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
        <Animatable.View animation="fadeInLeft" duration={800} delay={100}>
          <View style={styles.backButtonViewLocation}>
            <Image style={styles.userLogo} source={imageIndex.teamwork} />
          </View>
        </Animatable.View>
        <Animatable.Text
          animation="fadeInDown"
          duration={800}
          delay={300}
          allowFontScaling={false}
          style={styles.stepTitle}>
          {`Welcome ${userData?.fullName ?? 'Customer'}`}
        </Animatable.Text>
</LinearGradient>


      <Animatable.View
        animation="fadeInUp"
        duration={600}
        delay={400}
        style={styles.optionsContainer}>
        {drawerItems.map((item, index) => (
          <Animatable.View
            key={index}
            animation="fadeInUp"
            duration={500}
            delay={500 + index * 100}>
            <TouchableOpacity
              style={styles.drawerItem}
              activeOpacity={0.8}
              onPress={() => onPress(item?.screenName)}>
              <Icon name={item.icon} size={25} color={color.secondaryBG} />
              <TextCustom label={item.label} style={styles.drawerItemLabel} />
            </TouchableOpacity>
          </Animatable.View>
        ))}
      </Animatable.View>
    </View>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.buttonBG,
  },
  stepTitle: {
    fontSize: 24,
    lineHeight: 29,
    fontWeight: '800',
    color: color.whiteLight,
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
  // options style
  optionsContainer: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: color.secondaryBG,
  },
  drawerItemLabel: {
    marginLeft: 15,
    fontSize: 15,
    lineHeight: 20,
    color: color.primaryText,
    fontFamily: font.PoppinsSemiBold,
  },
});
