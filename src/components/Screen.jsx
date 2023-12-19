import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';

import statusBar from '../config/statusBar';
import colors from '../config/colors';

const Screen = ({
  children,
  style,
  statusBackgroundColor,
  statusBarStyle,
  setStatusBar = true,
}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      {setStatusBar ? (
        <StatusBar
          animated={true}
          backgroundColor={statusBackgroundColor || colors.neutral}
          barStyle={statusBarStyle || statusBar.lightBackground}
        />
      ) : null}
      {children}
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
