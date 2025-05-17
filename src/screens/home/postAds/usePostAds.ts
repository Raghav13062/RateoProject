import {useCallback, useEffect, useState} from 'react';
import {useAuthNavigation} from '../../../hooks/useAppNavigation';
import {useAppSelector} from '../../../hooks/useRedux';
import axiosInstance from '../../../services/api';
import constant from '../../../services/config/constant';
import {RootState} from '../../../services/redux/store';
import {Log} from '../../../utility/log';

const usePostAds = () => {
  const navigation = useAuthNavigation();
  const {token, userData} = useAppSelector(
    (state: RootState) => state.UserData,
  );

  const [ProfileState, setProfileState] = useState<any>({
    isRefreshing: false,
    isLoading: false,
    fullName: '',
    number: '',
    bName: '',
    bAdress: '',
    title: '',
    description: '',
    image: '',
  });

  //** Update all state */
  const updateState = useCallback(<T>(key: string, value: T) => {
    setProfileState((prevState: any) => ({...prevState, [key]: value}));
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
        updateState('isRefreshing', false);
      }
    } catch (error) {
      Log('Error location :', error);
      updateState('isRefreshing', false);
    }
  };
  //** end get api call Session List */

  return {
    updateState,
    userData,
    navigation,
    ProfileState,
  };
};

export default usePostAds;
