import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {useState} from 'react';

import colors from '../config/colors';
import Screen from '../components/Screen';
import ScroolScreen from '../components/ScrollScreen';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import Icon from '../components/Icon';

const ResetPasswordScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <ScroolScreen style={styles.container}>
      <AppText style={styles.header} text="New Password" />

      <AppText style={styles.label} text="Enter new password" />
      <AppTextInput
        style={{...styles.inputContainer}}
        inputStyle={{...styles.input, ...styles.passwordInput}}
        secureTextEntry={!showPassword}
        placeholder="password"
        cursorColor={colors.black}
        LeftComponent={
          showPassword ? (
            <Icon
              name="eye-slash"
              color={colors.black}
              size={40}
              backgroundColor={colors.light}
              onPress={() => setShowPassword(false)}
            />
          ) : (
            <Icon
              name="eye"
              size={40}
              backgroundColor={colors.light}
              color={colors.black}
              onPress={() => setShowPassword(true)}
            />
          )
        }
      />

      <AppText style={styles.label} text="Confirm password" />
      <AppTextInput
        style={{...styles.inputContainer}}
        inputStyle={{...styles.input, ...styles.passwordInput}}
        secureTextEntry={!showConfirmPassword}
        placeholder="Confirm password"
        cursorColor={colors.black}
        LeftComponent={
          showConfirmPassword ? (
            <Icon
              name="eye-slash"
              color={colors.black}
              size={40}
              backgroundColor={colors.light}
              onPress={() => setShowConfirmPassword(false)}
            />
          ) : (
            <Icon
              name="eye"
              size={40}
              backgroundColor={colors.light}
              color={colors.black}
              onPress={() => setShowConfirmPassword(true)}
            />
          )
        }
      />

      <AppButton style={styles.button} textColor={colors.neutral} text="SEND" />
    </ScroolScreen>
  );
};

export default ResetPasswordScreen;

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
    textAlign: 'center',
    color: colors.dark,
    fontWeight: 700,
    fontSize: 25,
    marginBottom: 40,
  },
  inputContainer: {
    marginBottom: 30,
  },
  label: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '300',
    marginBottom: 5,
  },

  input: {
    fontSize: 20,
    width: '100%',
    height: '100%',
  },
  passwordInput: {
    width: '87%',
  },
});
