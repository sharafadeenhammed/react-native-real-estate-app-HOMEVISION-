import {StyleSheet, Text, View, TextInput} from 'react-native';
import colors from '../config/colors';

const AppTextInput = ({
  RightComponent,
  LeftComponent,
  style,
  text,
  iconName,
  iconColor,
  inputStyle,
  cursorColor = colors.black,
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
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
