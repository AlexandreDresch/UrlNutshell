import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import MyLinks from '../pages/MyLinks';

import Colors from '../Themes/colors';
import { IonIcons} from '@expo/vector-icons'

const Drawer = createDrawerNavigator();

export default function Routes(){
  return (
    <Drawer.Navigator
        screenOptions={{
            drawerStyle: {
                marginTop: 16,
            },
            drawerActiveBackgroundColor: Colors.appBackground1,
            drawerActiveTintColor: Colors.white,
            }
        }
    >
        <Drawer.Screen 
            name='Home'
            component={Home}
            options={{
                title: 'Link Shortener',
                drawerIcon: ({focused, size, color}) => (
                    <IonIcons 
                        name='cube'
                        color={color}
                        size={size}                    />
                )
            }}
        />

    <Drawer.Screen 
            name='MyLinks'
            component={MyLinks}
            
        />
    </Drawer.Navigator>
  );
}