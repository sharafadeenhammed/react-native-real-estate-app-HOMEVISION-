import {StyleSheet, Text, View, TextInput} from 'react-native';
import colors from '../config/colors';
import {useFormikContext} from 'formik';
import FlashMessage from './FlashMessage';
import {useEffect, useState} from 'react';
import Screen from './Screen';

const FormTextInput = ({
  RightComponent,
  LeftComponent,
  name,
  style,
  text,
  iconName,
  iconColor,
  inputStyle,
  cursorColor = '#000',
  ...others
}) => {
  const {setFieldValue, touched, errors, setFieldTouched, values} =
    useFormikContext();
  return (
    <Screen>
      <View style={[styles.container, style]}>
        {LeftComponent ? LeftComponent : null}
        <TextInput
          nativeID={name}
          onChangeText={value => setFieldValue(name, value)}
          onBlur={() => setFieldTouched(name, true)}
          value={values[name]}
          style={[styles.input, inputStyle]}
          {...others}
        />
        {RightComponent ? RightComponent : null}
      </View>

      {errors[name] && touched[name] ? (
        <FlashMessage
          type="error"
          style={styles.flashMessage}
          message={errors[name]}
        />
      ) : null}
    </Screen>
  );
};

export default FormTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: '100%',
    fontSize: 20,
  },
  flashMessage: {
    marginBottom: 5,
  },
});
