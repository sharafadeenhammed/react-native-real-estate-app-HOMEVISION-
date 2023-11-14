import {StyleSheet, View, Image} from 'react-native';

import colors from '../config/colors';
import routes from '../config/routes';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';

const WelcomeScreen = ({navigation}) => {
  return (
    <Screen style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/onboard-image-4.png')}
        />
      </View>
      <View style={styles.textContainer}>
        <AppText style={styles.header}>What’s your role?</AppText>
        <AppText style={styles.tagLine}>Kindly select your role below</AppText>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          onPress={() => navigation.navigate(routes.REGISTER)}
          text="SIGN UP AS A BUYER"
          style={styles.button}
          textColor={colors.neutral}
        />
        <AppButton
          text="SIGN UP AS AN AGENT"
          onPress={() => navigation.navigate(routes.REGISTER)}
          style={{...styles.button, ...styles.sellerButton}}
          textColor={colors.primary}
        />
      </View>
      <View style={styles.signinContainer}>
        <AppText
          fontSize={18}
          color={colors.black}
          text="Already have an account?"
        />
        <AppText
          onPress={() => navigation.navigate(routes.LOGIN)}
          fontSize={18}
          fontWeight="700"
          color={colors.blue}
          text="Sign in"
        />
      </View>
    </Screen>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    marginVertical: 5,
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
    objectFit: 'contain',
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
  signinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
});
