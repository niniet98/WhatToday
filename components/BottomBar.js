import React from 'react'
import { View, Text, StyleSheet, Image, Button, Pressable } from 'react-native'
import Demo from './Demo'
import Add from './icons/add';
import Chef from './icons/chef'
import ProfileIcon from './icons/profile';
import Settings from './icons/settings';

export default function BottomBar() {
    return (
        <Demo>
            {/* BottomBar */}
            <View style={styles.container1}>
                <View style={styles.column} onPres>
                    <Pressable onPress={null}>
                        <Settings style={styles.icon} />
                    </Pressable>
                </View>
                <View style={styles.column}>
                    <Pressable onPress={null}>
                        <Chef style={styles.icon} />
                    </Pressable>
                </View>
                <View style={styles.column}>
                    <Pressable onPress={null}>
                        <Add style={styles.icon} />
                    </Pressable>
                </View>
                <View style={styles.column}>
                    <Pressable onPress={null}>
                        <ProfileIcon style={styles.icon} />
                    </Pressable>
                </View>
            </View>
            {/* Variant, provisionalment el fons es gris, sino no es veuen els svg */}
            <View style={styles.container2}>
                <View style={styles.column} onPres>
                    <Pressable onPress={null}>
                        <Settings style={styles.icon} />
                    </Pressable>
                </View>
                <View style={styles.column}>
                    <Pressable onPress={null}>
                        <Chef style={styles.icon} />
                    </Pressable>
                </View>
                <View style={styles.column}>
                    <Pressable onPress={null}>
                        <Add style={styles.icon} />
                    </Pressable>
                </View>
                <View style={styles.column}>
                    <Pressable onPress={null}>
                        <ProfileIcon style={styles.icon} />
                    </Pressable>
                </View>
            </View>
        </Demo>
    )
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20,
        paddingTop: 15,
        paddingBottom: 10,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        elevation: 5,
    },
    container2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20,
        paddingTop: 15,
        paddingBottom: 10,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        backgroundColor: '#ddd',
    },
    column: {
        flex: 1,
        alignItems: 'center',
    },
    icon: {
        /* shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        elevation: 5, */
    }
})
