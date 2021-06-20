import { observer } from 'mobx-react'
import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { useContext } from 'react'
import { accentColor } from '../../styles/styles'
import Demo from '../Demo'
import { ModelContext } from '../../model/WhatTodayModel'
import { db, fire } from '../../database/firebase'
import { useState, useEffect } from 'react'

const Profile = observer(() => {
    const model = useContext(ModelContext);
    const userID = fire.auth().currentUser.uid;
    const [user, setUser] = useState('');

    const getData = () => {
        var userRef = db.collection("users").doc(`${userID}`);
        userRef.get().then((doc) => {
            if (doc.exists) {
                setUser(doc.data());
            } else {
                console.log("No such document!");
            }
        }).catch((err) => {
            console.log("Error gettintg document:", err);
        })
    }

    useEffect(() => {
        getData();
    }, []);

    console.log(user);

    return (
        <View style={{ backgroundColor: "white" }}>
            <View style={{ marginHorizontal: 20, marginBottom: 60 }}>
                <Text style={[styles.fontText, { fontSize: 18 }]}>{user.username}</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.column}>
                    <Text style={styles.text, styles.fontText}>0</Text>
                    <Text style={styles.text, styles.fontText}>Posts</Text>
                </View>
                <View style={styles.column}>
                    <Image style={styles.avatar} source={require('../../assets/user.jpg')} />
                </View>
                <View style={styles.column}>
                    <Text style={styles.text, styles.fontText}>{model.favRecipes.length}</Text>
                    <Text style={styles.text, styles.fontText}>Saved</Text>
                </View>
            </View>
            <View style={{ margin: 25, alignItems: 'center', marginTop: 70 }}>
                <Text style={[styles.fontText, { fontSize: 12 }]}>{user.name}</Text>
            </View>
        </View>
    )
});

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    column: {
        flex: 1,
        alignItems: 'center',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        elevation: 10
    },
    fontText: {
        fontFamily: 'Poppins-Bold',
        fontWeight: "bold",
        color: accentColor
    },
    text: {
        fontSize: 10,
    }
})
