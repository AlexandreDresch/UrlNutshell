import React from 'react';

import { View, Text } from 'react-native';
import { StatusBarPage } from '../../components/StatusBarPage';

import Colors from '../../Themes/colors';
import { styles } from './styles';

export default function MyLinks(){
  return (
    <View>
      <StatusBarPage 
      barStyle='light-content'
      backgroundColor={Colors.appBackground1}
      />
      <Text>
        Links
      </Text>
    </View>
  );
}