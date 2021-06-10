import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback } from 'react-native'
import Title from '../components/Title';
import { createUserDocument, fire } from '../database/firebase';

export default function SignUpScreen() {
    /* const [userName, setUserName] = useState(null);
    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);
    const [confirmPass, setConfirmPass] = useState(null); */

    const handleSignUp = async (e) => {
        e.preventDefault();
        const { email, pass, userName, confirmPass } = e.target.elements;
        console.log(userName, email, pass, confirmPass);
        if (pass === confirmPass) {
            try {
                const { user } = await fire.auth().createUserWithEmailAndPassword(email.value, pass.value);
                await createUserDocument(user, userName);
            } catch (error) {
                alert(`ERROR: ${error}`);
            }
        } else {
            alert("La contraseña no coincide.");
        }
    }

    return (
        <View style={styles.container}>
            <Title>Sign Up</Title>
            <TextInput name="userName" placeholder="User Name" style={styles.textInput} /* value={userName} onChangeText={(newText) => setUserName(newText)} */ />
            <TextInput name="email" placeholder="Email" style={styles.textInput} /* value={email} onChangeText={(newText) => setEmail(newText)} */ />
            <TextInput name="pass" placeholder="Password" style={styles.textInput} /* value={pass} onChangeText={(newText) => setPass(newText)} */ />
            <TextInput name="confirmPass" placeholder="Repeat Password" style={styles.textInput} /* value={confirmPass} onChangeText={(newText) => setConfirmPass(newText)} */ />
            <TouchableWithoutFeedback onPress={handleSignUp}>
                <View style={styles.confirmBtn}>
                    <Text style={styles.buttonText}>Confirm</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 25,
    },
    textInput: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#aaa',
        paddingHorizontal: 10,
        marginBottom: 50,
        color: 'darkgray',
    },
    confirmBtn: {
        backgroundColor: '#FCB13A',
        /* flex: 1, */
        height: 23,
        borderRadius: 15,
        paddingHorizontal: 100,
        justifyContent: 'center',
    },
    buttonText: {
        fontFamily: 'Poppins-Bold',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 12,
        color: 'white',
    },
})
