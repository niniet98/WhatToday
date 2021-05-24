import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import GetRandom from '../components/api/GetRandom'
import IconButton from '../components/IconButton'
import Profile from '../components/profile/Profile'

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <View style={{ height: 10 }}></View>
            <Profile />
            <View style={styles.menu}>
                <IconButton pressed={false} iconName={'grid'} />
                <IconButton pressed={true} iconName={'chef'} />
            </View>
            <GetRandom />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    menu: {
        flexDirection: 'row',
    },
})

