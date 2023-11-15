import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../config/colors';

const ListItemCarosel = ({item}) => {
  return (
    <View>
      <Text>ListItemCarosel</Text>
    </View>
  );
};

export default ListItemCarosel;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    alignContent: 'center',
    justifyContent: 'center',
  },
  carosel: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: colors.blue,
  },
});
