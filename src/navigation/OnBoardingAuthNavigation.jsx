import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding from '../screens/OnBoardScreen';
import AuthNavigation from './AuthNavigation';
import routes from '../config/routes';
import React from 'react';

const Stack = createStackNavigator();

function OnBoardingAuthNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name={routes.AUTH.ONBOARDING}
        component={OnBoarding}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={routes.AUTH.FINISH}
        component={AuthNavigation}
      />
    </Stack.Navigator>
  );
}
export default OnBoardingAuthNavigation