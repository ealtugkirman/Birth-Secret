import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#00245f',
    flex: 1,
  },
  text: {
    flex: 0,
    paddingTop: 40,
    fontFamily: 'Tangerine-Bold',
    // // alignSelf: 'center',
    textAlign: 'center',
    fontSize: 70,
    color: '#ffdb72',
    // height: Dimensions.get('window').height,
  },
  view: {
    flex: 5,
    justifyContent: 'center',
  },
  image: {
    marginTop: 10,
    alignSelf: 'center',
    flex: 10,
    width: 400,
    height: Dimensions.get('window').height,
    // resizeMode: 'contain',
  },
  lib: {
    marginTop: 70,
    color: '#ffdb72',
    textAlign: 'center',
    fontSize: 8,
  },
});
