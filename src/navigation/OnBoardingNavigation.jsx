import {createStackNavigator} from '@react-navigation/stack';
import OnBoarding from '../screens/OnBoardScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();
export default function OnBoardingNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="ONBOARDING"
        component={OnBoarding}
      />
      <Stack.Screen name="WELCOME" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}
