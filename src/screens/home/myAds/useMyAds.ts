import {useCallback, useEffect, useState} from 'react';
import {useAuthNavigation} from '../../../hooks/useAppNavigation';
import {useAppSelector} from '../../../hooks/useRedux';
import axiosInstance from '../../../services/api';
import constant from '../../../services/config/constant';
import {RootState} from '../../../services/redux/store';
import {Log} from '../../../utility/log';

const useMyAds = () => {
  const navigation = useAuthNavigation();
  const {token, userData} = useAppSelector(
    (state: RootState) => state.UserData,
  );

  const [dashState, setDashState] = useState<any>({
    isRefreshing: false,
    currentStep: 1,
    locations: [],
    drowerOpen: false,
  });

  //** Update all state */
  const updateState = useCallback(<T>(key: string, value: T) => {
    setDashState((prevState: any) => ({...prevState, [key]: value}));
  }, []);

  useEffect(() => {
    updateState('isRefreshing', true);
    getSessionList();
  }, []);

  //** start get api call Session List */
  const getSessionList = async () => {
    try {
      const {data} = await axiosInstance.get(`${constant.adsList}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (data) {
        updateState('locations', data);
        updateState('isRefreshing', false);
      }
    } catch (error) {
      Log('Error location :', error);
      updateState('isRefreshing', false);
    }
  };
  //** end get api call Session List */

  const selectLocation = (location: any) => {
     
  };

  return {
    updateState,
    dashState,
    userData,
    navigation,
    selectLocation,
  };
};

export default useMyAds;
