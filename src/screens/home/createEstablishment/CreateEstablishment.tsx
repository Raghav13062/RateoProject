import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {Button, CustomStatusbar, Header, InputContainer} from '../../../components/componentsIndex';
import color from '../../../theme/color';
import CustomDropdown from '../../../components/common/customDropdown/CustomDropdown';
import ImagePicker from 'react-native-image-crop-picker';
import { Rating } from 'react-native-ratings';

const CreateEstablishment = () => {
  const [businessName, setBusinessName] = useState('');
  const [location, setLocation] = useState('');
  const [footer, setFooter] = useState('');
 const [selectedRating, setSelectedRating] = useState(3);

  const handleRatingCompleted = (rating) => {
    setSelectedRating(rating);
  };

  const [offer, setOffer] = useState('');
  const [language, setLanguage] = useState('English');
  const [size, setSize] = useState('Medium');
  const [rating, setRating] = useState(4);
  const [logo, setLogo] = useState(null);
  const [banner, setBanner] = useState(null);
  const [qrValue, setQrValue] = useState('');
  const pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      cropperCircleOverlay: false,
      compressImageQuality: 0.8,
    })
      .then(image => {
        setLogo({uri: image.path});
      })
      .catch(error => {
        if (error.code !== 'E_PICKER_CANCELLED') {
          Alert.alert('Error', 'Could not select image');
        }
      });
  };
  const removeImage = () => {
    setLogo(null);
  };

  return (
    <View style={{
      backgroundColor: '#F5F5F5',
      flex:1
    }}>

      <CustomStatusbar
              backgroundColor={color.secondaryBG}
              barStyle="dark-content"
            />
            <Header
              lable="Management"
              showBackIcon
              containerStyle={styles.headerStyle}
            />
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
       <InputContainer
        placeholder="Enter Your Business Name"
        labelStyle={{color: color.whiteLight}}
        placeholderTextColor={color.whiteLight}
        keyboardType="default"
        maxLength={20}
        containerStyle={styles.emailContainer}
        inputContainerStyle={{backgroundColor: color.secondaryBG}}
        // error={userLoginError?.passError}
        errorLabelStyle={{marginTop: '23%'}}
      />
      <InputContainer
        placeholder="Enter Your Business Name"
        labelStyle={{color: color.whiteLight}}
        placeholderTextColor={color.whiteLight}
        keyboardType="default"
        maxLength={20}
        containerStyle={styles.emailContainer}
        inputContainerStyle={{backgroundColor: color.secondaryBG}}
        // error={userLoginError?.passError}
        errorLabelStyle={{marginTop: '23%'}}
      />
      <InputContainer
        placeholder="Location"
        labelStyle={{color: color.whiteLight}}
        placeholderTextColor={color.whiteLight}
        keyboardType="default"
        maxLength={20}
        containerStyle={styles.emailContainer}
        inputContainerStyle={{backgroundColor: color.secondaryBG}}
        // error={userLoginError?.passError}
        errorLabelStyle={{marginTop: '23%'}}
      />
      <InputContainer
        placeholder="Footer"
        labelStyle={{color: color.whiteLight}}
        placeholderTextColor={color.whiteLight}
        keyboardType="default"
        maxLength={20}
        containerStyle={styles.emailContainer}
        inputContainerStyle={{backgroundColor: color.secondaryBG}}
        // error={userLoginError?.passError}
        errorLabelStyle={{marginTop: '23%'}}
      />

      <InputContainer
        placeholder="Offer (Optional)"
        labelStyle={{color: color.whiteLight}}
        placeholderTextColor={color.whiteLight}
        keyboardType="default"
        maxLength={20}
        containerStyle={styles.emailContainer}
        inputContainerStyle={{backgroundColor: color.secondaryBG}}
        // error={userLoginError?.passError}
        errorLabelStyle={{marginTop: '23%'}}
      />

      <CustomDropdown
        options={['English', 'Hindi', 'Spanish', 'French']}
        selected={language}
        onSelect={setLanguage}
        placeholder="Select Language"
      />
      <CustomDropdown
        options={['Medium 250', 'Medium 300*300']}
        selected={size}
        onSelect={setSize}
        placeholder="Select Size"
      />
      {logo ? (
        <View style={styles.imageContainer}>
          <Image source={logo} style={styles.image} />
          <TouchableOpacity onPress={removeImage} style={[styles.removeButton,{
            position:"absolute",
            left:12
          }]}>
            <Text style={styles.removeText}>x</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity 
        onPress={pickImage}
          style={{
            borderWidth: 1,
            width: 120,
            borderStyle: 'dashed',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: color.secondaryBG,
          }}>
          <Text style={styles.label}>Upload Photo</Text>
        </TouchableOpacity>
      )}

       <Text style={[styles.label,{
        marginTop:12,
        marginBottom:15
       }]}>Choose the rating below which reviews stay private:</Text>

      <Rating
        type="star"
        ratingCount={4}
        imageSize={40}
        startingValue={selectedRating}
        onFinishRating={handleRatingCompleted}
        style={styles.rating}
        fractions={0}
      />

      <Text style={styles.note}>
        Reviews below <Text style={styles.bold}>{selectedRating} stars</Text> will stay private.
      </Text>
 
     
    </ScrollView>
     <Button
        label="Generate QR"
        containerStyle={{
          marginTop: 30,
          marginBottom:15
        }}
        // onPress={() => onValidateLogin()}
        // isLoading={userLogin?.isLoading}
        marginHorizontal={30}
      />
    </View>
  );
};
export default CreateEstablishment;
const styles = StyleSheet.create({
  container: {padding: 20, },
  title: {fontSize: 24, fontWeight: 'bold', marginBottom: 15},
  input: {
    backgroundColor: '#FFF',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: '#DDD',
    borderWidth: 1,
  },
  headerStyle: {
      paddingLeft: 18,
      backgroundColor: color.secondaryBG,
      marginBottom: 0,
      paddingTop: 4,
    },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: 'balck',
    },
  uploadButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
    rating: {
    paddingVertical: 10,
  },
  note: {
    marginTop: 15,
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
    color: '#000',
  },

  uploadText: {
    color: '#fff',
    fontSize: 16,
  },
  imageContainer: {
    // alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
    marginBottom: 10,
  },
  removeButton: {
 width:30,
 backgroundColor:"red",
 height:30,
 justifyContent:"center",
 borderRadius:10,
 marginLeft:60
   },
  removeText: {
    color: 'white',
    fontSize:16,
     textAlign:"center"
  },

  emailContainer: {
    marginTop: 0,
    // marginBottom: 0,
  },
  imageSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  generateButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {color: '#FFF', fontWeight: 'bold'},
  imagePreview: {width: 100, height: 100, borderRadius: 5, marginTop: 10},
  qrContainer: {alignItems: 'center', marginTop: 20},
});
