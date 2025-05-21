import React, {FC} from 'react';
import {
  KeyboardAvoidingView,
  Text,
  Platform,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import InputContainer from '../../../components/common/inputContainer/InputContainer';
import {
  Button,
  CustomStatusbar,
  ErrorText,
  Header,
  TextCustom,
} from '../../../components/componentsIndex';
import color from '../../../theme/color';
import styles from './signUp.style';
import useLogin from './useSignUp';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

export interface SignUpProps {
  userSignUp: UserSignUpProps;
  userSignUpError: UserSignUpErrorProps;
  updateLoginInputValue: (key: string, value: string | boolean) => void;
  isLogin: () => void;
  onValidateLogin: () => void;
  navigateToForgotPassword: () => void;
  navigateToSignUp: () => void;
}

export interface UserSignUpProps {
  fullName: string;
  phone: string;
  email: string;
  password: string;
  image: string;
  isLoading: boolean;
}
export interface UserSignUpErrorProps {
  fullNameError?: string;
  phoneError?: string;
  emailError?: string;
  passwordError?: string;
  imageError?: string;
}

const SignUp: FC = () => {
  const {
    userSignUp,
    userSignUpError,
    updateLoginInputValue,
    isSignUp,
    onValidateSignUp,
    navigateToLogin,
    uploadImage,
  } = useLogin();

  return (
    <LinearGradient
      style={styles.container}
      colors={color.linerCollor}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <KeyboardAvoidingView
        style={styles.formContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
        <CustomStatusbar
          backgroundColor={color.secondaryBG}
          barStyle="light-content"
        />
        <Header showBackIcon containerStyle={styles.headerStyle} />
        <ScrollView
          style={styles.containerScroll}
          showsVerticalScrollIndicator={false}>
          <Animatable.View animation="fadeInUp" duration={800} delay={100}>
            <TextCustom
              label="Sign Up to continue"
              style={styles.headingText}
            />
          </Animatable.View>
          <Animatable.View animation="fadeInUp" duration={800} delay={200}>
            <InputContainer
              label="Full Name"
              labelStyle={{color: color.whiteLight}}
              placeholderTextColor={color.whiteLight}
              placeholder="Enter Name"
              onChangeText={res => updateLoginInputValue('fullName', res)}
              value={userSignUp?.fullName}
              keyboardType="default"
              maxLength={20}
              error={userSignUpError?.fullNameError}
              containerStyle={styles.emailContainer}
              errorLabelStyle={styles.inputErrorStyle}
              inputContainerStyle={{backgroundColor: color.secondaryBG}}
            />
          </Animatable.View>
          <Animatable.View animation="fadeInUp" duration={800} delay={200}>
            <InputContainer
              label="Phone Number"
              labelStyle={{color: color.whiteLight}}
              placeholder="Enter Number"
              placeholderTextColor={color.whiteLight}
              onChangeText={res => updateLoginInputValue('phone', res?.trim())}
              value={userSignUp?.phone}
              keyboardType="number-pad"
              maxLength={10}
              error={userSignUpError?.phoneError}
              containerStyle={styles.emailContainer}
              errorLabelStyle={styles.inputErrorStyle}
              inputContainerStyle={{backgroundColor: color.secondaryBG}}
            />
          </Animatable.View>
          <Animatable.View animation="fadeInUp" duration={800} delay={200}>
            <InputContainer
              label="Email Address"
              labelStyle={{color: color.whiteLight}}
              placeholderTextColor={color.whiteLight}
              placeholder="Enter Email"
              onChangeText={res => updateLoginInputValue('email', res?.trim())}
              value={userSignUp?.email}
              keyboardType="default"
              maxLength={50}
              error={userSignUpError?.emailError}
              containerStyle={styles.emailContainer}
              errorLabelStyle={styles.inputErrorStyle}
              inputContainerStyle={{backgroundColor: color.secondaryBG}}
            />
          </Animatable.View>
          <Animatable.View animation="fadeInUp" duration={800} delay={200}>
            <InputContainer
              label="Enter Password"
              labelStyle={{color: color.whiteLight}}
              placeholderTextColor={color.whiteLight}
              placeholder="Enter Password"
              onChangeText={res =>
                updateLoginInputValue('password', res?.trim())
              }
              value={userSignUp?.password}
              keyboardType="default"
              maxLength={50}
              error={userSignUpError?.passwordError}
              containerStyle={styles.emailContainer}
              errorLabelStyle={styles.inputErrorStyle}
              inputContainerStyle={{backgroundColor: color.secondaryBG}}
            />
          </Animatable.View>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              fontWeight: '500',
              marginTop: 5,
              marginBottom: 1,
            }}>
            Add photos
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View>
              <TouchableOpacity
                onPress={uploadImage}
                style={{
                  height: 58,
                  width: 58,
                  backgroundColor: 'white',
                  borderWidth: 1.5,
                  borderStyle: 'dotted',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  marginTop: 10,
                }}>
                {userSignUp?.image ? (
                  <View style={styles.imageContainer}>
                    <Image
                      source={{uri: userSignUp?.image}}
                      style={styles.imageStyle}
                    />
                  </View>
                ) : (
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 20,
                    }}>
                    +
                  </Text>
                )}
              </TouchableOpacity>
              <ErrorText
                errorTextStyle={{
                  alignSelf: 'flex-start',
                }}
                error={userSignUpError?.imageError}
              />
            </View>
          </View>

          <Animatable.View animation="fadeInUp" duration={800} delay={500}>
            <View style={styles.contentContainer}>
              <Animatable.View
                animation="pulse"
                iterationCount="infinite"
                duration={2000}>
                <Button
                  label="Signup"
                  // disabled={isSignUp}
                  // inActive={isSignUp}
                  onPress={onValidateSignUp}
                  containerStyle={styles.btnLoginStyle}
                  isLoading={userSignUp?.isLoading}
                  marginHorizontal={30}
                />
              </Animatable.View>
            </View>
          </Animatable.View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default SignUp;
