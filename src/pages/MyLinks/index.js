import React, { useState, useEffect } from 'react';

import { View, Text, FlatList, Modal, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useIsFocused } from '@react-navigation/native';

import { StatusBarPage } from '../../components/StatusBarPage';
import { Header } from '../../components/Header';
import { ListItem } from '../../components/ListItem';
import { ModalLink } from '../../components/ModalLink';

import { getLinksSave, deleteLink } from '../../utils/storeLinks';

import Colors from '../../Themes/colors';
import { styles } from './styles';

export default function MyLinks(){

  const [ links, setLinks ] = useState([]);
  const [ data, setData ] = useState({});
  const [ modalVisible, setModalVisible ] = useState(false);
  const [ loading, setLoading ] = useState(true);

  const isFocused = useIsFocused();

  useEffect(() => {
    async function getLink(){
      const result = await getLinksSave('links');
      setLinks(result);
      setLoading(false);
    }

    getLink();
  }, [isFocused])

  function handleItem(item) {
    setData(item);
    setModalVisible(true);
  };

  async function handleDelete(id) {
    const result = await deleteLink(links, id);
    setLinks(result);
  };

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

        { loading && (
          <View style={styles.warningContainer}>
            <ActivityIndicator 
              color={Colors.white}
              size={25}
            />
          </View>
        )

        }

        { !loading && links.length === 0 && (
          <View style={styles.warningContainer}>
            <Text style={styles.warningText}>
              You don't have any saved links yet.
            </Text>
          </View>
        )

        }

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
};