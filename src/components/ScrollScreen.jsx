import {StyleSheet, StatusBar, ScrollView} from 'react-native';

import statusBar from '../config/statusBar';
import colors from '../config/colors';

const ScroolScreen = ({
  children,
  style,
  setStatusBar = true,
  statusBackgroundColor,
  statusBarStyle,
  ...others
}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.container, style]}
      {...others}>
      {setStatusBar ? (
        <StatusBar
          animated={true}
          backgroundColor={statusBackgroundColor || colors.neutral}
          barStyle={statusBarStyle || statusBar.lightBackground}
        />
      ) : null}
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
