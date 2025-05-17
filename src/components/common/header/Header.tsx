import React, {FC, memo, useCallback} from 'react';
import {TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import {useAuthNavigation} from '../../../hooks/useAppNavigation';
import {styles} from './header.style';
import Icon from 'react-native-vector-icons/Ionicons';
import color from '../../../theme/color';
import TextCustom from '../textCustom/TextCustom';

export interface HeaderProps {
  containerStyle?: ViewStyle;
  showBackIcon?: boolean;
  lable?: string;
  lableStyle?: TextStyle;
}

const Header: FC<HeaderProps> = ({
  containerStyle,
  showBackIcon,
  lable,
  lableStyle,
}) => {
  const navigation = useAuthNavigation();
  const handleBackNavigation = useCallback(() => {
    navigation.goBack();
  }, [navigation, showBackIcon]);

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.rightIconRow}>
        <View style={styles.titleRow}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleBackNavigation}
            style={styles.backButtonView}>
            <Icon
              name="chevron-back-outline"
              size={25}
              color={color.whiteLight}
            />
          </TouchableOpacity>
          <View style={styles.textViewStyle}>
            {lable && (
              <TextCustom
                label={lable}
                style={[styles.labelText, lableStyle]}
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(Header);

Header.defaultProps = {
  showBackIcon: false,
};
