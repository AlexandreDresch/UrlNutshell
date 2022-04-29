import React, { useState } from 'react';
import { 
  View, Text, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, 
  KeyboardAvoidingView, Platform, Modal, ActivityIndicator } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { StatusBarPage } from '../../components/StatusBarPage';
import { Header } from '../../components/Header';
import { Feather} from '@expo/vector-icons';
import { ModalLink } from '../../components/ModalLink';
import api from '../../services/api';

import { styles } from './styles';
import Colors from '../../Themes/colors';

export default function Home(){

  const [ loading, setLoading ] = useState(false);
  const [ input, setInput ] = useState('');
  const [ modalVisible, setModalVisible ] = useState(false);
  const [ data, setData ] = useState({});

  async function handleShortLink() {
    setLoading(true);
    try {
      const response = await api.post('/shorten', 
      {
        long_url: input
      })
      setData(response.data)
      setModalVisible(true);
      
      setLoading(false);
      setInput('');
      Keyboard.dismiss();

    } catch {
      alert('Something went wrong, please try again.')
      Keyboard.dismiss();
      setInput('');
      setLoading(false);
    }    
  }

  return (
    <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>
      <LinearGradient
        colors={[Colors.appBackground1, Colors.appBackground2]}
        style={{ flex: 1, justifyContent: 'center' }}
      >

        <StatusBarPage 
          barStyle='light-content'
          backgroundColor={Colors.appBackground1}
        />

        <Header />

        <KeyboardAvoidingView 
          behavior={ Platform.OS === 'android' ? 'padding' : 'position'}
          enabled
        >
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
                placeholder='Paste your link here.'
                placeholderTextColor='white'
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType='url'
                value={input}
                onChangeText={ (text) => setInput(text) }
              />
              
            </View>
            <TouchableOpacity 
              style={styles.button}
              onPress={ handleShortLink }
            >
              {
                loading ? (
                  <ActivityIndicator 
                    color={Colors.black} 
                    size={24} 
                  />
                ) : (
                  <Text style={styles.buttonText}>
                    Generate Link
                  </Text>
                )
              }
                
              </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
        <Modal 
          visible={modalVisible}
          transparent
          animationType='slide'
        >
          <ModalLink onClose={ () => setModalVisible(false) } data={data} />
        </Modal>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}