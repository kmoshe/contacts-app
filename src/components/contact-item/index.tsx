import React from 'react';
import { Contact } from '../../types/Contact';
import { Image, View, Text, StyleSheet } from 'react-native';

interface Props {
    contact: Contact;
}

const ContactItem = ({ contact }: Props) => {
    const imageUrl = { uri: contact.picture.medium };
    return (
        <View style={styles.container}>
            <Image source={imageUrl} style={styles.contactImage} />
            <Text>{contact.name.title} {contact.name.last} {contact.name.first}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
        alignSelf: 'center',
        padding: 50
    },
    contactImage: {
        width: 100,
        height: 100,
        borderRadius: 100,
        alignSelf: "flex-end"
    },
    title: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#61dafb",
        color: "#20232a",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    }
});

export default ContactItem;
