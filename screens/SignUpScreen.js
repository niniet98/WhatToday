import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import Title from '../components/Title';
import { auth, createUserDocument } from '../database/firebase';
import SignUpBG from '../components/icons/signUpBG';
import ReturnHeaderButton from '../components/ReturnHeaderButton';

export default function SignUpScreen({ navigation, navigation: { goBack } }) {
    const [userName, setUserName] = useState(null);
    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);
    const [confirmPass, setConfirmPass] = useState(null);

    const handleSignUp = async () => {
        console.log(userName, email, pass, confirmPass);
        if (pass === confirmPass) {
            try {
                const { user } = await auth.createUserWithEmailAndPassword(email, pass);
                await createUserDocument(user, userName);
                navigation.navigate('TabNav');
            } catch (error) {
                alert(`ERROR: ${error}`);
            }
        } else {
            alert("La contraseña no coincide.");
        }
    }

    return (
        <View>
            <TouchableOpacity style={styles.returnButton} onPress={() => goBack()}>
                <ReturnHeaderButton />
            </TouchableOpacity>
            <SignUpBG style={styles.background} />
            <View style={styles.container}>
                <Title>Sign Up</Title>
                <TextInput placeholder="User Name" placeholderTextColor="#fff" style={styles.textInput} value={userName} onChangeText={(value) => setUserName(value)} />
                <TextInput placeholder="Email" placeholderTextColor="#fff" style={styles.textInput} value={email} onChangeText={(value) => setEmail(value)} />
                <TextInput placeholder="Password" placeholderTextColor="#fff" style={styles.textInput} value={pass} onChangeText={(value) => setPass(value)} />
                <TextInput placeholder="Repeat Password" placeholderTextColor="#fff" style={styles.textInput} value={confirmPass} onChangeText={(value) => setConfirmPass(value)} />
                <TouchableWithoutFeedback onPress={handleSignUp}>
                    <View style={styles.confirmBtn}>
                        <Text style={styles.buttonText}>Confirm</Text>
                    </View>
                </TouchableWithoutFeedback>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 25,
    },
    textInput: {
        width: '80%',
        borderBottomWidth: 1,
        borderColor: '#fff',
        paddingHorizontal: 10,
        marginBottom: 50,
        color: 'white',
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
    background:{
        position:'absolute',
        top: 50,
        zIndex:-1,
    }
})
