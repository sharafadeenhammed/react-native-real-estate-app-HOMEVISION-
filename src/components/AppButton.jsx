import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const AppButton = ({style, textStyle, text, bgColor, textColor, onPress}) => {
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
      onPress={onPress}>
      <Text style={[styles.text, textStyle]}>
        {text ? text : 'button text'}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;
