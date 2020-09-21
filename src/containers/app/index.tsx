import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch } from 'react-redux'
import ContactList from '../contact-list';
import ContactDetails from '../contact-details';

const RootScreen = () => {
    // Deep linking prefix
    const prefix = 'boilerplate://';

    const dispatch = useDispatch()
    const Stack = createStackNavigator();

    // useEffect(() => {
    //     dispatch(StartupActions.startup())
    // }, [])

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Contact List"  component={ContactList} />
                <Stack.Screen name="Contact"  component={ContactDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootScreen