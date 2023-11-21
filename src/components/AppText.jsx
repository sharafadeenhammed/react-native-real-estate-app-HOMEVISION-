import {StyleSheet, Text} from 'react-native';

const AppText = ({
  onPress,
  children,
  text,
  style,
  color,
  fontSize,
  fontWeight,
  selectable = false,
}) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: fontSize || 14,
      color: color || 'white',
      fontWeight: fontWeight || '400',
    },
  });

  return onPress ? (
    <Text
      selectable={selectable}
      onPress={onPress}
      style={[styles.text, style]}>
      {children}
      {text}
    </Text>
  ) : (
    <Text selectable={selectable} style={[styles.text, style]}>
      {children}
      {text}
    </Text>
  );
};

export default AppText;
