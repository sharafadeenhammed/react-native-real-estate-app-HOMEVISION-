import {StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';

import ScroolScreen from './ScrollScreen';
const AppForm = ({children, initialValues, validationSchema, onSubmit}) => {
  return (
    <Formik
      onSubmit={(values, formikBag) => onSubmit(values, formikBag)}
      initialValues={initialValues}
      validationSchema={validationSchema}>
      {() => children}
    </Formik>
  );
};

export default AppForm;

const styles = StyleSheet.create({});
