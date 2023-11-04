import {StyleSheet, Text, View} from 'react-native';

import colors from '../config/colors';
import Screen from '../components/Screen';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';

const RegisterScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppText style={styles.placeholder} text="Username" />
      <AppTextInput style={styles.input} text="hello" placeholder="username" />

      <AppText style={styles.placeholder} text="Email" />
      <AppTextInput
        style={styles.input}
        text="hello"
        placeholder="@email.com"
      />

      <AppText style={styles.placeholder} text="Password" />
      <AppTextInput text="hello" placeholder="@email.com" />
    </Screen>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.neutral,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  input: {
    marginBottom: 30,
  },
  placeholder: {
    color: colors.black,
    fontSize: 25,
    marginBottom: 5,
  },
  placeholderText: {},
});
