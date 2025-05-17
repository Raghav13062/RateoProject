import React, {FC, memo} from 'react';
import {Text, TextStyle, TextProps} from 'react-native';

interface TextCustomProps extends TextProps {
  label: string | undefined | any;
  style?: TextStyle | any;
  onPress?: () => void;
}

const TextCustom: FC<TextCustomProps> = ({
  label,
  style,
  allowFontScaling = false,
  onPress,
  ...props
}) => {
  return (
    <Text
      onPress={onPress}
      style={style}
      allowFontScaling={allowFontScaling}
      {...props}>
      {label}
    </Text>
  );
};

export default memo(TextCustom);
