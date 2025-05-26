import React, {FC} from 'react';
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {
  Button,
  CustomStatusbar,
  Header,
  InputContainer,
  Spinner,
  TextCustom,
} from '../../../components/componentsIndex';
import color from '../../../theme/color';
import styles from './profile.style';
import useDashBord from './useProfile';

const Profile: FC = () => {
  const {updateState, ProfileState, updateProfile, userData} = useDashBord();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}>
      <CustomStatusbar
        backgroundColor={color.secondaryBG}
        barStyle="dark-content"
      />
      <Header
        lable="Profile"
        showBackIcon
        containerStyle={styles.headerStyle}
      />
      <ScrollView style={styles.flatStyle} showsVerticalScrollIndicator={false}>
        <Animatable.View
          animation="fadeInLeft"
          duration={800}
          delay={100}
          style={styles.flatAnimation}>
          <Animatable.View animation="fadeInUp" duration={1000} delay={400}>
            <TextCustom label={`Profile Details`} style={styles.headingText} />
          </Animatable.View>
          <InputContainer
            label="Name"
            labelStyle={{color: color.primaryText}}
            placeholderTextColor={color.primaryText}
            placeholder="Enter Name"
            onChangeText={res => updateState('fullName', res)}
            value={ProfileState?.fullName}
            keyboardType="default"
            maxLength={40}
            errorLabelStyle={styles.inputErrorStyle}
            inputContainerStyle={{backgroundColor: color.secondaryBG}}
          />
          <InputContainer
            label="Email"
            labelStyle={{color: color.primaryText}}
            placeholderTextColor={color.primaryText}
            placeholder="Enter Email"
            onChangeText={res => updateState('email', res?.trim())}
            value={ProfileState?.email}
            keyboardType="default"
            maxLength={50}
            containerStyle={styles.emailContainer}
            errorLabelStyle={styles.inputErrorStyle}
            inputContainerStyle={{backgroundColor: color.secondaryBG}}
          />
          <InputContainer
            label="Phone Number"
            labelStyle={{color: color.primaryText}}
            placeholderTextColor={color.primaryText}
            placeholder="Enter Number"
            onChangeText={res => updateState('phone', res?.trim())}
            value={ProfileState?.phone}
            keyboardType="number-pad"
            maxLength={10}
            containerStyle={styles.emailContainer}
            errorLabelStyle={styles.inputErrorStyle}
            inputContainerStyle={{backgroundColor: color.secondaryBG}}
          />
          {/* <InputContainer
            label="Business Name"
            labelStyle={{color: color.primaryText}}
            placeholderTextColor={color.primaryText}
            placeholder="Enter Business"
            onChangeText={res => updateState('bName', res)}
            value={ProfileState?.bName}
            keyboardType="default"
            maxLength={50}
            containerStyle={styles.emailContainer}
            errorLabelStyle={styles.inputErrorStyle}
            inputContainerStyle={{backgroundColor: color.secondaryBG}}
          />
          <InputContainer
            label="Business Address"
            labelStyle={{color: color.primaryText}}
            placeholderTextColor={color.primaryText}
            placeholder="Enter Address"
            onChangeText={res => updateState('bAdress', res)}
            value={ProfileState?.bAdress}
            keyboardType="default"
            maxLength={50}
            containerStyle={styles.emailContainer}
            errorLabelStyle={styles.inputErrorStyle}
            inputContainerStyle={{backgroundColor: color.secondaryBG}}
          /> */}
        </Animatable.View>
        <Animatable.View animation="fadeInUp" duration={800} delay={500}>
          <View style={styles.contentContainer}>
            <Animatable.View
              animation="pulse"
              iterationCount="infinite"
              duration={2000}>
              <Button
                label="SUBMIT"
                onPress={updateProfile}
                containerStyle={styles.btnLoginStyle}
                isLoading={ProfileState?.isLoading}
                marginHorizontal={30}
              />
            </Animatable.View>
          </View>
        </Animatable.View>
      </ScrollView>
      <Spinner visible={ProfileState?.isRefreshing} />
    </KeyboardAvoidingView>
  );
};

export default Profile;
