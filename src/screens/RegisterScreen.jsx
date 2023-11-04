import {StyleSheet, Text, View} from 'react-native';

import colors from '../config/colors';
import Screen from '../components/Screen';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';

const RegisterScreen = () => {
  return (
    <Screen style={styles.container} statusBarColor={colors.light}>
      <Text>RegisterScreen</Text>
    </Screen>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
