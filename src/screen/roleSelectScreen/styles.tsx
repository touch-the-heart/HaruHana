import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
  },
  mainText: {
    fontWeight: '700',
    textAlign: 'center',
  },
  subText: {
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 17,
    marginHorizontal: 90,
  },
  selectContainer: {
    flexDirection: 'row',
    height: 270,
    marginTop: 135,
  },
  selection: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gapLine: {
    width: 1,
  },
  numberText: {
    fontWeight: '400',
    marginBottom: 10,
  },
});
