import {StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';

import ScroolScreen from './ScrollScreen';
const AppForm = ({children, initialValues, validationSchema, onSubmit}) => {
  return (
    <ScroolScreen>
      <Formik
        onSubmit={(values, {formikBag}) => onSubmit()}
        initialValues={initialValues}
        validationSchema={validationSchema}>
        {({
          errors,
          values,
          touched,
          setErrors,
          setTouched,
          setFieldValue,
          setFieldTouched,
        }) => children}
      </Formik>
    </ScroolScreen>
  );
};

export default AppForm;

const styles = StyleSheet.create({});
