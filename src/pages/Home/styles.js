import { StyleSheet } from 'react-native';
import Colors from '../../Themes/colors';

import { Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' ? 35 : 15
  },
  logo: {
    width: 170,
    height: 170
  },
  containerContent: {
    marginTop: Platform.OS === 'ios' ? '25%' : '15%'
  },
  title: {
    fontSize: 35,
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 20,
    color: Colors.white,
    textAlign: 'center',
    paddingBottom: '10%'
  },
  containerInput: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    borderRadius: 7,
    marginVertical: 15,
    paddingHorizontal: 15
  },
  boxIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    width: '11%',
    height: 50,
    backgroundColor: Colors.transparentWhite,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
  input: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 50,
    padding: 10,
    backgroundColor: Colors.transparentWhite,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    fontSize: 17,
    color: Colors.white
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    backgroundColor: Colors.white,
    marginHorizontal: 15,
    borderRadius: 7,
    marginBottom: 130
  },
  buttonText: {
    fontSize: 16
  },
});