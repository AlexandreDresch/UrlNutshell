import React, { useState, useEffect } from 'react';

import { View, Text, FlatList, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBarPage } from '../../components/StatusBarPage';
import { Header } from '../../components/Header';
import { ListItem } from '../../components/ListItem';
import { useIsFocused } from '@react-navigation/native';
import { getLinksSave } from '../../utils/storeLinks';
import { ModalLink } from '../../components/ModalLink';

import Colors from '../../Themes/colors';
import { styles } from './styles';

export default function MyLinks(){

  const [ links, setLinks ] = useState([]);
  const [ data, setData ] = useState({});
  const [ modalVisible, setModalVisible ] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    async function getLink(){
      const result = await getLinksSave('links');
      setLinks(result);
    }

    getLink();
  }, [isFocused])

  function handleItem(item) {
    setData(item);
    setModalVisible(true);
  }

  function handleDelete(id) {

  }

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
          data={links}
          keyExtractor={(item) => String(item.id)}
          renderItem={ ({item}) => <ListItem data={item} selectedItem={ handleItem } deleteItem={ handleDelete } /> }
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={ false }
        />

        <Modal 
          visible={modalVisible} 
          transparent 
          animationType='slide'
        >
          <ModalLink onClose={ () => setModalVisible(false) } data={data} />
        </Modal>

      </View>
    </LinearGradient>
  );
}