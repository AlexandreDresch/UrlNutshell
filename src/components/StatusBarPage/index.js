import React from 'react';

import { View, StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

export function StatusBarPage(props){
    const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
  
}