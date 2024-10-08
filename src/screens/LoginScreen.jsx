import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import * as yup from 'yup';

import colors from '../config/colors';
import routes from '../config/routes';
import ScroolScreen from '../components/ScrollScreen';
import AppText from '../components/AppText';
import Icon from '../components/Icon';
import AppForm from '../components/AppForm';
import FormSubmitButton from '../components/FormSubmitButton';
import FormTextInput from '../components/FormTextInput';

const validationSchema = yup.object({
  password: yup.string().required().min(8).label('Password'),
  email: yup.string().email().required().label('Email'),
});

const initialValues = { email: '', password: '' };

const LoginScreen = ({ navigation }) => {
  const [ showPassword, setShowPassword ] = useState(false);
  const handleSubmit = (values, formikBag) => {
    // TODO login user
    console.log('SUBMITTING FORM!');
    console.log('values: ', values);
    formikBag.resetForm();
  };
  return (
    <AppForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      <ScroolScreen style={styles.container}>
        <AppText style={styles.header} text="SIGN IN" />
        <AppText
          style={styles.tagLine}
          text="Continue email and password or use social media "
        />

        <AppText style={styles.label} text="Email" />
        <FormTextInput
          name="email"
          inputStyle={styles.input}
          style={styles.inputContainer}
          keyboardType="email-address"
          placeholder="@email.com"
        />

        <AppText style={styles.label} text="Password" />
        <FormTextInput
          name="password"
          style={{ ...styles.inputContainer, marginBottom: 5 }}
          inputStyle={{ ...styles.input, ...styles.passwordInput }}
          secureTextEntry={!showPassword}
          placeholder="password"
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
        <AppText
          onPress={() => navigation.navigate(routes.AUTH.FORGOT_PASSWORD)}
          fontSize={18}
          fontWeight="700"
          color={colors.blue}
          text="Forgot Password?"
          style={styles.forgotPassword}
        />

        <FormSubmitButton
          style={styles.button}
          textColor={colors.neutral}
          text="SIGN IN"
        />
        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <AppText
            text="OR"
            fontSize={20}
            fontWeight="500"
            color={colors.black}
          />
          <View style={styles.dividerLine} />
        </View>

        <View style={styles.socialSigninContainer}>
          <Icon
            style={styles.socialSigninItem}
            size={50}
            backgroundColor={colors.light}
            name="google"
            color={colors.black}
          />
          <Icon
            style={styles.socialSigninItem}
            size={50}
            backgroundColor={colors.light}
            name="apple"
            color={colors.black}
          />
          <Icon
            style={styles.socialSigninItem}
            size={50}
            backgroundColor={colors.light}
            name="facebook"
            color={colors.black}
          />
        </View>
        <View style={styles.signupContainer}>
          <AppText
            fontSize={18}
            color={colors.black}
            text="Don't have an account yet?"
          />
          <AppText
            onPress={() => navigation.navigate(routes.AUTH.REGISTER)}
            fontSize={18}
            fontWeight="700"
            color={colors.blue}
            text="Sign up"
          />
        </View>
      </ScroolScreen>
    </AppForm>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  socialSigninContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 10,
  },
  socialSigninItem: {
    borderRadius: 10,
    backgroundColor: colors.neutral,
    borderColor: colors.black,
    borderWidth: 0.5,
  },
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
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  dividerLine: {
    width: '45%',
    borderBottomColor: '#000',
    borderBottomWidth: 1.5,
  },
  forgotPassword: {
    textAlign: 'right',
    width: '100%',
    marginBottom: 20,
  },
  header: {
    color: colors.black,
    fontWeight: 700,
    fontSize: 25,
    marginBottom: 5,
  },
  inputContainer: {
    marginBottom: 5,
  },
  label: {
    color: colors.black,
    marginBottom: 5,
    fontSize: 20,
    fontWeight: '300',
    marginTop: 10,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
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
  passwordInput: {
    width: '87%',
  },
});
