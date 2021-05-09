import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import Demo from './Demo'



export default function CardCreation() {

    //const [pressed, setPressed] = useState(false);

    //const extraStyle = pressed ? styles.buttonPressed : styles.buttonNotPressed;

    return (
        <Demo>
            <View style={styles.container}>
                
                <View style={styles.column}>
                    <Image style={styles.picture} source={require('../assets/burguer.jpg')} />
                    <Text style={styles.text}>Hamburguesa, 326Kcal</Text>
                </View>
                <View style={styles.column}>
                </View>
            </View>
        </Demo>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Poppins-Bold',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        color: "white",
        fontSize: 20,
        position: 'absolute',
        marginTop: 450, 
        marginLeft: 30,
    },

    picture: {
        marginHorizontal: "auto",
        width: 335,
        height: 501,
        borderRadius: 15,
        marginLeft: 25,
        marginTop: 10,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
  });