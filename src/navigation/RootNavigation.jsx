import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import OnBoardingNavigation from './OnBoardingNavigation';

export default function RootNavigation({children}) {
  return (
    <NavigationContainer>
      <OnBoardingNavigation />
    </NavigationContainer>
  );
}
