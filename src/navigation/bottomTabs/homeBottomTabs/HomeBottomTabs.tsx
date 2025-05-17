import {
  BottomTabBarProps,
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React, {FC, useMemo} from 'react';
import CustomHomeBottomTabs from './CustomHomeBottomTabs';
import {homeBottomTabs} from './homeBottomTabs.const';

const Tab = createBottomTabNavigator();
export type BottomTabStackParamList = {
  Home: undefined;
  MyAds: undefined;
  Setting: undefined;
   
};
export type BottomTabNavigationProps =
  BottomTabNavigationProp<BottomTabStackParamList>;
interface HomeBottomTabsProps {
  navigation: BottomTabNavigationProps;
}

const HomeBottomTabs: FC<HomeBottomTabsProps> = () => {
  //** Get usetype */
  const getInitialRouteName = () => {
    return 'HomeScreen';
  };
  //** Set initial tab name based on user */
  const initialRouteName = useMemo(() => {
    return getInitialRouteName();
  }, []);

  return (
    <Tab.Navigator
      tabBar={(props: BottomTabBarProps) => <CustomHomeBottomTabs {...props} />}
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: false,
      }}>
      {homeBottomTabs?.map(screen => (
        <Tab.Screen
          key={screen?.id}
          name={screen?.name}
          component={screen?.component}
        />
      ))}
    </Tab.Navigator>
  );
};
export default HomeBottomTabs;
