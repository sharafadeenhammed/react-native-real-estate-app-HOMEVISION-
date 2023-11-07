import {StyleSheet, Text, View, TextInput} from 'react-native';
import colors from '../config/colors';

const AppTextInput = ({
  RightComponent,
  LeftComponent,
  name,
  style,
  text,
  iconName,
  iconColor,
  inputStyle,
  fieldRef,
  cursorColor = colors.black,
  ...others
}) => {
  return (
    <View style={[styles.container, style]}>
      {LeftComponent ? LeftComponent : null}
      <TextInput
        ref={fieldRef}
        style={[styles.input, inputStyle]}
        {...others}
      />
      {RightComponent ? RightComponent : null}
    </View>
  );
};

export default AppTextInput;

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
    marginBottom: 20,
  },
});
