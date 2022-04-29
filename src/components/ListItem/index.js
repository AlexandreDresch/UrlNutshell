import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import { styles } from './styles';
import Colors from '../../Themes/colors';

export function ListItem({data, selectedItem, deleteItem}){

  function RightActions() {
    return(
      <TouchableOpacity 
        style={styles.actionButton}
        onPress={ () => deleteItem(data.id) }
      >
        <Feather 
          name='trash'
          color={Colors.white}
          size={24}
        />
      </TouchableOpacity>
    )
  }

  return (
    <View>
      <Swipeable renderRightActions={RightActions}>
        <TouchableOpacity
          style={styles.containerButton}
          activeOpacity={.8}
          onPress={ () => selectedItem(data) }
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
            {data.long_url}
          </Text>
        </TouchableOpacity>
      </Swipeable>
    </View>
  );
}