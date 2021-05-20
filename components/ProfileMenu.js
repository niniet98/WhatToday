import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Demo from './Demo';
import IconButton from './IconButton';


export default function IconSubMenu() {
    /*iconName --> chef - grid - info - tags - ingredients - directions*/
    return (

        <View style={styles.buttons}>
            <IconButton selected={true} iconName={'grid'} />
            <IconButton selected={false} iconName={'chef'} />
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
    }
})