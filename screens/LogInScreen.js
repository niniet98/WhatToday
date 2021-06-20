import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native'
import { useContext } from 'react/cjs/react.production.min';
import { AuthContext } from '../Auth';
import Title from '../components/Title'
import { auth } from '../database/firebase';

export default function LogInScreen({ navigation }) {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const { currentUser } = useContext(AuthContext);

    const handleLogIn = async () => {
        try {
            await auth.signInWithEmailAndPassword(email, password);
            console.log(currentUser)
            navigation.navigate('TabNav');
        } catch (error) {
            alert(`ERROR: ${error}`);
        }
    }

    return (
        <View style={styles.container}>
            <Title>What Today</Title>
            <TextInput placeholder="Email" style={styles.textInput} value={email} onChangeText={(value) => setEmail(value)} />
            <TextInput placeholder="Password" style={styles.textInput} value={password} onChangeText={(value) => setPassword(value)} />
            <TouchableWithoutFeedback onPress={handleLogIn}>
                <View style={styles.confirmBtn}>
                    <Text style={styles.buttonText}>Confirm</Text>
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.SignUpContainer}>
                <Text>Don't you have an account yet?</Text>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.register}>Register</Text>
                </TouchableWithoutFeedback>
            </View>
        </View >
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
    SignUpContainer: {
        flexDirection: 'row',
        marginVertical: 70,
    },
    register: {
        marginHorizontal: 5,
        color: '#FC633A',
    }
})
