import {StyleSheet, View, FlatList, Image, Dimensions} from 'react-native';
import {useState, useRef} from 'react';

import AppText from './AppText';
import colors from '../config/colors';
import Icon from './Icon';
import ListItemCarosel from './ListItemCarosel';
import AppButton from './AppButton';
const dimension = Dimensions.get('window');
const ListingsITem = ({data, onPress}) => {
  const viewabilityConfigValue = useRef({
    itemVisiblePercentThreshold: 80,
    waitForInteraction: true,
    minimumViewTime: 100,
  }).current;

  const [index, setIndex] = useState(0);

  const handleOnViewableItemChanged = useRef(({viewableItems}) => {
    const index = viewableItems[0]?.index;
    setIndex(initialState => (index !== undefined ? index : initialState));
  }).current;

  return (
    <View style={styles.container}>
      {/* listing header container */}
      <View style={styles.listingHeadingContainer}>
        <View style={styles.listerUserInfoContainer}>
          <Image style={styles.listerPhoto} source={data.lister.photo} />
          <AppText
            fontWeight="500"
            fontSize={18}
            text={data.lister.name}
            color={colors.dark}
          />
        </View>
        <AppText text={data.createdAt} color={colors.dark} />
      </View>

      {/* image listing */}
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        data={data.images}
        viewabilityConfig={viewabilityConfigValue}
        onViewableItemsChanged={handleOnViewableItemChanged}
        renderItem={({item, index}) => (
          <Image key={index.toString()} source={item} style={styles.image} />
        )}
      />
      <ListItemCarosel viewAbleItemIndex={index} data={data.images} />

      {/* listing location and price */}
      <View style={styles.locationContainer}>
        <View style={styles.locationViewContainer}>
          <Icon
            name="map-marker"
            iconSizeMulitpier={1}
            size={18}
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
        {onPress ? (
          <AppButton
            onPress={onPress}
            textStyle={styles.viewItemButtonText}
            style={styles.viewItemButton}
            text="View"
          />
        ) : null}
      </View>
      <AppText
        fontSize={16}
        color={colors.dark}
        text={` $ ${data.price.price}/${
          data.price.recuring === 'Month' ? 'Mo' : 'Yr'
        }`}
      />

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
              <AppText color={colors.dark} text={`${data.bedroomCount} room`} />
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
        <Icon
          name="tag"
          color={colors.dark}
          backgroundColor={colors.transparent}
        />
      </View>
    </View>
  );
};

export default ListingsITem;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: colors.dark,
    borderBottomWidth: 0.5,
    borderStyle: 'solid',
    width: '100%',
    marginBottom: 20,
    paddingVertical: 10,
  },
  listerUserInfoContainer: {flexDirection: 'row', alignItems: 'center'},
  listingHeadingContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listerPhoto: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 5,
    objectFit: 'contain',
  },
  otherDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  otherDetailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    borderRadius: 10,
    height: 150,
    width: dimension.width - 50,
    objectFit: 'cover',
    marginBottom: 10,
    marginHorizontal: 5,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  locationViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewItemButton: {
    width: 'auto',
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: colors.lightBlue,
    borderRadius: 10,
  },
  viewItemButtonText: {
    color: colors.primary,
    fontSize: 13,
  },
});
