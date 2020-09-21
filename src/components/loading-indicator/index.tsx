import React from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';

const LoadingIndicator = () => {

    return (
        <View style={[styles.container, styles.horizontal]}>
            <Text>Loading...</Text>
            <ActivityIndicator size="large"></ActivityIndicator>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});

export default LoadingIndicator;