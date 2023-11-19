import {StyleSheet, View, Animated} from 'react-native';
import colors from '../config/colors';

const ListItemCarosel = ({data, viewAbleItemIndex}) => {
  const inputRangeMultiplier = 10;
  if (data == null) {
    return null;
  }
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <Animated.View
          key={index.toString()}
          style={[
            styles.dot,
            {
              backgroundColor:
                viewAbleItemIndex === index ? colors.primary : colors.secondary,
            },
          ]}
        />
      ))}
    </View>
  );
};

export default ListItemCarosel;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  dot: {
    height: 10,
    backgroundColor: colors.secondary,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 1,
    marginVertical: 5,
    marginRight: 1,
  },
});
