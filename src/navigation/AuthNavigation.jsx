import { createStackNavigator } from '@react-navigation/stack';
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
    <Stack.Navigator initialRouteName={routes.AUTH.WELCOME}>
      <Stack.Screen name={routes.AUTH.WELCOME} component={WelcomeScreen} />
      <Stack.Screen
        name={routes.AUTH.REGISTER}
        component={RegisterScreen}
      />
      <Stack.Screen
        options={{ headerTitle: 'Login' }}
        name={routes.AUTH.LOGIN}
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ headerTitle: 'Forgot Password' }}
        name={routes.AUTH.FORGOT_PASSWORD}
        component={ForgotPassswordScreen}
      />
      <Stack.Screen
        options={{ headerTitle: 'Verify Code' }}
        name={routes.AUTH.VERIFY_CODE}
        component={VerifyCodeScreen}
      />
      <Stack.Screen
        options={{ headerTitle: 'Set Password' }}
        name={routes.AUTH.NEW_PASSWORD}
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigation;
