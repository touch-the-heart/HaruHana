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
  shadow:
    Platform.OS === 'ios'
      ? {
          shadowColor: '#000000',
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 0.15,
        }
      : {
          elevation: 15,
        },
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
