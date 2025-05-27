import React, {useCallback, useMemo, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Alert,
  Platform,
} from 'react-native';
import {
  Button,
  CustomStatusbar,
  ErrorText,
  Header,
  InputContainer,
} from '../../../components/componentsIndex';
import color from '../../../theme/color';
import CustomDropdown from '../../../components/common/customDropdown/CustomDropdown';
import ImagePicker from 'react-native-image-crop-picker';
import {Rating} from 'react-native-ratings';
import axiosInstance from '../../../services/api';
import constant from '../../../services/config/constant';
import {Toast} from '../../../utility/functions/toast';
import {useAuthNavigation} from '../../../hooks/useAppNavigation';
import {useAppSelector} from '../../../hooks/useRedux';
import {RootState} from '../../../services/redux/store';

const CreateEstablishment = () => {
  const {userData} = useAppSelector((state: RootState) => state.UserData);
  const navigation = useAuthNavigation();
  const [loading, setLoading] = useState(false);
  const [businessName, setBusinessName] = useState('');
  const [location, setLocation] = useState('');
  const [footer, setFooter] = useState('');
  const [selectedRating, setSelectedRating] = useState(0);
  const [offer, setOffer] = useState('');
  const [language, setLanguage] = useState('');
  const [size, setSize] = useState('');
  const [logo, setLogo] = useState('');
  const [formErrors, setFormErrors] = useState<any>({});

  //** Handle active */
  const handleActive = useMemo(() => !language, [language]);

  const handleRatingCompleted = (rating: any) => {
    console.log('rating',rating);
    setSelectedRating(rating);
  };

  const pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: false,
      cropperCircleOverlay: false,
      compressImageQuality: 0.8,
    })
      .then((image: any) => {
        setLogo(image?.path);
      })
      .catch(error => {
        if (error.code !== 'E_PICKER_CANCELLED') {
          Alert.alert('Error', 'Could not select image');
        }
      });
  };
  const removeImage = () => {
    setLogo('');
  };

  const validateForm = () => {
    const errors: any = {};
    if (!businessName.trim()) {
      errors.businessName = 'Please Enter Business name';
    }
    if (!location.trim()) {
      errors.location = 'Please Enter Location';
    }
    // if (!footer.trim()) {
    //   errors.footer = 'Please Enter Footer';
    // }
    // if (!offer.trim()) {
    //   errors.offer = 'Please Enter offer';
    // }
    if (!logo) {
      errors.logo = 'Please Select Photo';
    }
    return errors;
  };

  const onSubmit = () => {
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    getBusinessReviews();
  };

  const getBusinessReviews = async () => {
    try {
      const formattedQuery = `${businessName} ${location}`;
      const {data} = await axiosInstance.get(
        `${constant.baseURL}reviews/${encodeURIComponent(formattedQuery)}`,
      );
      if (data) {
        onDoneSubmit(data?.data?.place_id, data?.data?.url);
      }
    } catch (error: any) {
      Toast(error?.response?.data?.msg);
      console.error('Error fetching business reviews:', error);
    }
  };

  const onDoneSubmit = useCallback(
    async (placeId: any, url: any) => {
      setLoading(true);
      const formData = new FormData();
      formData.append('user_id', userData?.id);
      formData.append('url', url);
      formData.append('headline', businessName);
      // formData.append('footer', footer);
      // formData.append('size', size);
      // formData.append('qr_color', 'sddsccdfdf');
      // formData.append('offer', offer);
      formData.append('place_id', placeId);
      formData.append('location', location);
      // formData.append('business_type', businessName);
      formData.append('language', language);
      if (selectedRating) {
        formData.append('business_rating', selectedRating);
      }
      const imageName = logo?.split('/').pop();
      const type = 'image/png';
      if (logo) {
        formData.append('image', {
          name: imageName,
          uri: Platform.OS === 'android' ? logo : logo?.replace('file://', ''),
          type: type,
        });
      }
      if (logo) {
        formData.append('logo', {
          name: imageName,
          uri: Platform.OS === 'android' ? logo : logo?.replace('file://', ''),
          type: type,
        });
      }

      try {
        const {data} = await axiosInstance.post(constant?.createQR, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        if (data) {
          console.log('data===>>>', data);
          setLoading(false);
          Toast(data?.message);
          navigation.goBack();
        }
      } catch (error: any) {
        console.log(error, 'error');
        console.log(error.response?.data, 'error');
        setLoading(false);
        Toast(error?.response?.data?.msg);
      }
    },
    [businessName, logo, language, location,selectedRating],
  );

  return (
    <View
      style={{
        backgroundColor: '#F5F5F5',
        flex: 1,
      }}>
      <CustomStatusbar
        backgroundColor={color.secondaryBG}
        barStyle="dark-content"
      />
      <Header
        lable="Establishment Management"
        showBackIcon
        containerStyle={styles.headerStyle}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <InputContainer
          placeholder="Enter Business Name"
          labelStyle={{color: color.whiteLight}}
          placeholderTextColor={color.whiteLight}
          keyboardType="default"
          maxLength={40}
          containerStyle={styles.emailContainer}
          inputContainerStyle={{backgroundColor: color.secondaryBG}}
          onChangeText={res => {
            setBusinessName(res);
            setFormErrors((prev: any) => ({...prev, businessName: ''}));
          }}
          value={businessName}
          error={formErrors.businessName}
          errorLabelStyle={{marginTop: '15%'}}
        />
        <InputContainer
          placeholder="Enter Business Address"
          labelStyle={{color: color.whiteLight}}
          placeholderTextColor={color.whiteLight}
          keyboardType="default"
          maxLength={50}
          containerStyle={styles.emailContainer}
          inputContainerStyle={{backgroundColor: color.secondaryBG}}
          error={formErrors?.location}
          onChangeText={res => {
            setLocation(res);
            setFormErrors((prev: any) => ({...prev, location: ''}));
          }}
          value={location}
          errorLabelStyle={{marginTop: '15%'}}
        />
        {/* <InputContainer
          placeholder="Enter Footer"
          labelStyle={{color: color.whiteLight}}
          placeholderTextColor={color.whiteLight}
          keyboardType="default"
          maxLength={40}
          containerStyle={styles.emailContainer}
          inputContainerStyle={{backgroundColor: color.secondaryBG}}
          value={footer}
          error={formErrors?.footer}
          onChangeText={res => {
            setFooter(res);
            setFormErrors((prev: any) => ({...prev, footer: ''}));
          }}
          errorLabelStyle={{marginTop: '15%'}}
        />
        <InputContainer
          placeholder="Enter Offer"
          labelStyle={{color: color.whiteLight}}
          placeholderTextColor={color.whiteLight}
          keyboardType="default"
          maxLength={40}
          containerStyle={styles.emailContainer}
          inputContainerStyle={{backgroundColor: color.secondaryBG}}
          value={offer}
          error={formErrors?.offer}
          onChangeText={res => {
            setOffer(res);
            setFormErrors((prev: any) => ({...prev, offer: ''}));
          }}
          errorLabelStyle={{marginTop: '15%'}}
        /> */}
        <CustomDropdown
          options={['English', 'Hindi', 'Spanish', 'French']}
          selected={language ?? 'Select Language'}
          onSelect={setLanguage}
          placeholder="Select Language"
        />
        {/* <CustomDropdown
          options={['Medium 250', 'Large 300*300']}
          selected={size ?? 'Select Size'}
          onSelect={setSize}
          placeholder="Select Size"
        /> */}
        {logo ? (
          <View style={styles.imageContainer}>
            <Image source={{uri: logo}} style={styles.image} />
            <TouchableOpacity
              onPress={removeImage}
              style={[
                styles.removeButton,
                {
                  position: 'absolute',
                  left: 12,
                },
              ]}>
              <Text style={styles.removeText}>x</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
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
            <ErrorText
              errorContainerStyle={{marginTop: 5}}
              error={formErrors?.logo}
            />
          </>
        )}
        <Text
          style={[
            styles.label,
            {
              marginTop: 12,
              marginBottom: 15,
            },
          ]}>
          Choose the rating below which reviews stay private:
        </Text>
        <Rating
          type="custom"
          ratingCount={5}
          imageSize={40}
          startingValue={selectedRating}
          onFinishRating={handleRatingCompleted}
          style={styles.rating}
          ratingBackgroundColor={color.lightgray}
          tintColor={'#F5F5F5'}
          ratingColor={color.yelloColor}
          fractions={0}
        />
        <Text style={styles.note}>
          Reviews below <Text style={styles.bold}>{selectedRating} stars</Text>{' '}
          will stay private.
        </Text>
      </ScrollView>
      <Button
        label="Generate QR"
        containerStyle={{
          marginTop: 30,
          marginBottom: 15,
        }}
        onPress={() => onSubmit()}
        isLoading={loading}
        disabled={handleActive}
        inActive={handleActive}
        marginHorizontal={30}
      />
    </View>
  );
};
export default CreateEstablishment;
const styles = StyleSheet.create({
  container: {padding: 20},
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
    width: 30,
    backgroundColor: 'red',
    height: 30,
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 60,
  },
  removeText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
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
