import { StyleSheet } from 'react-native';
import Colors from '../../Themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerButton: {
    flexDirection: 'row',
    backgroundColor: Colors.transparentWhite,
    marginHorizontal: 10,
    marginVertical: 7,
    padding: 12,
    borderRadius: 7,
  },
  link: {
    color: Colors.white,
    paddingLeft: 10,
    paddingRight: 20,
    fontSize: 18
  },
  actionButton: {
    width: '14%',
    backgroundColor: Colors.red,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 7,
    marginHorizontal: 10,
  }
});