import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Demo from './Demo'
import Add from './icons/add';
import Chef from './icons/chef'
import ProfileIcon from './icons/profile';
import Settings from './icons/settings';

export default function BottomBar() {
    return (
        <Demo>
            <View style={styles.container}>
                <View style={styles.column}>
                    {/* <Button props={svg que vols}/> */}
                    <Settings />
                </View>
                <View style={styles.column}>
                    <Chef />
                </View>
                <View style={styles.column}>
                    <Add />
                </View>
                <View style={styles.column}>
                    <ProfileIcon />
                </View>
            </View>
        </Demo>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20,
        paddingTop: 15,
        paddingBottom: 10,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        backgroundColor: '#eee'
    },
    column: {
        flex: 1,
        alignItems: 'center',
    }
})
