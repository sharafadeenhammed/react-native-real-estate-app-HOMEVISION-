import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import OnBoardingAuthNavigation from './OnBoardingAuthNavigation';
import defaultTheme from './NavigationTheme';
import AppNavigator from './AppNavigator';
import routes from '../config/routes';

const Stack = createNativeStackNavigator();

export default function RootNavigation({ children }) {
  return (
    <NavigationContainer theme={defaultTheme}>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name={routes.BASE_ROUTES.AUTH}
          component={OnBoardingAuthNavigation}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={routes.BASE_ROUTES.APP}
          component={AppNavigator}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
