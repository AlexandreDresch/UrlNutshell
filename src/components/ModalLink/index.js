import React from 'react';

import { View, TouchableOpacity, Text, TouchableWithoutFeedback, Share } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';

import { styles } from './styles';
import Colors from '../../Themes/colors';

export function ModalLink({ onClose }){

  function handleCopy() {
    Clipboard.setString('https://linktest.com');
    alert('Link copied')
  }

  async function handleShare() {
    try {
      const result = await Share.share({
        message: `Link: https://linktest.com`
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <View style={styles.modalContainer}>
      <TouchableWithoutFeedback onPress={ onClose }>
        <View style={ { flex: 1 } }></View>
      </TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={ onClose }>
            <Feather 
              name='x'
              color={Colors.black}
              size={30}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleShare}
          >
            <Feather 
              name='share'
              color={Colors.black}
              size={30}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.linkArea}>
          <Text style={styles.title}>
            Shortened link
          </Text>
          <Text 
            style={styles.longLink}
            numberOfLines={1}
          >
            https://www.google.com.br
          </Text>
          <TouchableOpacity 
            style={styles.shortLinkButton}
            activeOpacity={.9}
            onPress={handleCopy}
          >
            <Text 
              style={styles.shortLink}
              numberOfLines={1}
            >
            https://www.google.com
            </Text>
            <TouchableOpacity 
              onPress={handleCopy}
            >
              <Feather 
                name='copy'
                color={Colors.white}
                size={25}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}