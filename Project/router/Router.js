import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Login from '../Login'
import About from '../About'
import DaftarFilm from '../DaftarFilm'
import DaftarTvShow from '../DaftarTvShow'
import Detail from '../Detail'
import Home from '../Home'

const Stack = createStackNavigator()

export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name="DaftarFilm" component={DaftarFilm} />
                <Stack.Screen name="DaftarTvShow" component={DaftarTvShow} />
                <Stack.Screen name="Detail" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}