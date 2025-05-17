import { useCallback, useEffect, useState } from 'react';
import { useAuthNavigation } from '../../../hooks/useAppNavigation';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { RootState } from '../../../services/redux/store';

const useMyAds = () => {
  const navigation = useAuthNavigation();
  const dispatch = useAppDispatch();
  const {userData} = useAppSelector((state: RootState) => state.UserData);

  const [ProfileState, setProfileState] = useState<any>({
    isRefreshing: false,
    isLoading: false,
    fullName: '',
    email: '',
    dateOfbirth: '',
    bName: '',
    bAdress: '',
    datePickerOpen: false,
  });

  //** Update all state */
  const updateState = useCallback(<T>(key: string, value: T) => {
    setProfileState((prevState: any) => ({...prevState, [key]: value}));
  }, []);

  useEffect(() => {
    updateState('isRefreshing', true);
    getUpdate();
  }, [userData]);

  //** start with redux */
  const getUpdate = async () => {
    updateState('fullName', userData?.fullName);
    updateState('email', userData?.email);
    updateState('dateOfbirth', userData?.dob);
    updateState('bName', userData?.businessName);
    updateState('bAdress', userData?.businessAddress);
    updateState('isRefreshing', false);
  };
  //** start with redux */

  const showDatePicker = () => {
    updateState('datePickerOpen', true);
  };

  const hideDatePicker = () => {
    updateState('datePickerOpen', false);
  };

  const handleConfirm = (date: any) => {
    const formattedDate = date.toLocaleDateString('en-GB'); // Format: DD/MM/YYYY
    updateState('dateOfbirth', formattedDate);
    hideDatePicker();
  };

  const updateProfile = async () => {};

  return {
    updateState,
    userData,
    navigation,
    ProfileState,
    showDatePicker,
    hideDatePicker,
    handleConfirm,
    updateProfile,
  };
};

export default useMyAds;
