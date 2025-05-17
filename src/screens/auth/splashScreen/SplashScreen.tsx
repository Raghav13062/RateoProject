import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import imageIndex from '../../../assets/imageIndex';
import CustomStatusbar from '../../../components/common/customStatusbar/CustomStatusbar';
import color from '../../../theme/color';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import useSplashScreen from './useSplashScreen';
import styles from './splashScreen.style';

export interface LoginProps {
  updateLoginInputValue: (key: string, value: string | boolean) => void;
}

export interface UserSplashProps {}

const SplashScreen: FC = () => {
  const {} = useSplashScreen();

  return (
    <LinearGradient
      style={styles.container}
      colors={color.linerCollor}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <CustomStatusbar backgroundColor={color.secondaryBG} barStyle="default" />
      <FastImage
        style={styles.logo}
        source={imageIndex.logo}
        resizeMode={FastImage.resizeMode.contain}
      />
    </LinearGradient>
  );
};

 
export default SplashScreen;
