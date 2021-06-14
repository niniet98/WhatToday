import { observer } from 'mobx-react';
import React, { useContext } from 'react'
import { View, ScrollView, Text, Button, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import CategoriesBG from '../components/icons/categoriesBG';
import { ModelContext } from '../model/WhatTodayModel';
import LinearGradient from 'react-native-linear-gradient'
import Category from '../components/Category'

const numColumns = 3;
const Recipe = ({ img, counter }) => (
    counter%2==0 ?
    <View style={[styles.recipe, styles.rotationRight]}><Image style={styles.picture} source={{ uri: img }} /></View>:
    <View style={[styles.recipe, styles.rotationLeft]}><Image style={styles.picture} source={{ uri: img }} /></View>
);

const SaveScreen = observer(({ navigation }) => {
    const model = useContext(ModelContext);

    return (
        <View style={styles.screen}>
            <FlatList 
            data={model.favRecipes}
            renderItem={({ item, index }) => (
                index % 3 == 1 ? 
                <TouchableOpacity onPress={() => 
                    navigation.navigate("Info", {id: item.id})
                }>
                  <Recipe key={item.id} img={item.img} counter={index} />
                </TouchableOpacity> : 
                <TouchableOpacity style={styles.columnaSenar} onPress={() => 
                    navigation.navigate("Info", {id: item.id})
                }>
                  <Recipe key={item.id} img={item.img} counter={index} />
                </TouchableOpacity>
                )}
            numColumns={numColumns} 
        />
            <View style={styles.categoriesContainer}>
                <Category children='PASTA'/>
                <Category children='MEAT'/>
                <Category children='FISH'/>
                <Category children='DESSERTS'/>
                <Category children='VEGAN'/>

            </View>
            {/*         <View>
            <LinearGradient style={{width:200,height:200}} colors={['red', 'yellow', 'green' ]}>
                <Text>Vertical Gradient</Text>
            </LinearGradient>
        </View> */}
            {/* <CategoriesBG style={styles.categoriesContainer} /> */}
        </View>
    )
});

export default SaveScreen;

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const rotation = 6;

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        height: screenHeight,
        width: screenWidth,
        backgroundColor: 'white',
    },
    favsContainer: {
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
    },
    recipe: {
        width: screenWidth*(97/375),
        height: screenHeight*(5/23),
        borderRadius: 20,
        margin: 10,
        flex: 1/numColumns,
        elevation: 10,
    },
    rotationRight:{
        transform: [{ rotate: `${rotation}deg` }],
    },
    rotationLeft:{
        transform: [{ rotate: `-${rotation}deg` }],

    },
    picture: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        alignItems: "center",
        
    },
     categoriesContainer:{
        backgroundColor: 'red', 
        height:400, 
        width: screenWidth, 
        borderTopLeftRadius:20, 
        borderTopRightRadius:20,
        flexWrap: 'wrap',
        flexDirection: 'row',  
        justifyContent: 'center',
        paddingTop:50    
    },
    columnaSenar:{
        marginTop:50,
    }

})
