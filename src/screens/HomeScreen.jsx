import {StyleSheet, ImageBackground, View, Image} from 'react-native';

import statusBar from '../config/statusBar';
import colors from '../config/colors';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';

const Home = () => {
  return (
    <Screen
      statusBackgroundColor={colors.gray}
      style={styles.container}
      statusBarStyle={statusBar.darkBackground}>
      <ImageBackground
        source={require('../assets/onboard-image-4.png')}
        style={styles.imageBackground}>
        <View style={styles.headerContainer}>
          <Image
            style={styles.imageLogo}
            source={require('../assets/onboard-image-4.png')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            onPress={() => console.log('login button pressed...')}
            bgColor={colors.brown}
            text="Login"
            style={styles.button}
          />
          <AppButton
            onPress={() => console.log('register button pressed..')}
            bgColor={colors.gray}
            text="Register"
            style={styles.button}
          />
        </View>
      </ImageBackground>
    </Screen>
  );
};

// #1b662d #1f61e3
export default Home;

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    display: 'flex',
  },
  container: {
    backgroundColor: 'gray',
  },
  headerContainer: {
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  imageBackground: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    position: 'relative',
    paddingVertical: 30,
  },

  imageLogo: {
    height: 250,
    width: '100%',
    objectFit: 'contain',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
