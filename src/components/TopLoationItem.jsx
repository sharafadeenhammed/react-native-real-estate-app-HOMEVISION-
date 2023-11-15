import {StyleSheet, View, Image, TouchableWithoutFeedback} from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

const TopLoationItem = ({data, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress ? onPress : null}>
      <View style={styles.container}>
        <Image style={styles.image} source={data.image} />
        <View style={styles.textContainer}>
          <AppText
            fontSize={17}
            color={colors.dark}
            fontWeight={600}
            text={data.location}
          />
          <AppText
            fontSize={17}
            color={colors.dark}
            text={`${data.numsOfProperties} properties`}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TopLoationItem;

const styles = StyleSheet.create({
  container: {
    height: 100,
    minWidth: 250,
    maxWidth: 300,
    borderColor: colors.gray,
    borderRadius: 20,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.neutral,
    padding: 20,
  },
  image: {
    height: 70,
    width: 70,
    objectFit: 'cover',
    marginRight: 10,
    borderRadius: 5,
  },
  textContainer: {
    height: 80,
    justifyContent: 'space-evenly',
  },
});
