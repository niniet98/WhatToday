import { observer } from 'mobx-react'
import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { useContext } from 'react'
import FavRecipeImage from '../components/profile/FavRecipeImage';
import Profile from '../components/profile/Profile'
import ProfileTabs from '../components/profile/ProfileTabs'
import { ModelContext } from '../model/WhatTodayModel'

const ProfileScreen = observer(({ navigation }) => {
    const model = useContext(ModelContext);

    return (
        <View style={styles.container}>
            <View style={{ height: 10 }}></View>
            <Profile />
            <ProfileTabs />
            <View style={{ height: 29 }}></View>
            <FlatList
                data={model.favRecipes.slice()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate("Info", { id: item.id })}>
                        <FavRecipeImage image={item.img} />
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => `${index}`}
                numColumns={3}
                /* style={{marginTop:-40}} */
            />
        </View>
    )
});

export default ProfileScreen;

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

