import {StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';

import ScroolScreen from './ScrollScreen';
import AppButton from './AppButton';
const AppForm = ({children, initialValues, validationSchema, onSubmit}) => {
  return (
    <Formik
      onSubmit={values => console.log('submitting form\n', 'values: ', values)}
      initialValues={initialValues}
      validationSchema={validationSchema}>
      {({handleSubmit}) => {
        return (
          <>
            {children}
            <AppButton text="submit" onPress={handleSubmit} />
          </>
        );
      }}
    </Formik>
  );
};

export default AppForm;

const styles = StyleSheet.create({});
