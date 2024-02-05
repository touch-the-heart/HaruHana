import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  constainer: {
    // borderWidth: 1,
    // borderColor: 'blue',
    width: 180,
    height: 250,
    borderRadius: 20,
    position: 'absolute',
    top: 130,
    right: 0,
    transform: [{rotate: '6deg'}],
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyContainer: {
    backgroundColor: '#F3F3F3',
  },
});
