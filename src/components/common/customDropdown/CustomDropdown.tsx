import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import color from '../../../theme/color';
import {Image} from 'react-native';
import imageIndex from '../../../assets/imageIndex';
import {goBack} from './../../../utility/navigationServices';
import Icon from 'react-native-vector-icons/Ionicons';
import font from '../../../theme/font';

const CustomDropdown = ({options, selected, onSelect, placeholder}: any) => {
  const [visible, setVisible] = useState(false);

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const handleSelect = option => {
    onSelect(option);
    setVisible(false);
  };

  return (
    <View style={styles.dropdownContainer}>
      <View
        style={{
          padding: 12,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 6,
          backgroundColor: color.secondaryBG,
          height: 55,
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={styles.dropdownHeader}
          onPress={toggleDropdown}>
          <Text style={selected ? styles.dropdownText : styles.placeholderText}>
            {selected || placeholder}
          </Text>
          <Icon name="chevron-down-outline" size={26} color={color.white} />
        </TouchableOpacity>
      </View>
      {visible && (
        <View style={styles.dropdownOptions}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.option}
              onPress={() => handleSelect(option)}>
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    marginBottom: 20,
  },
  dropdownHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  dropdownText: {
    fontFamily: font.PoppinsSemiBold,
    fontSize: 15,
    color: color.white,
    fontWeight: '400',
    lineHeight: 20,
    flex: 1,
  },
  placeholderText: {
    fontFamily: font.PoppinsSemiBold,
    fontSize: 15,
    color: color.white,
    fontWeight: '400',
    lineHeight: 20,
    flex: 1,
  },
  dropdownOptions: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: color.secondaryBG,
    borderRadius: 6,
    backgroundColor: '#f9f9f9',
  },
  option: {
    padding: 12,
    borderBottomWidth: 0.8,
    borderBottomColor: 'black',
  },
});

export default CustomDropdown;
