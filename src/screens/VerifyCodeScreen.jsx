import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {useState} from 'react';

import colors from '../config/colors';
import Screen from '../components/Screen';
import ScroolScreen from '../components/ScrollScreen';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import Icon from '../components/Icon';

const VerifyCodeScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <ScroolScreen style={styles.container}>
      <AppText style={styles.header} text="Verification" />
      <AppText style={styles.tagLine} text="Enter verification code" />
      <View style={styles.codeContainer}>
        <AppTextInput inputStyle={styles.input} style={styles.inputContainer} />
        <AppTextInput inputStyle={styles.input} style={styles.inputContainer} />
        <AppTextInput inputStyle={styles.input} style={styles.inputContainer} />
        <AppTextInput inputStyle={styles.input} style={styles.inputContainer} />
        <AppTextInput inputStyle={styles.input} style={styles.inputContainer} />
        <AppTextInput inputStyle={styles.input} style={styles.inputContainer} />
      </View>

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

export default VerifyCodeScreen;

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
  codeContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  header: {
    textAlign: 'center',
    color: colors.dark,
    fontWeight: 700,
    fontSize: 25,
    marginBottom: 40,
  },
  inputContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInInstead: {
    textAlign: 'center',
    width: '100%',
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  tagLine: {
    color: colors.dark,
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 15,
  },
  input: {
    fontSize: 30,
    fontWeight: '700',
    width: '100%',
    height: '100%',
    paddingVertical: 1,
    textAlign: 'center',
  },
});
