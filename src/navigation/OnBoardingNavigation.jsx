import {createStackNavigator} from '@react-navigation/stack';
import OnBoarding from '../screens/OnBoardScreen';
import AuthNavigation from './AuthNavigation';
import routes from '../config/routes';

const Stack = createStackNavigator();
export default function OnBoardingNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name={routes.ONBOARDING}
        component={OnBoarding}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={routes.FINISH}
        component={AuthNavigation}
      />
    </Stack.Navigator>
  );
}
