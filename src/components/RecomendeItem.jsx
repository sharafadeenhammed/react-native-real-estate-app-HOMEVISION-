import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';

import colors from '../config/colors';
import Icon from './Icon';
import AppText from './AppText';

const RecomendeItem = ({data, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={() => onPress && onPress()}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={data.image} />
          <AppText
            color={colors.dark}
            style={styles.categoryText}
            fontSize={16}
            fontWeight="700"
            text={`For ${data.category}`}
          />
        </View>
        {/* listing location and price */}
        <AppText
          fontSize={16}
          fontWeight="700"
          color={colors.dark}
          text={data.title}
        />
        <View style={styles.locationContainer}>
          <Icon
            name="map-marker"
            iconSizeMulitpier={1}
            size={15}
            color={colors.dark}
            backgroundColor={colors.transparent}
          />
          <AppText
            fontSize={16}
            fontWeight="700"
            color={colors.dark}
            text={data.location}
          />
        </View>
        {/* other listing details */}
        <View style={styles.otherDetailsContainer}>
          {/* render nums of bedrooms */}
          {data.bedroomCount ? (
            <View style={styles.otherDetailContainer}>
              <Icon
                name="bed"
                color={colors.dark}
                backgroundColor={colors.transparent}
              />
              {data.bedroomCount > 1 ? (
                <AppText
                  color={colors.dark}
                  text={`${data.bedroomCount} rooms`}
                />
              ) : (
                <AppText
                  color={colors.dark}
                  text={`${data.bedroomCount} room`}
                />
              )}
            </View>
          ) : null}

          {/* render nums of bathrooms */}
          {data.bathroomCount ? (
            <View style={styles.otherDetailContainer}>
              <Icon
                name="shower"
                color={colors.dark}
                backgroundColor={colors.transparent}
              />
              {data.bathroomCount > 1 ? (
                <AppText
                  color={colors.dark}
                  text={`${data.bathroomCount} baths`}
                />
              ) : (
                <AppText
                  color={colors.dark}
                  text={`${data.bathroomCount} bath`}
                />
              )}
            </View>
          ) : null}

          {/* render area */}
          {data.area ? (
            <View style={styles.otherDetailContainer}>
              <Icon
                name="arrows"
                color={colors.dark}
                backgroundColor={colors.transparent}
              />
              <AppText
                color={colors.dark}
                text={`${data.area} ${data.areaUnit} `}
              />
            </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RecomendeItem;

const styles = StyleSheet.create({
  container: {
    width: 270,
    overflow: 'hidden',
    marginRight: 30,
  },
  image: {
    height: 170,
    width: '100%',
    borderRadius: 10,
    objectFit: 'cover',
    marginBottom: 10,
  },
  imageContainer: {
    position: 'relative',
  },
  categoryText: {
    position: 'absolute',
    padding: 5,
    backgroundColor: colors.neutral,
    borderRadius: 5,
    top: 5,
    left: 5,
    textTransform: 'uppercase',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  otherDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  otherDetailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
