import {NavigationContainer} from '@react-navigation/native';
import {FC} from 'react';
import {navigationRef} from '../utility/navigationServices';
import RootStack from './stacks/RootStack';

const Route: FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack />
    </NavigationContainer>
  );
};

export default Route;
