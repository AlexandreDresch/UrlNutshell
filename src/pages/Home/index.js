import React from 'react';
import { View, Text } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { StatusBarPage } from '../../components/StatusBarPage';
import { Header } from '../../components/Header';

import { styles } from './styles';
import Colors from '../../Themes/colors';

export default function Home(){
  return (
    <LinearGradient
      colors={[Colors.appBackground1, Colors.appBackground2]}
      style={{ flex: 1, justifyContent: 'center' }}
    >
      <StatusBarPage 
        barStyle='light-content'
        backgroundColor={Colors.appBackground1}
      />
      <Header/>
        <Text>
            Home
        </Text>
    </LinearGradient>
  );
}