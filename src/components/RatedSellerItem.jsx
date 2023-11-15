import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import colors from '../config/colors';
import Icon from './Icon';
import AppText from './AppText';
const BestSellerRatingListItem = ({data, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={() => onPress && onPress()}>
      <View style={styles.container}>
        <Image source={data.image} style={styles.image} />
        <AppText color={colors.dark} text={data.name} />
        <View style={styles.ratingContainer}>
          <Icon
            name="star"
            color={colors.dark}
            iconSizeMulitpier={1}
            size={15}
          />
          <AppText
            fontSize={16}
            text={`${data.rating} rating`}
            color={colors.dark}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BestSellerRatingListItem;

const styles = StyleSheet.create({
  container: {
    width: 170,
    marginRight: 20,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
    objectFit: 'scale-down',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
