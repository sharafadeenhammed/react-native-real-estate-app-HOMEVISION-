import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import React from 'react';

const Screen = ({children, style, statusBarColor, statusBarTextColor}) => {
  // statusBarColor && StatusBar.setBackgroundColor(statusBarColor, true);
  // statusBarTextColor && StatusBar.bar;
  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar
        animated={true}
        backgroundColor={statusBarColor}
        barStyle="light-content"
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
