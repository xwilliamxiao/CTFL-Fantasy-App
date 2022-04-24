import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import AthleteScreen from './AthleteScreen';
import ProductScreen from './ProductScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getHeaderTitle } from '@react-navigation/elements';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
        tabBarOptions={{
            activeTintColor:'#121212',
            inactiveTintColor: 'darkgrey',
        }}>
            <Tab.Screen name='Home' component={HomeScreen} options={{tabBarLabel:'Home', tabBarIcon:({color, size})=> (<MaterialCommunityIcons name="home" color={color} size={size/*40 */}/>)}}/>
            <Tab.Screen name='Athletes' component={AthleteScreen} options={{tabBarLabel:'Athletes', tabBarIcon:({color, size})=> (<MaterialCommunityIcons name="run" color={color} size={size/*40*/}/>)}}/>
            <Tab.Screen name='Product' component={ProductScreen} options={{tabBarLabel:'Leaderboard', tabBarIcon:({color, size})=> (<MaterialCommunityIcons name="clipboard-text" color={color} size={size}/>)}}/>
        </Tab.Navigator>
    );
};

export default BottomTab;


const styles = StyleSheet.create({
    tabBarStyle: {
      backgroundColor: '#ccc',
    },
  });