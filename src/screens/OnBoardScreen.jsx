import {StyleSheet, Text, View, FlatList} from 'react-native';
import {useRef} from 'react';
import Screen1 from '../components/OnBoardItem';
import onboarding from '../config/onboarding';
import OnBoardItem from '../components/OnBoardItem';
import {scrollTo} from 'react-native-reanimated';
const screens = [Screen1, Screen1];
const OnBoarding = ({navigation}) => {
  const flatListRef = useRef();
  return (
    <FlatList
      ref={flatListRef}
      style={styles.container}
      data={onboarding}
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      renderItem={({item, index}) => {
        const Componnent = item;
        return (
          <OnBoardItem
            navigation={navigation}
            key={index.toString()}
            item={item}
            onPress={() =>
              flatListRef.current.scrollToIndex({
                index: index + 1,
                animate: true,
              })
            }
          />
        );
      }}
    />
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
