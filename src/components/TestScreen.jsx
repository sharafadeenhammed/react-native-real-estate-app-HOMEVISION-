import {StyleSheet, Text, View, Animated} from 'react-native';
import {useRef, useEffect} from 'react';
import AppButton from './AppButton';
import FlashMessage from './FlashMessage';

const TestScreen = () => {
  const value = useRef(new Animated.Value(0)).current;
  const animation = Animated.timing(value, {
    toValue: 1,
    duration: 3000,
    useNativeDriver: true,
  });
  useEffect(() => {
    animation.start();
  }, [value]);
  return (
    <Animated.View
      style={{
        width: '100%',
        backgroundColor: 'gray',
        flex: 1,
        opacity: value,
      }}>
      <Text> Test animation... </Text>
      <AppButton
        text="reset"
        onPress={() => {
          value.setValue(0.8);
          animation.start();
        }}
      />

      <FlashMessage
        type="error"
        style={{marginVertical: 10}}
        message="error texts"
      />
      <FlashMessage
        type="warning"
        style={{marginVertical: 10}}
        message="warning texts"
      />
      <FlashMessage
        type="success"
        style={{marginVertical: 10}}
        message="success texts"
      />
    </Animated.View>
  );
};

export default TestScreen;

const styles = StyleSheet.create({});
