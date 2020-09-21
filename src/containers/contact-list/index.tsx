import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from '../../utils/redux-injectors';
import {View, Text, StyleSheet, TouchableOpacity, VirtualizedList, SafeAreaView, FlatList, Image} from 'react-native';
import ContactItem from '../../components/contact-item';
import { sliceKey, reducer, actions } from './slice';
import { contactListSage } from './saga';
import {
    selectContacts,
    selectLoading,
    selectLoaded,
    selectError,
} from './selectors';
import LoadingIndicator from '../../components/loading-indicator';
import { ContactErrorType } from './types';

import {Contact} from "../../types/Contact";

const ContactList = ({navigation}) => {
    useInjectReducer({ key: sliceKey, reducer: reducer });
    useInjectSaga({ key: sliceKey, saga: contactListSage });

    const contacts = useSelector(selectContacts);
    const isLoading = useSelector(selectLoading);
    // const isLoaded = useSelector(selectLoaded);
    const error = useSelector(selectError);

    const dispatch = useDispatch();
    const useEffectOnMount = (effect: React.EffectCallback) => {
        useEffect(effect, []);
    };
    useEffectOnMount(() => {
        if (contacts.length === 0) {
            dispatch(actions.loadContacts(20));
        }
    });

    const getContactCount = (contacts: Contact[]) => {
        return contacts.length;
    }

    const onContactPress = (contact: Contact) =>
        navigation.navigate('Contact', {
            uuid: contact.login.uuid
        });

    return (
        <View style={styles.container}>
            {isLoading && <LoadingIndicator />}
            {!isLoading && contacts?.length > 0 ? (

                <FlatList
                    data={contacts}
                    keyExtractor={(contact: Contact) => contact.login.uuid}
                    numColumns={2}
                    renderItem={({item}) => (
                        <View style={styles.contactContainer}>
                            <TouchableOpacity onPress={(e) => onContactPress(item)}>
                                <Image source={{ uri: item.picture.medium }} style={styles.contactImage} />
                                <Text>{item.name.title} {item.name.last} {item.name.first}</Text>
                            </TouchableOpacity>
                        </View>
                   )}
                >
                </FlatList>
            ) : error ? (<Text>{contactListErrorText(error)}</Text>) : null }
    </View>);
}

export const contactListErrorText = (error: ContactErrorType) => {
    switch (error) {
        case ContactErrorType.NOT_FOUND:
            return 'Contacts Not Found';
        case ContactErrorType.RESPONSE_ERROR:
            return 'Contacts Response Error';
        case ContactErrorType.RESPONSE_INCOMPLETE:
            return 'Unable To Load More Contacts';
        default:
            return 'An error has occurred!';
    }
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingTop: 30,
    },
    contactContainer: {
        width: '50%',
        alignSelf: 'center',
        padding: 50
    },
    list: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%'
    },
    contactImage: {
        width: 100,
        height: 100,
        borderRadius: 100,
        alignSelf: "flex-end"
    },
    item: {
        width: '50%',  // is 50% of container width
        alignItems: "flex-end"
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
});

export default ContactList;