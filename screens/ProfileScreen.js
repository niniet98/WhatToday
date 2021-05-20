import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Profile from '../components/Profile'
import IconSubMenu from '../components/ProfileMenu'

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <View style={{ height: 10 }}></View>
            <Profile />
            <IconSubMenu />
            <Text>Aquest serà el perfil.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        /* alignItems: 'center', */
        /* justifyContent: 'center', */
    },
})

