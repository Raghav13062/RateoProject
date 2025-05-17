import React, {FC} from 'react';
import {ScrollView, View} from 'react-native';
import CustomStatusbar from '../../../components/common/customStatusbar/CustomStatusbar';
import color from '../../../theme/color';
import styles from './splash.style';
import useSplash from './useSplash';
import {Button, TextCustom} from '../../../components/componentsIndex';
import * as Animatable from 'react-native-animatable';
import imageIndex from '../../../assets/imageIndex';
import LinearGradient from 'react-native-linear-gradient';

const Splash: FC = () => {
  const {handleLoginNavigation, handleNavigation} = useSplash();

  return (
    <LinearGradient
      style={styles.container}
      colors={color.linerCollor}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <CustomStatusbar
        backgroundColor={color.secondaryBG}
        barStyle="dark-content"
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Animatable.Image
          animation="bounceIn"
          duration={1200}
          delay={200}
          source={imageIndex.logo}
          style={styles.logo}
        />
        <Animatable.Text
          animation="fadeInDown"
          duration={1000}
          style={styles.headingText}>
          Hello.
        </Animatable.Text>
        <Animatable.Text
          animation="fadeInDown"
          delay={300}
          duration={1000}
          style={styles.headingDecText}>
          Let's Get Started!
        </Animatable.Text>
        <Animatable.View
          animation="fadeInUp"
          delay={600}
          duration={1200}
          style={styles.btnContainer}>
          <Animatable.View
            animation="pulse"
            iterationCount="infinite"
            duration={2000}>
            <Button
              label="Login"
              onPress={handleLoginNavigation}
              containerStyle={styles.btnStyle}
            />
          </Animatable.View>
          <TextCustom label="Or" style={styles.orTextStyle} />
          <Animatable.View
            animation="pulse"
            iterationCount="infinite"
            duration={2000}>
            <Button
              label="Register"
              onPress={handleNavigation}
              containerStyle={styles.btnStyle}
            />
          </Animatable.View>
        </Animatable.View>
        {/* Bottom Motivational Text */}
        <Animatable.Text
          animation="fadeInUp"
          delay={1000}
          duration={1500}
          style={styles.bottomText}>
          Login to enjoy the features we’ve{'\n'} provided
        </Animatable.Text>
      </ScrollView>
    </LinearGradient>
  );
};

export default Splash;
