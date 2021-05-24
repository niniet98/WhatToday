import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Demo from '../Demo';
import IconButton from '../IconButton';

const Posts = () => {
    <View style={styles.container}>
        <Text>Published</Text>
    </View>
}

const Saved = () => {
    <View style={styles.container}>
        <Text>Saved</Text>
    </View>
}


export default function IconSubMenu() {

    /*iconName --> chef - grid - info - tags - ingredients - directions*/
    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <IconButton iconName={'grid'} />
                <IconButton iconName={'chef'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        /* alignItems: 'center', */
        /* justifyContent: 'center', */
    },
    buttons: {
        flexDirection: 'row',
    },
})