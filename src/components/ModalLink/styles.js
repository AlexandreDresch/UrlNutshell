import { StyleSheet } from 'react-native';
import Colors from '../../Themes/colors';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 15
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15
  },
  linkArea: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 33,
    fontWeight: 'bold',
    color: Colors.appBackground1
  },
  longLink: {
    fontSize: 17,
    color: Colors.grey,
    marginBottom: 15
  },
  shortLinkButton: {
    height: 45,
    width: '100%',
    backgroundColor: Colors.appBackground2,
    borderRadius: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  shortLink: {
    width: '90%',
    color: Colors.white,
    fontSize: 16
  }
});