import {useAuthNavigation} from '../../../hooks/useAppNavigation';

const useSplash = () => {
  const navigation = useAuthNavigation();
  //** navigation to SignUp Screen */
  const handleNavigation = () => {
    navigation.navigate('SignUp');
  };

  //** navigation to Login Screen */
  const handleLoginNavigation = () => {
    navigation.navigate('Login');
  };
  return {handleLoginNavigation,handleNavigation};
};

export default useSplash;
