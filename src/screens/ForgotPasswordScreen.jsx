import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {useState} from 'react';

import colors from '../config/colors';
import Screen from '../components/Screen';
import ScroolScreen from '../components/ScrollScreen';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import Icon from '../components/Icon';

const ForgotPassswordScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <ScroolScreen style={styles.container}>
      <AppText style={styles.header} text="Forgot Password" />
      <AppText
        style={styles.tagLine}
        text="Enter email address to continue password reset"
      />

      <AppText style={styles.label} text="Email" />
      <AppTextInput
        inputStyle={styles.input}
        style={styles.inputContainer}
        keyboardType="email-address"
        placeholder="@email.com"
      />

      <AppText
        onPress={() => console.log('handle navigation to signin screen...')}
        fontSize={18}
        fontWeight="700"
        color={colors.gray}
        text="Sign In Instead"
        style={styles.signInInstead}
      />
      <AppButton style={styles.button} textColor={colors.neutral} text="SEND" />
    </ScroolScreen>
  );
};

export default ForgotPassswordScreen;

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    backgroundColor: colors.primary,
    marginBottom: 20,
  },
  container: {
    backgroundColor: colors.neutral,
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingBottom: 100,
  },
  header: {
    color: colors.black,
    fontWeight: 700,
    fontSize: 25,
    marginBottom: 5,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '300',
    marginBottom: 5,
  },
  signInInstead: {
    textAlign: 'center',
    width: '100%',
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  tagLine: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 20,
  },
  input: {
    fontSize: 20,
    width: '100%',
    height: '100%',
  },
});
