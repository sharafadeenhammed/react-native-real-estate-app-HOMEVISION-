import {StyleSheet} from 'react-native';
import {useState} from 'react';
import * as yup from 'yup';

import colors from '../config/colors';
import ScroolScreen from '../components/ScrollScreen';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import Icon from '../components/Icon';
import AppForm from '../components/AppForm';
import FormTextInput from '../components/FormTextInput';
import FormSubmitButton from '../components/FormSubmitButton';

const validationSchema = new yup.object({
  password: yup.string().required().min(8).label('Password'),
  confirmPassword: yup
    .string()
    .required()
    .min(8, 'must be at least 8 characters')
    .label('Confirm password'),
});

const initialValues = {password: '', confirmPassword: ''};

const ResetPasswordScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleSubmit = (values, formikBag) => {
    console.log('SUBMITTING FORM...');
    console.log('values: ', values);
    formikBag.resetForm();
  };
  return (
    <AppForm
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}>
      <ScroolScreen style={styles.container}>
        <AppText style={styles.header} text="New Password" />

        <AppText style={styles.label} text="Enter new password" />
        <FormTextInput
          style={{...styles.inputContainer}}
          inputStyle={{...styles.input, ...styles.passwordInput}}
          secureTextEntry={!showPassword}
          placeholder="password"
          name="password"
          cursorColor={colors.black}
          RightComponent={
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
        <FormTextInput
          style={{...styles.inputContainer}}
          inputStyle={{...styles.input, ...styles.passwordInput}}
          secureTextEntry={!showConfirmPassword}
          placeholder="Confirm password"
          name="confirmPassword"
          cursorColor={colors.black}
          RightComponent={
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

        <FormSubmitButton
          style={styles.button}
          textColor={colors.neutral}
          text="SEND"
        />
      </ScroolScreen>
    </AppForm>
  );
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    backgroundColor: colors.primary,
    marginVertical: 20,
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
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 5,
  },
  label: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '300',
    marginBottom: 5,
    marginTop: 20,
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
