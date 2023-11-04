import {StyleSheet, StatusBar, SafeAreaView, ScrollView} from 'react-native';

import statusBar from '../config/statusBar';
import colors from '../config/colors';

const ScroolScreen = ({
  children,
  style,
  statusBarColor,
  statusBarStyle,
  ...others
}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.container, style]}
      {...others}>
      <StatusBar
        animated={true}
        backgroundColor={statusBarColor || colors.neutral}
        barStyle={statusBarStyle || statusBar.lightBackground}
      />
      {children}
    </ScrollView>
  );
};

export default ScroolScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
