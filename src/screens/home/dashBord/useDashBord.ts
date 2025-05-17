import {useCallback, useEffect, useRef, useState} from 'react';
import {useAuthNavigation} from '../../../hooks/useAppNavigation';
import {useAppSelector} from '../../../hooks/useRedux';
import axiosInstance from '../../../services/api';
import constant from '../../../services/config/constant';
import {RootState} from '../../../services/redux/store';
import {Log} from '../../../utility/log';
import {Dimensions} from 'react-native';
import {bannerData} from './dashboard.const';

const useDashBord = () => {
  const navigation = useAuthNavigation();
  const screenWidth = Dimensions.get('window').width;
  const flatListRef = useRef<any>(null);
  const currentIndexRef = useRef(0);
  const {token, userData} = useAppSelector(
    (state: RootState) => state.UserData,
  );

  const [dashState, setDashState] = useState<any>({
    isRefreshing: false,
    currentStep: 1,
    locations: [],
    categoriesList: [],
    drowerOpen: false,
  });

  //** Update all state */
  const updateState = useCallback(<T>(key: string, value: T) => {
    setDashState((prevState: any) => ({...prevState, [key]: value}));
  }, []);

  useEffect(() => {
    updateState('isRefreshing', true);
    getBanner();
    getCategory();
  }, []);

  console.log('userData', userData);

  useEffect(() => {
    if (bannerData?.length > 0) {
      const slideInterval = setInterval(() => {
        const nextIndex = (currentIndexRef.current + 1) % bannerData?.length;
        // Safeguard to ensure ref and banner list are defined
        if (flatListRef.current && bannerData?.length > 0) {
          flatListRef.current.scrollToIndex({animated: true, index: nextIndex});
          currentIndexRef.current = nextIndex;
        }
      }, 5000);
      return () => clearInterval(slideInterval);
    }
  }, [bannerData?.length]);

  const onScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offsetX / screenWidth);
    if (newIndex >= 0 && newIndex < bannerData?.length) {
      currentIndexRef.current = newIndex;
    }
  };

  //** start get api call getBanner List */
  const getBanner = async () => {
    try {
      const {data} = await axiosInstance.get(`${constant.bannerList}`);
      if (data) {
        // updateState('locations', data);
      }
    } catch (error) {
      Log('Error location :', error);
      updateState('isRefreshing', false);
    }
  };
  //** end get api call getBanner List */

  //** start get api call Category */
  const getCategory = async () => {
    try {
      const {data} = await axiosInstance.get(`${constant.categoryList}`);
      if (data) {
        updateState('categoriesList', data?.categories);
      }
    } catch (error) {
      Log('Error location :', error);
      updateState('isRefreshing', false);
    }
  };
  //** end get api call Category List */

  const navigationToPostAds = () => {
    navigation.navigate('PostAds');
  };

  return {
    updateState,
    dashState,
    userData,
    navigation,
    navigationToPostAds,
    flatListRef,
    currentIndexRef,
    onScroll,
    screenWidth,
  };
};

export default useDashBord;
