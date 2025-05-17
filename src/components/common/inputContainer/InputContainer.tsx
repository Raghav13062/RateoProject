import React, {forwardRef, memo, useRef, useState} from 'react';
import {
  KeyboardTypeOptions,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {styles} from './inputContainer.style';
import color from '../../../theme/color';

interface InputPorps {
  reference?: React.Ref<TextInput>;
  containerStyle?: ViewStyle;
  lableRowStyle?: ViewStyle;
  label?: string;
  labelStyle?: TextStyle;
  labelSecondIcon?: React.JSX.ElementType;
  inputContainerStyle?: ViewStyle;
  leftIcon?: React.JSX.ElementType;
  inputStyle?: TextStyle;
  placeholder?: string;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
  rightElementType?: 'password';
  inputProps?: TextInputProps;
  hidePassword?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  multiline?: boolean;
  numberOfLines?: number;
  maxLength?: number;
  editable?: boolean;
  error?: string;
  errorLabelStyle?: TextStyle;
  validationLabelcolor?: boolean;
  onSubmitEditing?: (value: any) => void;
}

const InputContainer = forwardRef<TextInput, InputPorps>(
  (
    {
      reference,
      containerStyle,
      lableRowStyle,
      label,
      labelStyle,
      rightElementType,
      inputContainerStyle,
      inputStyle,
      placeholder,
      placeholderTextColor,
      secureTextEntry,
      autoCapitalize,
      returnKeyType,
      hidePassword,
      value,
      onChangeText,
      keyboardType,
      multiline,
      numberOfLines,
      maxLength,
      editable,
      error,
      errorLabelStyle,
      validationLabelcolor,
      inputProps,
      onSubmitEditing,
      ...props
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const inputRef: any = ref ?? useRef<TextInput>(null);
    const checkIsFocusedHandler = () => {
      setTimeout(() => {
        let result = inputRef?.current?.isFocused();
        setIsFocused(result);
      }, 0);
    };
    return (
      <View style={[styles.container, containerStyle]}>
        {label && (
          <View style={[styles.lableRow, lableRowStyle]}>
            {label && (
              <Text
                allowFontScaling={false}
                style={[styles.lable, labelStyle]}
                numberOfLines={1}>
                {label}{' '}
              </Text>
            )}
          </View>
        )}
        <View
          style={[
            styles.inputContainer,
            {
              borderColor: error
                ? color.warning
                : !isFocused
                ? color.secondaryBG
                : color.whiteLight,
              borderWidth: !isFocused && !error ? 1 : 1.5,
             },
            inputContainerStyle,
          ]}>
          <TextInput
            ref={inputRef}
            style={[styles.inputStyle, inputStyle]}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor ?? color.secondaryText}
            onFocus={checkIsFocusedHandler}
            onEndEditing={checkIsFocusedHandler}
            autoCorrect={false}
            value={value}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            multiline={multiline}
            numberOfLines={numberOfLines}
            maxLength={maxLength}
            editable={editable}
            cursorColor={color.darkGreen}
            autoCapitalize={autoCapitalize}
            returnKeyType={returnKeyType}
            onSubmitEditing={onSubmitEditing}
            allowFontScaling={false}
            {...inputProps}
          />
        </View>
        {error && (
          <Text
            allowFontScaling={false}
            numberOfLines={1}
            style={[styles.errorLabel, errorLabelStyle]}>
            {error}
          </Text>
        )}
      </View>
    );
  },
);

export default memo(InputContainer);
