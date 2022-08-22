import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',

    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  subject: {
    fontWeight: '600',
    fontSize: 16,
    color: 'black',
    opacity: 0.7,
  },
  detail: {
    fontWeight: '400',
    fontSize: 14,
    color: 'black',
    opacity: 0.5,
  },
  divider: {
    height: 1,
    backgroundColor: '#c0c0c0',
  },
});

export default styles;
