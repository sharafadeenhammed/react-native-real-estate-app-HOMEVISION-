import {StyleSheet, Text, View} from 'react-native';
import ScroolScreen from '../components/ScrollScreen';
import colors from '../config/colors';
import statusBar from '../config/statusBar';

const FeedScreen = () => {
  return (
    <ScroolScreen
      style={styles.container}
      statusBarColor={colors.primary}
      statusBarStyle={statusBar.darkBackground}>
      <View style={styles.userInfoContainer}>
        <Text>text</Text>
      </View>
    </ScroolScreen>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.neutral,
  },
  userInfoContainer: {
    backgroundColor: colors.primary,
    minHeight: 250,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    marginBottom: 20,
  },
});
