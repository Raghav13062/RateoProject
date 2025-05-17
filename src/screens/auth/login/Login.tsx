import React, {FC} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import {
  Button,
  CustomStatusbar,
  Header,
  InputContainer,
  TextCustom,
} from '../../../components/componentsIndex';
import color from '../../../theme/color';
import styles from './login.style';
import useLogin from './useLogin';
import imageIndex from '../../../assets/imageIndex';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

export interface LoginProps {
  userLogin: UserLoginProps;
  userLoginError: UserLoginErrorProps;
  updateLoginInputValue: (key: string, value: string | boolean) => void;
  isLogin: () => void;
  onValidateLogin: () => void;
  navigateToForgotPassword: () => void;
  navigateToSignUp: () => void;
}

export interface UserLoginProps {
  email: string;
  isLoading: boolean;
  pass: string;
}

export interface UserLoginErrorProps {
  emailError: string;
  passError: string;
}

const Login: FC = () => {
  const {
    userLogin,
    userLoginError,
    updateLoginInputValue,
    isLogin,
    onValidateLogin,
    handleNavigation,
  } = useLogin();

  return (
    <LinearGradient
      style={styles.container}
      colors={color.linerCollor}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <CustomStatusbar
          backgroundColor={color.secondaryBG}
          barStyle="dark-content"
        />
        <Header showBackIcon containerStyle={styles.headerStyle} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollContainer}>
          <Animatable.Image
            animation="bounceIn"
            duration={1200}
            delay={200}
            source={imageIndex.logo}
            style={styles.logo}
          />
          <Animatable.View
            style={styles.formContainer}
            animation="fadeInUp"
            duration={1000}
            delay={600}>
            <InputContainer
              label="Enter Email"
              labelStyle={{color: color.whiteLight}}
              placeholderTextColor={color.whiteLight}
              placeholder="Enter Email"
              onChangeText={res => updateLoginInputValue('email', res)}
              keyboardType="default"
              maxLength={20}
              value={userLogin?.email}
              containerStyle={styles.emailContainer}
              inputContainerStyle={{backgroundColor: color.secondaryBG}}
              error={userLoginError?.emailError}
              errorLabelStyle={{marginTop: '23%'}}
            />
          </Animatable.View>
          <Animatable.View
            style={styles.formContainer}
            animation="fadeInUp"
            duration={1000}
            delay={600}>
            <InputContainer
              label="Enter password"
              labelStyle={{color: color.whiteLight}}
              placeholderTextColor={color.whiteLight}
              placeholder="Enter password"
              value={userLogin?.pass}
              onChangeText={res => updateLoginInputValue('pass', res)}
              keyboardType="default"
              maxLength={20}
              containerStyle={styles.emailContainer}
              inputContainerStyle={{backgroundColor: color.secondaryBG}}
              error={userLoginError?.passError}
              errorLabelStyle={{marginTop: '23%'}}
            />
          </Animatable.View>
          <Animatable.View animation="fadeInUp" duration={800} delay={500}>
            <View>
              <Animatable.View
                animation="pulse"
                iterationCount="infinite"
                duration={2000}>
                <Button
                  label="Singin"
                  containerStyle={{
                    marginTop: 30,
                  }}
                  onPress={() => onValidateLogin()}
                  isLoading={userLogin?.isLoading}
                  // marginHorizontal={30}
                  marginHorizontal={30}
                />
              </Animatable.View>
            </View>
          </Animatable.View>
        </ScrollView>
        <View style={styles.viewStyle}>
          <TextCustom
            label="Don’t Have an Account : "
            style={styles.haveAnAcountStyl}
          />
          <TextCustom
            label="Click here to register"
            style={styles.registerTextStyle}
            onPress={handleNavigation}
          />
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default Login;
