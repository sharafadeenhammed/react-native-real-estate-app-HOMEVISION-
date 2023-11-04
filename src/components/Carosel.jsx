import {StyleSheet, Text, View} from 'react-native';
import colors from '../config/colors';

const OnBoardProgress = ({carosel}) => {
  if (carosel == null) {
    return null;
  }
  return (
    <View style={styles.container}>
      {carosel.map((item, index) => {
        return item === 'big' ? (
          <View key={index.toString()} style={styles.big}></View>
        ) : (
          <View key={index.toString()} style={styles.small}></View>
        );
      })}
    </View>
  );
};

export default OnBoardProgress;

const styles = StyleSheet.create({
  big: {
    height: 7,
    backgroundColor: colors.primary,
    width: 40,
    borderRadius: 3,
    marginHorizontal: 1,
    marginVertical: 5,
  },
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  small: {
    height: 7,
    backgroundColor: colors.secondary,
    width: 20,
    borderRadius: 3,
    marginHorizontal: 1,
    marginVertical: 5,
  },
});
