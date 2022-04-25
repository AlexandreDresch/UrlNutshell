import React from 'react';

import { View, TouchableOpacity, Text, TouchableWithoutFeedback } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import Colors from '../../Themes/colors';

export function ModalLink({ onClose }){
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
          <TouchableOpacity>
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
          >
            <Text 
              style={styles.shortLink}
              numberOfLines={1}
            >
            https://www.google.com
            </Text>
            <TouchableOpacity>
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