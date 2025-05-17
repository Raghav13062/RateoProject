import React, {FC, memo} from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native';
import {styles} from './adsCard.style';
import {TextCustom} from '../../componentsIndex';
import * as Animatable from 'react-native-animatable';

interface PackageCardProps {
  item?: any;
  index: number;
  onPress?: () => void;
}

const AdsCard: FC<PackageCardProps> = ({item, onPress, index}) => {
  return (
    <Animatable.View
      animation="fadeInUp"
      duration={600}
      delay={index * 100}
      useNativeDriver
      style={styles.card}>
      <ImageBackground source={{uri: item?.image}} style={styles.image}>
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.8}
          style={styles.buttonstyle}>
          <TextCustom label={'CALL NOW'} style={styles.title} />
        </TouchableOpacity>
      </ImageBackground>
    </Animatable.View>
  );
};

export default memo(AdsCard);
