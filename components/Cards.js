import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'



export default function CardCreation() {

    //const [pressed, setPressed] = useState(false);

    //const extraStyle = pressed ? styles.buttonPressed : styles.buttonNotPressed;

    return (

        <View style={styles.container}>
            <Image style={styles.picture} source={require('../assets/burguer.jpg')} />
            <Text style={styles.text}>Hamburguesa, 326Kcal</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        /* alignItems: 'center', */
        marginTop: 90,
        margin: 30,
    },
    picture: {
        flex: 1,
        borderRadius: 15,
        /* alignItems: 'stretch', */
        resizeMode: "cover",
        maxHeight: 500,
    },
    text: {
        fontFamily: 'Poppins-Bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        color: "white",
        fontSize: 20,
        position: 'absolute',
        bottom: -490,
        left: 15,
        shadowColor: 10,
    },

});