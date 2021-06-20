import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import InfoTag from '../InfoTag'
import Slider from "../icons/slider3";



export default function InfoTags({cuisines, dishTypes}) {
    console.log(cuisines.length);
    console.log(dishTypes.length);
    const CuisineList=() => {
        let c = cuisines.map((nation,index) => {
             return (
                 <InfoTag children={nation} key={index} />
             );
         }); 
         return c
     }
    const DishList=() => {
       let d = dishTypes.map((dish,index) => {
            return (
                <InfoTag children={dish} key={index} />
            );
        }); 
        return d
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>TAGS</Text>
            <View style={styles.tagsContainer}>
                <CuisineList />
                <DishList />
            </View>
            {/* sentim fer-ho així de cutre però no ens funcionava i 
            d'alguna manera havíem d'indicar que es podia fer scroll horitzontal */}
            <Slider style={{marginVertical:20}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        position:'absolute', top: 0, alignItems:'center'
    },
    tagsContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
        marginBottom: 10
    }
})
