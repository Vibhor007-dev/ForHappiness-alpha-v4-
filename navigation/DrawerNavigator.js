import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from '../screens/Profile';
import Joke from '../screens/Joke';
import Meme from '../screens/Meme';
import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <NavigationContainer>
        <Drawer.Navigator>
        <Drawer.Screen name="Jokes" component={Joke} />
        <Drawer.Screen name="Memes" component={Meme} />
        <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default DrawerNavigator;