import { StyleSheet } from 'react-native';
import Colors from '../../Themes/colors';

import { Platform } from 'react-native';

export const styles = StyleSheet.create({
  title: {
    marginTop: Platform.OS === 'ios' ? '35%' : '20%',
    marginLeft: 20,
    fontSize: 33,
    fontWeight: 'bold',
    color: Colors.white
  },
  warningContainer: {
    marginTop: '15%',
    alignItems: 'center'
  },
  warningText: {
    fontSize: 17,
    color: Colors.white
  }
});