import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import color from '../../../theme/color';
import { Image } from 'react-native';
import imageIndex from '../../../assets/imageIndex';
import { goBack } from './../../../utility/navigationServices';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomDropdown = ({ options, selected, onSelect, placeholder }:any) => {
  const [visible, setVisible] = useState(false);

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const handleSelect = (option) => {
    onSelect(option);
    setVisible(false);
  };

  return (
    <View style={styles.dropdownContainer}>
        <View style={{
             padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    backgroundColor: color.secondaryBG,
    height:55,
    justifyContent:"center",
         }}>
      <TouchableOpacity style={styles.dropdownHeader} onPress={toggleDropdown}>
        <Text style={selected ? styles.dropdownText : styles.placeholderText}>
          {selected || placeholder}
        </Text>
  <Icon name="chevron-down-outline" size={26} color={color.white}  />
      </TouchableOpacity>
</View>
      {visible && (
        <View style={styles.dropdownOptions}>
          {options.map((option, index) => (
            <TouchableOpacity key={index} style={styles.option} onPress={() => handleSelect(option)}>
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
    marginBottom: 15,
  },
  dropdownHeader: {
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:5
    
  },
  dropdownText: {
    color: 'white',
  },
  placeholderText: {
    color: '#888',
    fontSize:14
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
