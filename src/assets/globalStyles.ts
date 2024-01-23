import {Platform, StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  //   topShadow: Platform.select({
  //     ios: {
  //       shadowColor: '#F3F3F3',
  //       shadowOffset: {width: 0, height: -3},
  //       shadowOpacity: 1,
  //     },
  //     android: {
  //       elevation: 10,
  //     },
  //   }),
  topShadow:
    Platform.OS === 'ios'
      ? {
          shadowColor: '#F3F3F3',
          shadowOffset: {width: 0, height: -3},
          shadowOpacity: 1,
        }
      : {
          elevation: 10,
        },
});
