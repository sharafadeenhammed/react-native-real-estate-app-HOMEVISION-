import {StyleSheet, Text} from 'react-native';

const AppText = ({
  onPress,
  children,
  text,
  style,
  color,
  fontSize,
  fontWeight,
}) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: fontSize || 14,
      color: color || 'white',
      fontWeight: fontWeight || '400',
    },
  });

  return onPress ? (
    <Text onPress={onPress} style={[styles.text, style]}>
      {children} {text}
    </Text>
  ) : (
    <Text style={[styles.text, style]}>
      {children} {text}
    </Text>
  );
};

export default AppText;
