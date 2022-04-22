import { StyleSheet } from 'react-native'; 
import { StatusBar, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuButton: {
      top: Platform.OS === 'ios' ? StatusBar.currentHeight + 60 : 10 ,
      position: 'absolute',
      marginHorizontal: 20,
      justifyContent: 'space-around'
  }
});