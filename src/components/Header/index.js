import React from 'react';

import { View, TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import Colors from '../../Themes/colors';

export function Header(){
    const navigation = useNavigation();
  return (
    <View>
        <TouchableOpacity 
            style={styles.menuButton}
            onPress={ () => navigation.openDrawer() }
        >
            <Feather 
                name='menu'
                size={40}
                color={Colors.white}
            />
        </TouchableOpacity>
    </View>
  );
}