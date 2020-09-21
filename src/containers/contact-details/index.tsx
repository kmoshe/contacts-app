import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from '../../utils/redux-injectors';
import { default as ContactDetailsComponent } from '../../components/contact-details';
import { sliceKey, reducer, actions } from './slice';
import { contactDetailsSaga } from './saga';
import { selectContact, selectLoading, selectError } from './selectors';
import LoadingIndicator from '../../components/loading-indicator';
import { ContactErrorType } from './types';
import { Text, View, StyleSheet } from "react-native";

const ContactDetails = ({ route, navigation }) => {
    useInjectReducer({ key: sliceKey, reducer: reducer });
    useInjectSaga({ key: sliceKey, saga: contactDetailsSaga });

    const contact = useSelector(selectContact);
    const isLoading = useSelector(selectLoading);
    const error = useSelector(selectError);

    const dispatch = useDispatch();
    const useEffectOnMount = (effect: React.EffectCallback) => {
        useEffect(effect, []);
    };
    useEffectOnMount(() => {
        const { uuid } = route.params;
        dispatch(actions.loadContact(uuid));
    });

    return (
        <View>
            <Text>Contact Details Page</Text>
            {isLoading && <LoadingIndicator />}
            {contact ? (
                <ContactDetailsComponent contact={contact} />
            ) : error ? (
                <Text>{contactDetailsErrorText(error)}</Text>
            ) : null}
    </View>
);
}

export const contactDetailsErrorText = (error: ContactErrorType) => {
    switch (error) {
        case ContactErrorType.NOT_FOUND:
            return 'Contact Not Found';
        case ContactErrorType.RESPONSE_ERROR:
            return 'Contact Response Error';
        case ContactErrorType.RESPONSE_INCOMPLETE:
            return 'Unable To Load Contact';
        default:
            return 'An error has occurred!';
    }
};

const styles = StyleSheet.create({});

export default ContactDetails;