import {useCallback, useMemo, useState} from 'react';
import {Alert, Keyboard, Platform} from 'react-native';
import {useAuthNavigation} from '../../../hooks/useAppNavigation';
import {
  checkEmail,
  checkNumeric,
  checkString,
} from '../../../utility/validation/stringValidation';
import {UserSignUpErrorProps, UserSignUpProps} from './SignUp';
import ImageCropPicker from 'react-native-image-crop-picker';
import {Log} from '../../../utility/log';
import validationMessage from '../../../utility/validation/validationMessage';
import axiosInstance from '../../../services/api';
import constant from '../../../services/config/constant';
import {Toast} from '../../../utility/functions/toast';

const useSignUp = () => {
  const navigation = useAuthNavigation();
  const [userSignUp, setUserSignUp] = useState<UserSignUpProps>({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    image: '',
    isLoading: false,
  });
  const [userSignUpError, setuserSignUpError] = useState<UserSignUpErrorProps>({
    fullNameError: undefined,
    phoneError: undefined,
    emailError: undefined,
    passwordError: undefined,
    imageError: undefined,
  });

  //** Update state values */
  const updateLoginInputValue = useCallback(
    (key: string, value: string | boolean) => {
      setUserSignUp(prevState => ({...prevState, [key]: value}));
    },
    [userSignUp],
  );

  //** Handle SignUp button */
  const isSignUp = useMemo(
    () =>
      !userSignUp?.fullName ||
      !userSignUp?.phone ||
      userSignUp?.phone?.length !== 10 ||
      !userSignUp?.email ||
      !userSignUp?.password ||
      !userSignUp?.image,
    [userSignUp],
  );

  //** Validate SignUp */
  const onValidateSignUp = useCallback(() => {
    let tempError = {};
    if (!checkString(userSignUp?.fullName)) {
      tempError = {
        fullNameError: validationMessage.invalidFirstName,
      };
    } else if (!checkNumeric(userSignUp?.phone)) {
      tempError = {
        phoneError: validationMessage.invalidPhone,
      };
    } else if (!checkEmail(userSignUp?.email)) {
      tempError = {
        emailError: validationMessage.invalidEmail,
      };
    } else if (!userSignUp?.password) {
      tempError = {
        passwordError: validationMessage.invalidPassword,
      };
    } else if (!userSignUp?.image) {
      tempError = {
        imageError: validationMessage.requiredImage,
      };
    } else {
      tempError = {};
      onSignUpSubmit();
    }
    setuserSignUpError(tempError);
  }, [userSignUp, userSignUpError]);

  //** Call SignUp Api */
  const onSignUpSubmit = useCallback(async () => {
    updateLoginInputValue('isLoading', true);
    Keyboard.dismiss();
    const formData = new FormData();
    formData.append('name', userSignUp?.fullName);
    formData.append('phone', userSignUp?.phone);
    formData.append('email', userSignUp?.email);
    formData.append('password', userSignUp?.password);
    formData.append('group_id', 2);

    const imageName = userSignUp?.image?.split('/').pop();
    const type = 'image/png';
    if (userSignUp?.image) {
      formData.append('MediaFile', {
        name: imageName,
        uri:
          Platform.OS === 'android'
            ? userSignUp?.image
            : userSignUp?.image.replace('file://', ''),
        type: type,
      });
    }

    try {
      const {data} = await axiosInstance.post(constant?.signup, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (data) {
        updateLoginInputValue('isLoading', false);
        Toast(data?.message);
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'Login',
            },
          ],
        });
      }
    } catch (error: any) {
      console.log(error, 'error');
      console.log(error.response?.data, 'error');
      updateLoginInputValue('isLoading', false);
      Toast(error?.response?.data?.msg);
    }
  }, [userSignUp, navigation]);

  //** Navigate to Login screen */
  const navigateToLogin = useCallback(() => {
    navigation.navigate('Login');
  }, []);

  /** Start upload user iimage */
  const uploadImage = async () => {
    try {
      let mediaImg = await ImageCropPicker.openPicker({mediaType: 'photo'});
      updateLoginInputValue('image', mediaImg?.path);
    } catch (error) {
      Log('upload image error', error);
    }
  };

  return {
    userSignUp,
    userSignUpError,
    updateLoginInputValue,
    isSignUp,
    onValidateSignUp,
    navigateToLogin,
    uploadImage,
  };
};

export default useSignUp;
