import {StyleSheet, View, Image} from 'react-native';
import ScroolScreen from '../components/ScrollScreen';
import colors from '../config/colors';
import statusBar from '../config/statusBar';
import AppText from '../components/AppText';
import Icon from '../components/Icon';

const FeedScreen = () => {
  return (
    <ScroolScreen
      style={styles.container}
      statusBarColor={colors.primary}
      statusBarStyle={statusBar.darkBackground}>
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
              style={styles.notification}
              name="bell"
              size={40}
              color={colors.light}
              backgroundColor={colors.primary}
            />
            <View style={styles.notificationCount}>
              {/* <AppText
                style={styles.notificationText}
                fontWeight="800"
                fontSize={12}
                color={colors.primary}
                text="99+"
              /> */}
            </View>
          </View>
        </View>
        <AppText
          style={styles.userHeading}
          fontWeight="700"
          text="Find Your Dream Home"
          fontSize={25}
        />
        <View style={styles.locationContainer}>
          <AppText fontWeight="300" text="Location: " />
          <AppText fontWeight="600" text="Ibadan, Oyo State" />
        </View>
      </View>
    </ScroolScreen>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.neutral,
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
  notificationText: {
    width: '100%',
    textAlign: 'center',
  },
  notificationContainer: {
    position: 'relative',
  },
});
