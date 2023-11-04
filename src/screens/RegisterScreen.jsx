import {StyleSheet, Text, View} from 'react-native';

import colors from '../config/colors';
import Screen from '../components/Screen';
import ScroolScreen from '../components/ScrollScreen';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';

const RegisterScreen = () => {
  return (
    <ScroolScreen style={styles.container}>
      <AppText style={styles.header} text="Create an account" />
      <AppText
        style={styles.tagLine}
        text="Fill in the required details to get started"></AppText>

      <AppText style={styles.placeholder} text="Username" />
      <AppTextInput
        inputStyle={styles.input}
        style={styles.inputContainer}
        text="hello"
        placeholder="username"
      />

      <AppText style={styles.placeholder} text="Email" />
      <AppTextInput
        inputStyle={styles.input}
        style={styles.inputContainer}
        text="hello"
        placeholder="@email.com"
      />

      <AppText style={styles.placeholder} text="Password" />
      <AppTextInput
        inputStyle={styles.input}
        style={styles.inputContainer}
        text="hello"
        placeholder="password"
      />

      <AppButton
        style={styles.button}
        textColor={colors.neutral}
        text="CREATE ACCOUNT"
      />
    </ScroolScreen>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    backgroundColor: colors.primary,
  },
  container: {
    backgroundColor: colors.neutral,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    color: colors.black,
    fontWeight: 700,
    fontSize: 25,
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 30,
  },
  placeholder: {
    color: colors.black,
    fontSize: 20,
    marginBottom: 5,
  },
  tagLine: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 30,
  },
  input: {
    fontSize: 20,
    width: 'auto',
  },
});
