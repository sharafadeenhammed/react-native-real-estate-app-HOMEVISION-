import {
  StyleSheet,
  View,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useRef, useState, useEffect} from 'react';

import colors from '../config/colors';
import ScroolScreen from '../components/ScrollScreen';
import nearbyItemsData from '../config/unused-data/nearbyItemsData';
import ListItemCarosel from '../components/ListItemCarosel';
import Icon from '../components/Icon';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
const data = nearbyItemsData[0];
const dimension = Dimensions.get('window');
const ListingDetailScreen = ({navigation, id}) => {
  const [index, setIndex] = useState(0);

  const viewabilityConfigValue = useRef({
    itemVisiblePercentThreshold: 80,
    waitForInteraction: true,
    minimumViewTime: 100,
  }).current;

  const handleOnViewableItemChanged = useRef(({viewableItems}) => {
    const index = viewableItems[0]?.index;
    setIndex(initialState => (index !== undefined ? index : initialState));
  }).current;

  const chatLister = id => {
    // TODO: handle navigation to chat user screen...
    console.log('handle navigation to chat user screen whre id =', id);
  };

  const goToUserDetailScreen = id => {
    // TODO: handle navigation to user details screen
    console.log('handle navigation to user details screen where id =', id);
  };

  const fetchViewData = () => {
    // TODO: fetch listing data upon component did mount
    console.log('fetch listing data upon component did mount');
  };

  const handleBooking = id => {
    // TODO: handle property booking
    console.log('handle property booking where id =', id);
  };

  useEffect(() => {
    fetchViewData();
  }, []);

  return (
    <View style={styles.container}>
      <ScroolScreen style={styles.scroolContainer}>
        <View style={styles.imageListContainer}>
          {/* image listing */}
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            keyExtractor={(item, index) => index.toString()}
            data={data.images}
            viewabilityConfig={viewabilityConfigValue}
            onViewableItemsChanged={handleOnViewableItemChanged}
            renderItem={({item}) => (
              <Image source={item} style={styles.image} />
            )}
          />
          <View style={styles.numsOfImagesTag}>
            <Icon
              name="photo"
              iconSizeMulitpier={0.9}
              color={colors.dark}
              size={18}
              backgroundColor={colors.transparent}
            />
            <AppText
              text={' ' + data.images.length}
              color={colors.dark}
              fontWeight="700"
              fontSize={16}
            />
          </View>
        </View>
        <ListItemCarosel data={data.images} viewAbleItemIndex={index} />

        {/* listing details with icon */}
        <View style={styles.sectionContainer}>
          <AppText
            selectable
            text={data.title}
            style={styles.listingTitleText}
          />
          <View style={styles.location}>
            <Icon
              size={18}
              iconSizeMulitpier={1}
              name="map-marker"
              color={colors.dark}
            />
            <AppText
              selectable
              text={data.location}
              color={colors.dark}
              fontSize={16}
              fontWeight="400"
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
                    selectable
                    color={colors.dark}
                    fontSize={16}
                    fontWeight="400"
                    text={`${data.bedroomCount} bedrooms`}
                  />
                ) : (
                  <AppText
                    selectable
                    color={colors.dark}
                    fontSize={16}
                    fontWeight="400"
                    text={`${data.bedroomCount} bedroom`}
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
                    selectable
                    color={colors.dark}
                    fontSize={16}
                    fontWeight="400"
                    text={`${data.bathroomCount} baths`}
                  />
                ) : (
                  <AppText
                    selectable
                    color={colors.dark}
                    fontSize={16}
                    fontWeight="400"
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
                  selectable
                  color={colors.dark}
                  fontSize={16}
                  fontWeight="400"
                  text={`${data.area} ${data.areaUnit} `}
                />
              </View>
            ) : null}
          </View>
        </View>

        {/* agent/lister section */}
        <View style={styles.sectionContainer}>
          <AppText text="Agent" style={styles.sectionHeader} />
          <View style={styles.listerSectionContainer}>
            <TouchableOpacity
              style={styles.listerInfoContainer}
              onPress={() => goToUserDetailScreen(data.lister.id)}
              activeOpacity={0.9}>
              <Image style={styles.listerImage} source={data.lister.photo} />
              <View>
                <AppText
                  selectable
                  text={data.lister.name}
                  color={colors.dark}
                  fontSize={18}
                  fontWeight="700"
                />
                <AppText
                  text={data.lister.role}
                  selectable
                  color={colors.dark}
                  fontSize={16}
                />
              </View>
            </TouchableOpacity>

            <Icon
              onPress={() => chatLister(data.lister.id)}
              name="wechat"
              color={colors.primary}
              size={30}
              style={styles.listerChatIcon}
              iconSizeMulitpier={0.8}
            />
          </View>
        </View>

        {/* description section */}
        <View style={styles.sectionContainer}>
          <AppText text="Description" style={styles.sectionHeader} />
          <AppText
            selectable
            fontSize={16}
            text={data.description}
            color={colors.dark}
            style={styles.descriptionText}
          />
        </View>
      </ScroolScreen>
      <View style={[styles.sectionContainer, styles.priceBookContainer]}>
        <AppText
          selectable
          fontSize={23}
          fontWeight="800"
          text={`$${data.price.price}/${data.price.recuring}`}
          color={colors.primary}
        />
        <AppButton
          style={styles.bookButton}
          text="Book Now"
          textColor={colors.white}
          onPress={() => handleBooking(data.id)}
        />
      </View>
    </View>
  );
};

export default ListingDetailScreen;

const styles = StyleSheet.create({
  bookButton: {
    borderRadius: 10,
    backgroundColor: colors.primary,
    width: 150,
  },
  container: {
    margin: 0,
    padding: 0,
    position: 'relative',
    flex: 1,
    paddingBottom: 70,
  },
  scroolContainer: {
    margin: 0,
    padding: 0,
    margin: 0,
    paddingBottom: 400,
  },
  descriptionText: {
    textAlign: 'justify',
  },
  image: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    objectFit: 'cover',
    height: 350,
    width: dimension.width - 10,
    marginBottom: 10,
    marginHorizontal: 5,
  },
  imageListContainer: {
    position: 'relative',
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numsOfImagesTag: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    position: 'absolute',
    backgroundColor: colors.white,
    borderRadius: 5,
    bottom: 20,
    right: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  otherDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  otherDetailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceBookContainer: {
    position: 'absolute',
    width: '100%',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    bottom: -30,
    right: 0,
    backgroundColor: colors.white,
  },
  sectionContainer: {
    paddingHorizontal: 25,
    marginBottom: 30,
  },
  sectionHeader: {
    color: colors.dark,
    fontSize: 22,
    fontWeight: '500',
    textTransform: 'capitalize',
    marginBottom: 10,
  },

  listerChatIcon: {
    backgroundColor: colors.lightBlue,
    borderRadius: 10,
    height: 50,
    width: 50,
  },
  listerSectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listerImage: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 10,
    objectFit: 'contain',
  },
  listerInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listingTitleText: {
    color: colors.dark,
    fontSize: 22,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
});
