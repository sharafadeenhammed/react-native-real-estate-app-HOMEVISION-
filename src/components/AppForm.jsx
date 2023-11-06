import {StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';

import ScroolScreen from './ScrollScreen';
const AppForm = ({children, initialValues, validationSchema, onSubmit}) => {
  return (
    <Formik
      onSubmit={values => console.log('submitting form\n', 'values: ', values)}
      initialValues={initialValues}
      validationSchema={validationSchema}>
      {({handleSubmit}) => children}
    </Formik>
  );
};

export default AppForm;

const styles = StyleSheet.create({});
