import {useCallback, useMemo, useState} from 'react';
import {Alert, Keyboard} from 'react-native';
import {useAuthNavigation} from '../../../hooks/useAppNavigation';
import {
  checkEmail,
  checkNumeric,
  checkString,
} from '../../../utility/validation/stringValidation';
import {UserSignUpErrorProps, UserSignUpProps} from './SignUp';

const useSignUp = () => {
  const navigation = useAuthNavigation();
  const [userSignUp, setUserSignUp] = useState<UserSignUpProps>({
    fullName: '',
    phone: '',
    email: '',
    isLoading: false,
  });
  const [userSignUpError, setuserSignUpError] = useState<UserSignUpErrorProps>({
    fullNameError: undefined,
    phoneError: undefined,
    emailError: undefined,
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
      !userSignUp?.email,
    [userSignUp],
  );

  //** Validate SignUp */
  const onValidateSignUp = useCallback(() => {
    let tempError = {};
    if (!checkString(userSignUp?.fullName)) {
      tempError = {
        // fullNameError: validationMessage.invalidFirstName,
      };
    } else if (!checkNumeric(userSignUp?.phone)) {
      tempError = {
        // phoneError: validationMessage.invalidPhone,
      };
    } else if (!checkEmail(userSignUp?.email)) {
      tempError = {
        // emailError: validationMessage.invalidEmail,
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
  }, [userSignUp, navigation]);

  //** Navigate to Login screen */
  const navigateToLogin = useCallback(() => {
    navigation.navigate('Login');
  }, []);

  return {
    userSignUp,
    userSignUpError,
    updateLoginInputValue,
    isSignUp,
    onValidateSignUp,
    navigateToLogin,
  };
};

export default useSignUp;
