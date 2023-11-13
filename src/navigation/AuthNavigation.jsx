import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPassswordScreen from '../screens/ForgotPasswordScreen';

import routes from '../config/routes';

const Stack = createStackNavigator();

function AuthNavigation() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen
        options={{headerTitle: ''}}
        name={routes.REGISTER}
        component={RegisterScreen}
      />
      <Stack.Screen
        options={{headerTitle: ''}}
        name={routes.LOGIN}
        component={LoginScreen}
      />
      <Stack.Screen
        options={{headerTitle: ''}}
        name={routes.FORGOT_PASSWORD}
        component={ForgotPassswordScreen}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigation;
