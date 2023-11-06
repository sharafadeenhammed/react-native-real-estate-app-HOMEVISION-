import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useFormikContext} from 'formik';

const FormSubmitButton = ({
  style,
  textStyle,
  text,
  bgColor,
  textColor,
  onPress,
}) => {
  const {handleSubmit} = useFormikContext();
  const styles = StyleSheet.create({
    container: {
      padding: 10,
      width: '100%',
      borderRadius: 25,
      backgroundColor: bgColor || '#000',
    },
    text: {
      color: textColor || '#d5cfc6',
      textAlign: 'center',
      fontWeight: '700',
      fontSize: 25,
    },
  });
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, style]}
      onPress={handleSubmit}>
      <Text style={[styles.text, textStyle]}>
        {text ? text : 'button text'}
      </Text>
    </TouchableOpacity>
  );
};

export default FormSubmitButton;
