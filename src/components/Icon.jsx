import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import colors from '../config/colors';
// import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

const Icon = ({
  style,
  backgroundColor = colors.neutral,
  name = 'eye',
  size = 30,
  iconSizeMulitpier = 0.6,
  onPress,
  color = colors.neutral,
}) => {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      height: size,
      width: size,
      backgroundColor: backgroundColor,
      borderRadius: size / 2,
    },
  });

  return onPress ? (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <FontAwesome
          name={name}
          size={size * iconSizeMulitpier}
          color={color}
        />
      </View>
    </TouchableWithoutFeedback>
  ) : (
    <View style={[styles.container, style]}>
      <FontAwesome name={name} size={size * iconSizeMulitpier} color={color} />
    </View>
  );
};

export default Icon;
