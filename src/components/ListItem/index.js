import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'

import { styles } from './styles';
import Colors from '../../Themes/colors';

export function ListItem(){
  return (
    <View>
        <TouchableOpacity
          style={styles.containerButton}
          activeOpacity={.8}
          onPress={ () => {} }
        >
          <Feather 
            name='link'
            color={Colors.white}
            size={24}
          />
          <Text 
            style={styles.link}
            numberOfLines={1}
          >
            linkExemple
          </Text>
        </TouchableOpacity>
    </View>
  );
}