import React from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';

const LoadingIndicator = () => {

    return (
        <View style={[styles.container, styles.vertical]}>
            <Text style={styles.loadingText}>Loading...</Text>
            <ActivityIndicator style={styles.indicator} size="large"/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    loadingText: {
        fontSize: 30
    },
    vertical: {
        padding: 30
    },
    indicator: {
        marginTop: 30
    }
});

export default LoadingIndicator;