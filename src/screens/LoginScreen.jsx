import {StyleSheet, Text, View} from 'react-native';

import Screen from '../components/Screen';
import * as yup from 'yup';
import {Formik} from 'formik';

import colors from '../config/colors';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';

const LoginScreen = () => {
  const validationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });
  return (
    <Screen style={styles.container}>
      <AppText>login Screen</AppText>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    paddingHorizontal: 20,
  },
});
