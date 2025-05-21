import {useCallback, useEffect, useRef, useState} from 'react';
import {useAuthNavigation} from '../../../hooks/useAppNavigation';
import {useAppSelector} from '../../../hooks/useRedux';
import axiosInstance from '../../../services/api';
import constant from '../../../services/config/constant';
import {RootState} from '../../../services/redux/store';
import {Log} from '../../../utility/log';

const useDashBord = () => {
  const navigation = useAuthNavigation();
  const {userData} = useAppSelector((state: RootState) => state.UserData);

  const [dashState, setDashState] = useState<any>({
    isRefreshing: false,
    details: [],
  });

  //** Update all state */
  const updateState = useCallback(<T>(key: string, value: T) => {
    setDashState((prevState: any) => ({...prevState, [key]: value}));
  }, []);

  useEffect(() => {
    updateState('isRefreshing', true);
    getDetails();
  }, []);

  //** start get api call getDetails */
  const getDetails = async () => {
    try {
      const {data} = await axiosInstance.get(`${constant.getDashboard}`);
      if (data) {
        updateState('details', data?.data);
      }
    } catch (error) {
      Log('Error location :', error);
      updateState('isRefreshing', false);
    }
  };
  //** end get api call getDetails */

  const navigationToPostAds = () => {
    navigation.navigate('PostAds');
  };

  return {
    updateState,
    dashState,
    userData,
    navigation,
    navigationToPostAds,
  };
};

export default useDashBord;
