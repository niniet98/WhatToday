import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { ModelContext } from '../../model/WhatTodayModel';

export default function Directions() {
    const model = useContext(ModelContext);
    const allDirections = model.recipeInfo.analyzedInstructions[0].steps;
/*     const Steps=(direction) =>{
        return(
            direction.map((item,index)=>{
                console.log(item)
                return(
                    <View><Text></Text></View>
                )
            })
        );
    } */
    return (
        <View>
             <FlatList 
                data={allDirections}
                renderItem={({ item, index }) => (
                    <Text>{`${index+1}: ${item.step}`}</Text>
                    /* <Steps direction={item} /> */
                )}
                numColumns={1}
             />  
             <Text>DIRECTIONS</Text>
        </View>
    )
}



const styles = StyleSheet.create({})
