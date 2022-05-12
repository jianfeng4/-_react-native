import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Food from '../food/Food'
import Movie from '../movie/Movie'
import Hotel from '../hotel/Hotel'
import Bank from '../bank/Bank'



const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Food"
                    component={Food}
                    options={{
                        tabBarIcon: () => <Image source={{ uri: "icon_food" }}
                            style={ styles.Icon } />,
                        headerShown: false,
                        tabBarActiveTintColor: 'red',
                        
                    }}

                />
                <Tab.Screen name="Movie" component={Movie}
                    options={{
                        tabBarIcon: () => <Image source={{ uri: "icon_movie" }}
                            style={styles.Icon } />,
                        headerShown: false,
                        tabBarActiveTintColor: 'red'
                    }} />
                <Tab.Screen name="Hotel" component={Hotel}
                    options={{
                        tabBarIcon: () => <Image source={{ uri: "icon_hotel" }}
                            style={ styles.Icon} />,
                        headerShown: false,
                        tabBarActiveTintColor: 'red'
                    }} />
                <Tab.Screen name="Bank" component={Bank} options={{
                    tabBarIcon: () => <Image source={{ uri: "icon_bank" }}
                        style={ styles.Icon } />,
                    headerShown: false,
                    tabBarActiveTintColor: 'red'
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    Icon: {
        height: 28,
        width: 28,
        // tintColor: 'red'
    }
})