import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: 'red',
    width: 180,
    height: 250,
    borderRadius: 20,
    position: 'absolute',
    left: 0,
    transform: [{rotate: '-7deg'}],
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyContainer: {
    backgroundColor: '#F3F3F3',
  },
});
