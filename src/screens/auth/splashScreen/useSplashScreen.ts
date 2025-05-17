import {useEffect} from 'react';
import {useAuthNavigation} from '../../../hooks/useAppNavigation';
import {useAppSelector} from '../../../hooks/useRedux';
import {RootState} from '../../../services/redux/store';

const useSplashScreen = () => {
  const navigation = useAuthNavigation();
  const {isLogin} = useAppSelector((state: RootState) => state?.UserData);

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: isLogin ? 'HomeBottomTabs' : 'Splash'}],
      });
    }, 2500);
    return () => clearTimeout(timeout);
  }, [navigation]);

  return {};
};

export default useSplashScreen;
