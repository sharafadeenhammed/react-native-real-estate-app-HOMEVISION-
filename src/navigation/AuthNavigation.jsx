import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPassswordScreen from '../screens/ForgotPasswordScreen';

import routes from '../config/routes';
import VerifyCodeScreen from '../screens/VerifyCodeScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';

const Stack = createStackNavigator();

function AuthNavigation() {
  return (
    <Stack.Navigator initialRouteName={routes.WELCOME}>
      <Stack.Screen name={routes.WELCOME} component={WelcomeScreen} />
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
      <Stack.Screen
        options={{headerTitle: ''}}
        name={routes.VERIFY_CODE}
        component={VerifyCodeScreen}
      />
      <Stack.Screen
        options={{headerTitle: ''}}
        name={routes.NEW_PASSWORD}
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigation;
