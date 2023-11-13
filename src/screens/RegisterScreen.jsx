import {StyleSheet, View} from 'react-native';
import {useState} from 'react';
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
  username: yup.string().required().min(2).label('Username'),
  password: yup.string().required().min(8).label('Password'),
  email: yup.string().email().required().label('Email'),
});

const initialValues = {username: '', password: '', email: ''};

const RegisterScreen = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (values, formikBag) => {
    console.log('SUBMITTING FORM!');
    console.log('values: ', values);
    formikBag.resetForm();
  };
  return (
    <AppForm
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}>
      <ScroolScreen style={styles.container}>
        <AppText style={styles.header} text="Create an account" />
        <AppText
          style={styles.tagLine}
          text="Fill in the required details to get started"
        />

        <AppText style={styles.label} text="Username" />
        <FormTextInput
          name="username"
          inputStyle={styles.input}
          style={styles.inputContainer}
          placeholder="username"
        />

        <AppText style={styles.label} text="Email" />
        <FormTextInput
          name="email"
          inputStyle={styles.input}
          style={styles.inputContainer}
          text="hello"
          keyboardType="email-address"
          placeholder="@email.com"
        />

        <AppText style={styles.label} text="Password" />
        <FormTextInput
          name="password"
          inputStyle={{...styles.input, ...styles.passwordInput}}
          style={styles.inputContainer}
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

        <FormSubmitButton
          style={styles.button}
          textColor={colors.neutral}
          text="CREATE ACCOUNT"
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

        <View style={styles.socialSignupContainer}>
          <Icon
            style={styles.socialSignupItem}
            size={50}
            backgroundColor={colors.light}
            name="google"
            color={colors.black}
          />
          <Icon
            style={styles.socialSignupItem}
            size={50}
            backgroundColor={colors.light}
            name="apple"
            color={colors.black}
          />
          <Icon
            style={styles.socialSignupItem}
            size={50}
            backgroundColor={colors.light}
            name="facebook"
            color={colors.black}
          />
        </View>
        <View style={styles.signinContainer}>
          <AppText
            fontSize={18}
            color={colors.black}
            text="Already have an account?"
          />
          <AppText
            onPress={() => navigation.navigate(routes.LOGIN)}
            fontSize={18}
            fontWeight="700"
            color={colors.blue}
            text="Sign in"
          />
        </View>
      </ScroolScreen>
    </AppForm>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  socialSignupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 10,
  },
  socialSignupItem: {
    borderRadius: 10,
    backgroundColor: colors.neutral,
    borderColor: colors.black,
    borderWidth: 0.5,
  },
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
  header: {
    color: colors.black,
    fontWeight: 700,
    fontSize: 25,
    marginBottom: 5,
  },
  inputContainer: {
    // marginBottom: 5,
  },
  label: {
    color: colors.black,
    fontSize: 20,
    marginBottom: 5,
    fontWeight: '300',
    marginTop: 10,
  },
  signinContainer: {
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
