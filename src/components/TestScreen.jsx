import {StyleSheet, Text, View, Animated} from 'react-native';
import * as yup from 'yup';
import {useFormikContext} from 'formik';

import ScroolScreen from './ScrollScreen';
import colors from '../config/colors';
import AppForm from './AppForm';
import AppTextInput from './AppTextInput';
import AppText from './AppText';
import AppButton from './AppButton';
import FormSubmitButton from './FormSubmitButton';
AppForm;

const validationSchema = yup.object({
  name: yup.string().required().min(2).label('Name'),
  address: yup.string().required().min(10).label('Address'),
  email: yup.string().email().required().label('Email'),
});

const initialValues = {name: '', address: '', email: ''};

const TestScreen = ({}) => {
  const handleSubmit = (values, formikBag) => {
    console.log('SUBMITTING FORM!');
    console.log('values: ', values);
    formikBag.resetForm();
  };
  return (
    <AppForm
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}>
      <ScroolScreen style={styles.container}>
        <AppText text="Name" style={styles.label} />
        <AppTextInput name="name" placeholder="name" />
        <AppText text="Email" style={styles.label} />
        <AppTextInput
          keyboardType="email-address"
          name="email"
          placeholder="email"
        />
        <AppText text="Address" style={styles.label} />
        <AppTextInput name="address" placeholder="address" />
        <FormSubmitButton
          text="submit"
          textColor={colors.neutral}
          style={styles.button}
        />
      </ScroolScreen>
    </AppForm>
  );
};

export default TestScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  button: {
    borderRadius: 20,
    marginVertical: 20,
    backgroundColor: colors.primary,
  },
  label: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '300',
    marginBottom: 5,
    marginTop: 10,
  },
});
