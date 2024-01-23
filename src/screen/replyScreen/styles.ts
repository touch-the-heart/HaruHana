import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  middleContainer: {
    height: 440,
    paddingHorizontal: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  leftImage: {
    borderWidth: 1,
    borderColor: 'red',
    width: 180,
    height: 250,
    borderRadius: 20,
    position: 'absolute',
    left: 0,
    transform: [{rotate: '-7deg'}],
  },
  rightImage: {
    borderWidth: 1,
    borderColor: 'blue',
    width: 180,
    height: 250,
    borderRadius: 20,
    position: 'absolute',
    top: 130,
    right: 0,
    transform: [{rotate: '6deg'}],
  },
  bottomContainer: {
    backgroundColor: '#FFFFFF',
    height: 80,
    paddingHorizontal: 20,
    flexDirection: 'row',
    paddingTop: 10,
    gap: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    flex: 1,
    paddingHorizontal: 5,
    borderRadius: 5,
    borderColor: '#B0B0B0',
  },
  button: {
    backgroundColor: '#B0B0B0',
    width: 55,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
  },
});
