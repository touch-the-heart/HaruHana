import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  dotStyle: {
    backgroundColor: '#D9D9D9',
    marginBottom: 20,
  },
  middleContainer: {
    flex: 1,
    marginBottom: 100,
  },
  middleImage: {
    flex: 1,
  },
  middleText: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
  },
  eclipseCantainer: {
    flexDirection: 'row',
    gap: 6,
  },
  buttonContainer: {
    width: '100%',
    // marginTop: 50,
    marginBottom: 50,
    gap: 10,
  },
  button: {
    backgroundColor: '#FEE500',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 10,
    textAlign: 'center',
  },
});
