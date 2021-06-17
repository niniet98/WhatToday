import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import GetRecipes from '../components/profile/GetRecipes'
import Profile from '../components/profile/Profile'
import ProfileTabs from '../components/profile/ProfileTabs'

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <View style={{ height: 10 }}></View>
            <Profile />
            <ProfileTabs />
            <View style={{ height: 29 }}></View>
            <GetRecipes />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'stretch',
    },
    menu: {
        flexDirection: 'row',
        height: 40,
        /* width: 300, */
        borderWidth: 1,
        borderColor: 'blue',
    },
})

