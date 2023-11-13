import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import OnBoardingNavigation from './OnBoardingNavigation';
import defaultTheme from './NavigationTheme';

export default function RootNavigation({children}) {
  return (
    <NavigationContainer theme={defaultTheme}>
      <OnBoardingNavigation />
    </NavigationContainer>
  );
}
