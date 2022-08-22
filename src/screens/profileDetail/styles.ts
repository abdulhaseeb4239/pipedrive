import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    flex: 1,
  },
  imgView: {
    alignItems: 'center',
    marginTop: 20,
  },
  imgPlaceHolder: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#8acbd8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneView: {
    flexDirection: 'row',

    alignItems: 'center',
  },
  phoneText: {
    color: 'black',
    fontWeight: '600',
    marginStart: 5,
    opacity: 0.8,
    fontSize: 16,
  },
  btnView: {
    marginTop: 40,
  },
  heading: {
    fontWeight: '700',
    color: 'black',
    fontSize: 20,
    opacity: 0.8,
  },
  dealView: {
    marginTop: 20,
    borderColor: '#c0c0c0',
    borderRadius: 12,
    borderWidth: 1,
    padding: 15,
  },
  smallHeading: {
    fontWeight: '400',
    fontSize: 14,
    color: 'black',
    opacity: 0.5,
    marginTop: 10,
  },
  value: {
    fontWeight: '500',
    fontSize: 16,
    color: 'black',
    opacity: 0.8,
  },
});

export default styles;
