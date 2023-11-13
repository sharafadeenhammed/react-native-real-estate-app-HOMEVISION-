import {StyleSheet} from 'react-native';
import * as yup from 'yup';

import colors from '../config/colors';
import ScroolScreen from '../components/ScrollScreen';
import AppText from '../components/AppText';
import FormSubmitButton from '../components/FormSubmitButton';
import FormTextInput from '../components/FormTextInput';
import AppForm from '../components/AppForm';
import routes from '../config/routes';

const validationSchema = yup.object({
  email: yup.string().email().required().label('Email'),
});
const initialValues = {email: ''};

const ForgotPassswordScreen = ({navigation}) => {
  const handleSubmit = (values, formikBag) => {
    // TODO: make a password reset
    console.log('SUBMITTING FORM!');
    console.log('values: ', values);
    formikBag.resetForm();
    navigation.navigate(routes.VERIFY_CODE);
  };
  return (
    <AppForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      <ScroolScreen style={styles.container}>
        <AppText style={styles.header} text="Forgot Password" />
        <AppText
          style={styles.tagLine}
          text="Enter email address to continue password reset"
        />

        <AppText style={styles.label} text="Email" />
        <FormTextInput
          name="email"
          inputStyle={styles.input}
          style={styles.inputContainer}
          keyboardType="email-address"
          placeholder="@email.com"
        />

        <AppText
          onPress={() => navigation.navigate(routes.LOGIN)}
          fontSize={18}
          fontWeight="700"
          color={colors.gray}
          text="Sign In Instead"
          style={styles.signInInstead}
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
    marginBottom: 5,
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
    marginVertical: 20,
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
