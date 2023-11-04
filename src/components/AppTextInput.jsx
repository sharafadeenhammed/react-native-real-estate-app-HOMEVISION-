import {StyleSheet, Text, View, TextInput} from 'react-native';

const AppTextInput = ({
  RightComponent,
  LeftComponent,
  style,
  text,
  iconName,
  iconColor,
  inputStyle,
  ...others
}) => {
  return (
    <View style={[styles.container, style]}>
      {RightComponent ? RightComponent : null}
      <TextInput style={[styles.input, inputStyle]} {...others} />
      {LeftComponent ? LeftComponent : null}
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 20,
    borderWidth: 2,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});
