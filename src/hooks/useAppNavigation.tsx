import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DrawerNavigationProp} from '@react-navigation/drawer'; // Import for Drawer Navigation
import {RootStackParams} from '../navigation/stacks/rootStackParams';

// Modify the navigation hook to include both Stack and Drawer navigation
export const useAuthNavigation = <
  T extends keyof RootStackParams = keyof RootStackParams,
>(
  values?: T,
): NativeStackNavigationProp<RootStackParams, T> &
  DrawerNavigationProp<any> => { // Extend to include DrawerNavigationProp
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams, T> & DrawerNavigationProp<any>>(); // Combine Stack and Drawer navigation
  return navigation;
};

// Keep the route hook unchanged, since it only deals with the route object
export const useAuthRoute = <
  T extends keyof RootStackParams = keyof RootStackParams,
>(
  values?: T,
): RouteProp<RootStackParams, T> => {
  const route = useRoute<RouteProp<RootStackParams, T>>();
  return route;
};
