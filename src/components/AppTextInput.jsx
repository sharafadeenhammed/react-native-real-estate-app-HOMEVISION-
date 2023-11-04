import {StyleSheet, Text, View, TextInput} from 'react-native';

const AppTextInput = ({
  style,
  text,
  iconName,
  iconColor,
  inputStyle,
  ...others
}) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput style={[styles.input, inputStyle]} {...others} />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({});
