import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { StatusBarPage } from '../../components/StatusBarPage';
import { Header } from '../../components/Header';
import { Feather} from '@expo/vector-icons';

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

      <Header />

      <View style={styles.containerLogo}>
        <Image
          style={styles.logo}
          source={require('../../assets/logo.png')}
          resizeMode='contain'
        />
      </View>

      <View style={styles.containerContent}>
        <Text style={styles.title}>
          URL in a Nutshell
        </Text>
        <Text style={styles.subtitle}>
          Paste the link you want to shorten
        </Text>
        <View style={styles.containerInput}>
          <View style={styles.boxIcon}>
          <Feather 
            name='link'
            size={22}
            color={Colors.white}
          />
          </View>
          <TextInput 
            style={styles.input}
            placeholder='Paste your link'
          />
        </View>
      </View>
    </LinearGradient>
  );
}