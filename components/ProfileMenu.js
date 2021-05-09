import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Demo from './Demo';
import IconButton from './IconButton';


export default function IconSubMenu({ blank, centered }) {
    /*iconName --> chef - grid - info - tags - ingredients - directions*/
    return (
        <Demo blank={blank} centered={centered}>
            <View style={styles.buttons}>
                <IconButton selected={true} iconName={'grid'} />
                <IconButton selected={false} iconName={'chef'} />
            </View>
        </Demo>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
    }
})