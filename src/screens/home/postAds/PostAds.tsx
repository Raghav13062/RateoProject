import React, {FC} from 'react';
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {
  Button,
  CustomStatusbar,
  Header,
  InputContainer,
  TextCustom,
} from '../../../components/componentsIndex';
import color from '../../../theme/color';
import styles from './postAds.style';
import useDashBord from './usePostAds';

const PostAds: FC = () => {
  const {updateState, userData, navigation, ProfileState} = useDashBord();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}>
      <CustomStatusbar
        backgroundColor={color.secondaryBG}
        barStyle="dark-content"
      />
      <Header
        showBackIcon
        containerStyle={styles.headerStyle}
        lable="Post Ads"
      />
      <ScrollView style={styles.flatStyle} showsVerticalScrollIndicator={false}>
        <Animatable.View
          animation="fadeInLeft"
          duration={800}
          delay={100}
          style={styles.flatAnimation}>
          <Animatable.View animation="fadeInUp" duration={1000} delay={400}>
            <TextCustom label={`Ads Details`} style={styles.headingText} />
          </Animatable.View>
          <InputContainer
            label="Full Name"
            labelStyle={{color: color.primaryText}}
            placeholderTextColor={color.primaryText}
            placeholder="Enter Name"
            // onChangeText={res => updateLoginInputValue('fullName', res)}
            // value={userSignUp?.fullName}
            keyboardType="default"
            maxLength={35}
            // error={userSignUpError?.fullNameError}
            errorLabelStyle={styles.inputErrorStyle}
            inputContainerStyle={{backgroundColor: color.secondaryBG}}
          />
          <InputContainer
            label="Moble Number"
            labelStyle={{color: color.primaryText}}
            placeholderTextColor={color.primaryText}
            placeholder="Enter Number"
            // onChangeText={res => updateLoginInputValue('fullName', res)}
            // value={userSignUp?.fullName}
            keyboardType="number-pad"
            maxLength={10}
            // error={userSignUpError?.fullNameError}
            containerStyle={styles.emailContainer}
            errorLabelStyle={styles.inputErrorStyle}
            inputContainerStyle={{backgroundColor: color.secondaryBG}}
          />
          <InputContainer
            label="Business Name"
            labelStyle={{color: color.primaryText}}
            placeholderTextColor={color.primaryText}
            placeholder="Enter Business"
            // onChangeText={res => updateLoginInputValue('fullName', res)}
            // value={userSignUp?.fullName}
            keyboardType="default"
            maxLength={50}
            // error={userSignUpError?.fullNameError}
            containerStyle={styles.emailContainer}
            errorLabelStyle={styles.inputErrorStyle}
            inputContainerStyle={{backgroundColor: color.secondaryBG}}
          />
          <InputContainer
            label="Business Address"
            labelStyle={{color: color.primaryText}}
            placeholderTextColor={color.primaryText}
            placeholder="Enter Address"
            // onChangeText={res => updateLoginInputValue('fullName', res)}
            // value={userSignUp?.fullName}
            keyboardType="default"
            maxLength={50}
            // error={userSignUpError?.fullNameError}
            containerStyle={styles.emailContainer}
            errorLabelStyle={styles.inputErrorStyle}
            inputContainerStyle={{backgroundColor: color.secondaryBG}}
          />
          <InputContainer
            label="Title"
            labelStyle={{color: color.primaryText}}
            placeholderTextColor={color.primaryText}
            placeholder="Enter Address"
            // onChangeText={res => updateLoginInputValue('fullName', res)}
            // value={userSignUp?.fullName}
            keyboardType="default"
            maxLength={50}
            // error={userSignUpError?.fullNameError}
            containerStyle={styles.emailContainer}
            errorLabelStyle={styles.inputErrorStyle}
            inputContainerStyle={{backgroundColor: color.secondaryBG}}
          />
          <InputContainer
            label="Doscription"
            labelStyle={{color: color.primaryText}}
            placeholderTextColor={color.primaryText}
            placeholder="Enter Address"
            // onChangeText={res => updateLoginInputValue('fullName', res)}
            // value={userSignUp?.fullName}
            keyboardType="default"
            maxLength={50}
            // error={userSignUpError?.fullNameError}
            containerStyle={styles.emailContainer}
            errorLabelStyle={styles.inputErrorStyle}
            inputContainerStyle={{backgroundColor: color.secondaryBG}}
          />
        </Animatable.View>
        <Animatable.View animation="fadeInUp" duration={800} delay={500}>
          <View style={styles.contentContainer}>
            <Animatable.View
              animation="pulse"
              iterationCount="infinite"
              duration={2000}>
              <Button
                label="SUBMIT"
                // onPress={onValidateSignUp}
                containerStyle={styles.btnLoginStyle}
                // isLoading={userSignUp?.isLoading}
                marginHorizontal={30}
              />
            </Animatable.View>
          </View>
        </Animatable.View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default PostAds;
