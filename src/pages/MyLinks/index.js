import React from 'react';

import { View, Text, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBarPage } from '../../components/StatusBarPage';
import { Header } from '../../components/Header';
import { ListItem } from '../../components/ListItem';

import Colors from '../../Themes/colors';
import { styles } from './styles';

export default function MyLinks(){
  return (
    <LinearGradient 
      colors={[Colors.appBackground1, Colors.appBackground2]} 
      style={{ flex: 1}}
    >
      <View style={styles.container}>
        <StatusBarPage 
        barStyle='light-content'
        backgroundColor={Colors.appBackground1}
        />

        <Header />

        <Text style={styles.title}>
          My Links
        </Text>

        <FlatList 
          style={styles.linkList}
          data={[{id: 1, link: 'test.com'}]}
          keyExtractor={(item) => String(item.id)}
          renderItem={ ({item}) => <ListItem data={item} />}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={ false }
        />

      </View>
    </LinearGradient>
  );
}