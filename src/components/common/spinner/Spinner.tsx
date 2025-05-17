import React from 'react';
import {Modal, View} from 'react-native';
import styles from './spinner.style';
import LottieView from 'lottie-react-native';

interface SpinnerProps {
  visible: boolean;
}
const Spinner: React.FC<SpinnerProps> = ({visible}) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.container}>
        <LottieView
          source={require('../../../assets/image/loader.json')}
          autoPlay
          loop
          style={styles.animation}
        />
      </View>
    </Modal>
  );
};

export default Spinner;
