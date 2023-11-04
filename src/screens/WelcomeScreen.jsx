import {StyleSheet, Text, View, Image} from 'react-native';

import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import colors from '../config/colors';

const WelcomeScreen = () => {
  return (
    <Screen statusBarColor={colors.gray} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/onboard-image-4.jpeg')}
        />
      </View>
      <View style={styles.textContainer}>
        <AppText style={styles.header}>What’s your role?</AppText>
        <AppText style={styles.tagLine}>Kindly select your role below</AppText>
      </View>
      {/* <View style={styles.cursorContainer}>
        <OnBoardProgress carosel={item.carosel} />
      </View> */}

      <View style={styles.buttonContainer}>
        <AppButton
          text="SIGN UP AS A BUYER"
          style={styles.button}
          textColor={colors.neutral}
        />
        <AppButton
          text="SIGN UP AS A SELLER"
          style={{...styles.button, ...styles.sellerButton}}
          textColor={colors.primary}
        />
      </View>
    </Screen>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    marginVertical: 10,
    backgroundColor: colors.primary,
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  container: {
    backgroundColor: colors.neutral,
    padding: 0,
    width: '100%',
    overflow: 'hidden',
  },
  cursorContainer: {
    marginTop: 10,
    width: '100%',
  },
  header: {
    color: colors.dark,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '300',
    marginBottom: 5,
  },
  imageContainer: {
    height: '55%',
    width: '100%',
    paddingLeft: 5,
    overflow: 'hidden',
  },
  image: {
    objectFit: 'cover',
    height: '100%',
    width: '100%',
  },
  textContainer: {
    marginTop: 20,
    width: '100%',
  },
  tagLine: {
    color: colors.dark,
    textAlign: 'center',
    fontSize: 20,
    paddingHorizontal: 10,
  },
  sellerButton: {
    backgroundColor: colors.neutral,
    borderColor: colors.primary,
    borderWidth: 2,
  },
});
