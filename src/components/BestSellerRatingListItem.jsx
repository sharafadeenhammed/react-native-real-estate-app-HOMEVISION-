import {StyleSheet, Text, View, Image} from 'react-native';

import colors from '../config/colors';
import Icon from './Icon';
import AppText from './AppText';
const BestSellerRatingListItem = ({data}) => {
  return (
    <View>
      <Image source={data.image} style={styles.image} />
      <AppText color={colors.dark} text={data.name} />
    </View>
  );
};

export default BestSellerRatingListItem;

const styles = StyleSheet.create({
  container: {
    width: 100,
  },
  image: {
    width: '100%',
    height: 70,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
});
