import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ContactList from "../contact-list";

const navigator = createStackNavigator(
    {
        ContactList
    },
    {
        initialRouteName: "ContactList",
        defaultNavigationOptions: {
            title: "Contacts App"
        }
    }
);

export default createAppContainer(navigator);
