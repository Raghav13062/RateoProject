import React, {FC, memo} from 'react';
import {
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import styles from './searchBar.style';
import color from '../../../theme/color';
import Icon from 'react-native-vector-icons/Ionicons';

interface SearchBarProps {
  containerStyle?: ViewStyle;
  textInputViewStyle?: ViewStyle;
  placeholder?: string;
  placeholderTextColor?: string;
  value?: string;
  setValue?: (value: string) => void;
  onSubmitEditing?: () => void;
  onEndEditing?: () => void;
  selectionColor?: string;
  inputStyle?: TextStyle;
  inputProps?: TextInputProps;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoCorrect?: boolean;
  autoFocus?: boolean;
  editable?: boolean;
}
const SearchBar: FC<SearchBarProps> = ({
  containerStyle,
  textInputViewStyle,
  placeholder,
  placeholderTextColor,
  value,
  setValue,
  onSubmitEditing,
  onEndEditing,
  selectionColor,
  inputStyle,
  inputProps,
  editable,
  autoFocus,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.textInputView, textInputViewStyle]}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          value={value}
          onChangeText={setValue}
          onSubmitEditing={onSubmitEditing}
          onEndEditing={onEndEditing}
          allowFontScaling={false}
          editable={editable}
          selectionColor={selectionColor}
          style={[styles.searchInputStyle, inputStyle]}
          autoFocus={autoFocus}
          {...inputProps}
        />
        <View style={styles.searchIcon}>
          <Icon name="search-outline" size={24} color={color.secondaryText} />
        </View>
      </View>
    </View>
  );
};

export default memo(SearchBar);
SearchBar.defaultProps = {
  selectionColor: color.secondaryBG,
};
