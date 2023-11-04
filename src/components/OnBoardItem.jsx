import {StyleSheet, Image, View, Dimensions} from 'react-native';

import Screen from './Screen';
import AppText from './AppText';
import colors from '../config/colors';
import AppButton from './AppButton';
import OnBoardProgress from './Carosel';
const screenDimension = Dimensions.get('window');
const OnBoardItem = ({item, navigation, onPress}) => {
  return (
    <Screen statusBarColor={colors.gray} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={item.imageUri} />
      </View>
      <View style={styles.textContainer}>
        <AppText style={styles.header}>{item.heading}</AppText>
        <AppText style={styles.tagLine}>{item.tagLine}</AppText>
      </View>
      <View style={styles.cursorContainer}>
        <OnBoardProgress carosel={item.carosel} />
      </View>

      <View style={styles.buttonContainer}>
        <AppButton
          text={item.button.text}
          style={styles.button}
          textColor={colors.neutral}
          onPress={() => {
            if (item.button.action) return navigation.navigate('WELCOME');
            onPress();
          }}
        />
      </View>
    </Screen>
  );
};

export default OnBoardItem;

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
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
    width: screenDimension.width,
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
    height: '60%',
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
});
