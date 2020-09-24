import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Contact } from '../../types/Contact';

interface Props {
    contact: Contact;
}

const ContactDetails = ({ contact }: Props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.contactImage} source={{ uri: contact.picture.large }}  />
            <Text testID="contact-name" style={styles.nameText}>{contact.name.title} {contact.name.last} {contact.name.first}</Text>
            <Text testID="contact-email" style={styles.emailText}>{contact.email}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        flexGrow: 1,
        alignItems: 'center',
        marginTop: 30
    },
    contactImage: {
        height: 300,
        width: 300,
        borderRadius: 100,
    },
    nameText: {
        fontSize: 30
    },
    emailText: {
        fontSize: 30
    }
});

export default ContactDetails;