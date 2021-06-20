import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import InfoTag from '../InfoTag'



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
        <View style={{position:'absolute', top: 0}}>
            <Text style={styles.title}>TAGS</Text>
            <View style={styles.container}>
                <CuisineList />
                <DishList />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
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
