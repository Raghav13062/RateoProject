import React, {FC, memo} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {styles} from './categoryCard.style';
import {TextCustom} from '../../componentsIndex';
import * as Animatable from 'react-native-animatable';

interface PackageCardProps {
  item?: any;
  index: number;
  onPress?: () => void;
}

const CategoryCard: FC<PackageCardProps> = ({item, onPress, index}) => {
  return (
    <Animatable.View
      animation="fadeInUp"
      duration={600}
      delay={index * 100}
      useNativeDriver>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={styles.card}>
        <Image
          source={{
            uri: item?.url,
          }}
          style={styles.image}
        />
        <View style={styles.viewTitleStyle}>
          <TextCustom label={item?.title} style={styles.title} />
        </View>
      </TouchableOpacity>
    </Animatable.View>
  );
};

export default memo(CategoryCard);
