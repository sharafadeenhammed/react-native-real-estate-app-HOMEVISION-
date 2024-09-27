import { StyleSheet, View, Image, FlatList } from 'react-native';
import { useEffect } from 'react';

import routes from '../config/routes';
import colors from '../config/colors';
import statusBar from '../config/statusBar';
import topLocations from '../config/unused-data/topLocations';
import nearbyItemsData from '../config/unused-data/nearbyItemsData';
import recomendation from '../config/unused-data/recomendation';
import AppText from '../components/AppText';
import ScroolScreen from '../components/ScrollScreen';
import Icon from '../components/Icon';
import AppTextInput from '../components/AppTextInput';
import TopLoationItem from '../components/TopLoationItem';
import ListingsITem from '../components/ListingsITem';
import RecomendeItem from '../components/RecomendeItem';
import topRatedSeller from '../config/unused-data/topRatedSeller';
import RatedSellerItem from '../components/RatedSellerItem';

const FeedScreen = ({ navigation }) => {
  useEffect(() => {
    fetchFeed();
  }, []);

  const fetchFeed = () => {
    // TODO: fetch feeds
    console.log('handle feeds fetching...');
  };

  const goToNotificationsScreen = () => {
    // TODO: navigate to notification screen
    console.log('handle navigation to notification screen...');
  };
  const goToListingsScreen = id => {
    // TODO: navigate to listings screen
    console.log('handle navigation to listings screen... where id=', id);

  };
  const goToUserDetailScreen = id => {
    // TODO: goto user detail screen
    console.log('handle navigation to user detail screen... where id=', id);
  };
  const goToListItemDetailScreen = id => {
    // TODO: goto list item screen
    console.log(
      'handle navigation to list item details screen... where id=',
      id,
    );
    navigation.navigate(routes.APP_ROUTES.LISTING_DETAILS, { id: id });
  };

  return (
    <ScroolScreen
      style={styles.container}
      statusBackgroundColor={colors.primary}
      statusBarStyle={statusBar.darkBackground}>
      {/*  */}
      <View style={styles.userInfoContainer}>
        <View style={styles.userInfoViewContainer}>
          <View style={styles.userInfoView}>
            <Image
              style={styles.userImage}
              source={require('../assets/unused-assets/profile-photo.png')}
            />
            <View>
              <AppText fontWeight="300" fontSize={18} text="Hi, Olawale" />
              <AppText fontWeight="600" fontSize={18} text="Welcome" />
            </View>
          </View>
          <View style={styles.notificationContainer}>
            <Icon
              onPress={goToNotificationsScreen}
              style={styles.notification}
              name="bell"
              size={40}
              color={colors.light}
              backgroundColor={colors.primary}
            />
            <View style={styles.notificationCount} />
          </View>
        </View>
        <AppText fontWeight="700" text="Find Your Dream" fontSize={25} />
        <AppText
          style={styles.userHeading}
          fontWeight="700"
          text="Home"
          fontSize={25}
        />
        <View style={styles.locationContainer}>
          <AppText fontWeight="300" text="Location: " />
          <AppText fontWeight="600" text="Ibadan, Oyo State" />
        </View>
      </View>
      {/* serch input section*/}
      <View style={styles.sectionContainer}>
        <AppTextInput
          style={styles.searchInputContainer}
          inputStyle={styles.searchInput}
          placeholder="Search for property or regions"
          LeftComponent={
            <Icon
              style={styles.searchInputIcon}
              name="search"
              color={colors.dark}
            />
          }
        />
      </View>
      {/* hdjshdjashdsjhkdf */}
      {/* top location section */}
      <View style={styles.sectionContainer}>
        <AppText
          data={topLocations}
          text="Top Locations"
          style={styles.sectionHeaderText}
        />
        <FlatList
          ListHeaderComponent={<View style={{ height: 10, width: 10 }} />}
          data={topLocations}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          keyExtractor={({ id }) => id.toString()}
          ItemSeparatorComponent={<View style={{ marginHorizontal: 20 }} />}
          renderItem={({ item }) => <TopLoationItem data={item} />}
          ListFooterComponent={<View style={{ height: 10, width: 10 }} />}
        />
      </View>
      {/* explore nearby property section */}
      <View style={styles.sectionContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <AppText
            style={{ ...styles.sectionHeaderText, marginBottom: 0 }}
            text="Explore nearby properties"
          />
          <AppText
            onPress={goToListingsScreen}
            fontWeight={700}
            fontSize={18}
            color={colors.primary}
            text="View all"
          />
        </View>
        {/* rendering nearby items */}
        {nearbyItemsData.map((item, index) => {
          return (
            <ListingsITem
              onPress={() => goToListItemDetailScreen(item.id)}
              key={index.toString()}
              data={item}
            />
          );
        })}

        {/* <FlatList
          data={nearbyItemsData}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <ListingsITem
              onPress={() => goToListItemDetailScreen(item.id)}
              key={index.toString()}
              data={item}
            />
          )}
        /> */}
      </View>

      {/* recomendation section */}
      <View style={styles.sectionContainer}>
        <AppText text="Recommended for you" style={styles.sectionHeaderText} />
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={recomendation}
          renderItem={({ item, index }) => (
            <RecomendeItem
              onPress={() => goToListItemDetailScreen(item.id)}
              key={index.toString()}
              data={item}
            />
          )}
        />

        {/* top seller section */}
      </View>
      <View style={styles.sectionContainer}>
        <AppText text="Top Rated Seller" style={styles.sectionHeaderText} />
        <FlatList
          data={topRatedSeller}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={({ item, index }) => (
            <RatedSellerItem
              onPress={() => goToUserDetailScreen(item.id)}
              key={index.toString()}
              data={item}
            />
          )}
        />
      </View>
    </ScroolScreen>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  userHeading: {
    width: '70%',
    marginBottom: 10,
  },
  userImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
    objectFit: 'contain',
    marginRight: 10,
  },
  userInfoContainer: {
    backgroundColor: colors.primary,
    minHeight: 250,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    marginBottom: 20,
  },
  sectionHeaderText: {
    marginBottom: 10,
    color: colors.dark,
    fontSize: 23,
    fontWeight: '700',
  },
  searchInput: {
    width: '90%',
  },
  searchInputContainer: {
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderRadius: 10,
  },
  searchInputIcon: {
    marginRight: 5,
  },
  sectionContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
    height: 'auto',
  },
  userInfoView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfoViewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  locationContainer: {
    flexDirection: 'row',
  },
  notificationCount: {
    position: 'absolute',
    right: -2,
    top: -2,
    height: 15,
    width: 15,
    borderRadius: 9,
    backgroundColor: colors.brightGreen,
    textAlign: 'center',
    justifyContent: 'center',
  },
  notificationContainer: {
    position: 'relative',
  },
});
