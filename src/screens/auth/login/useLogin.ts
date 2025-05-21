import {useCallback, useMemo, useState} from 'react';
import {Keyboard} from 'react-native';
import {useAuthNavigation} from '../../../hooks/useAppNavigation';
import {useAppDispatch} from '../../../hooks/useRedux';
import {UserLoginErrorProps, UserLoginProps} from './Login';
import {
  checkEmail,
  checkNumber,
} from '../../../utility/validation/stringValidation';
import validationMessage from '../../../utility/validation/validationMessage';
import axiosInstance from '../../../services/api';
import constant from '../../../services/config/constant';
import {Log} from '../../../utility/log';
import {Toast} from '../../../utility/functions/toast';
import {
  getUserDetails,
  loginSuccess,
} from '../../../services/redux/userReducer/reducer';

const useLogin = () => {
  const dispatch = useAppDispatch();
  const navigation = useAuthNavigation();
  const [userLogin, setUserLogin] = useState<UserLoginProps>({
    email: 'hello1@gmail.com',
    pass: '123456',
    isLoading: false,
  });
  const [userLoginError, setUserLoginError] = useState<UserLoginErrorProps>({
    emailError: '',
    passError: '',
  });

  //** Update state values */
  const updateLoginInputValue = useCallback(
    (key: string, value: string | boolean) => {
      setUserLogin(prevState => ({...prevState, [key]: value}));
    },
    [userLogin],
  );

  //** Handle login button */
  const isLogin = useMemo(
    () => !userLogin?.email || !userLogin?.pass,
    [userLogin],
  );

  //** Validate login */
  const onValidateLogin = useCallback(() => {
    Keyboard.dismiss();
    let tempError = {};
    if (!checkEmail(userLogin?.email)) {
      tempError = {
        emailError: validationMessage.invalidEmail,
      };
    } else if (!userLogin?.pass) {
      tempError = {
        passError: validationMessage.invalidPassword,
      };
    } else {
      tempError = {};
      onLoginSubmit();
    }
    setUserLoginError(tempError);
  }, [userLogin, userLoginError]);

  //** Call Login Api */
  const onLoginSubmit = useCallback(async () => {
    updateLoginInputValue('isLoading', true);
    Keyboard.dismiss();
    const loginData = {
      email: userLogin?.email?.trim(),
      password: userLogin?.pass?.trim(),
    };
    try {
      const {data} = await axiosInstance.post(constant?.login, loginData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (data) {
        Log(data, 'data login');
        let userData = {
          accessToken: data?.data?.token,
        };
        if (data) {
          Log('login api call', data);
          dispatch(loginSuccess(userData));
          dispatch(getUserDetails(data?.data));
          Toast(data?.message);
          navigation.reset({
            index: 0,
            routes: [{name: 'HomeBottomTabs'}],
          });
        }
      }
    } catch (error: any) {
      console.log(error.response.data, 'error');
      Toast(error?.response?.data?.message);
    } finally {
      updateLoginInputValue('isLoading', false);
    }
  }, [userLogin]);

  //** navigation to SignUp Screen */
  const handleNavigation = () => {
    navigation.navigate('SignUp');
  };

  return {
    userLogin,
    userLoginError,
    updateLoginInputValue,
    isLogin,
    onValidateLogin,
    handleNavigation,
  };
};

export default useLogin;
