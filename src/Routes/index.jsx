import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import MyLinks from '../pages/MyLinks';

import Colors from '../Themes/colors';
import { Ionicons} from '@expo/vector-icons'

const Drawer = createDrawerNavigator();

export default function Routes(){
  return (
    <Drawer.Navigator
        screenOptions={{
            drawerActiveBackgroundColor: Colors.appBackground1,
            drawerActiveTintColor: Colors.white,
            headerShown: false
            }
        }
    >
        <Drawer.Screen 
            name='Home'
            component={Home}
            options={{
                title: 'Link Shortener',
                drawerIcon: ({focused, size, color}) => (
                    <Ionicons 
                        name={focused ? 'cube' : 'cube-outline'}
                        color={color}
                        size={size}                    
                    />
                )
            }}
        />

    <Drawer.Screen 
            name='MyLinks'
            component={MyLinks}
            options={{
                title: 'My Links',
                drawerIcon: ({focused, size, color}) => (
                    <Ionicons 
                        name={focused ? 'stats-chart' : 'stats-chart-outline'}
                        color={color}
                        size={size}                    
                    />
                )
            }}
            
        />
    </Drawer.Navigator>
  );
};