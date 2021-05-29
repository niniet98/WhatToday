import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import GetRandom from '../components/api/GetRandom'
import IconButton from '../components/IconButton'
import Profile from '../components/profile/Profile'
import ProfileTabs from '../components/profile/ProfileTabs'

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <View style={{ height: 10 }}></View>
            <Profile />
            {/* <View style={styles.menu}>
                <IconButton iconName={'grid'} />
                <IconButton iconName={'chef'} />
            </View> */}
            <ProfileTabs />
            <View style={{ height: 29 }}></View>
            <GetRandom />
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

