import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';

import statusBar from '../config/statusBar';
import colors from '../config/colors';

const Screen = ({children, style, statusBarColor, statusBarStyle}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar
        animated={true}
        backgroundColor={statusBarColor || colors.neutral}
        barStyle={statusBarStyle || statusBar.lightBackground}
      />
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
