import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import color from '../../../theme/color';
import {styles} from './homeBottomTabs.style';

const CustomHomeBottomTabs: FC<BottomTabBarProps> = ({state, navigation}) => {
  const isFocused = state?.index;
  const onPress = (screenName: string) => {
    if (screenName) {
      navigation.reset({
        index: 0,
        routes: [{name: screenName}],
      });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.rowView,
          {
            backgroundColor:
              isFocused === 0 ? "white" : color.secondaryBG,
              borderColor:color.secondaryBG,
              borderWidth:1
          },
        ]}
        activeOpacity={0.8}
        onPress={() => onPress('HomeScreen')}>
        <Text
          allowFontScaling={false}
          numberOfLines={1}
          style={[
            styles.nameText,
            {
              color: isFocused === 0 ? color.secondaryBG : color.primaryText,
            },
          ]}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.rowView,
          {
            backgroundColor:
           isFocused === 1 ? "white" : color.secondaryBG,
              borderColor:color.secondaryBG,
              borderWidth:1
          },
        ]}
        activeOpacity={0.7}
        onPress={() => onPress('MyAds')}>
        <Text
          allowFontScaling={false}
          numberOfLines={1}
          style={[
            styles.nameText,
            {color: isFocused === 1 ? color.secondaryBG : color.primaryText},
          ]}>
          Review
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.rowView,
          {
            backgroundColor:
               isFocused === 2 ? "white" : color.secondaryBG,
              borderColor:color.secondaryBG,
              borderWidth:1
          },
        ]}
        activeOpacity={0.7}
        onPress={() => onPress('SupportScreen')}>
        <Text
          allowFontScaling={false}
          numberOfLines={1}
          style={[
            styles.nameText,
            {color: isFocused == 2 ? color.secondaryBG : color.primaryText},
          ]}>
          Setting
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomHomeBottomTabs;
