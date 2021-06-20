import { observer } from 'mobx-react';
import React, { useContext } from 'react'
import { View, ScrollView, Text, Button, StyleSheet, Dimensions, Image, TouchableOpacity, Modal } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { ModelContext } from '../model/WhatTodayModel';
import Category from '../components/Category';
import AddCategoryButton from '../components/AddCategoryButton';
import { LinearGradient } from 'expo-linear-gradient'
import { parapraphTextSize, parapraphTextSize2, primaryColor } from '../styles/styles';
import { useState } from 'react';
import { TextInput } from 'react-native';


const numColumns = 3;
const Recipe = ({ img, counter }) => (
    counter % 2 == 0 ?
        <View style={[styles.recipe, styles.rotationRight]}><Image style={styles.picture} source={{ uri: img }} /></View> :
        <View style={[styles.recipe, styles.rotationLeft]}><Image style={styles.picture} source={{ uri: img }} /></View>
);


const SaveScreen = observer(({ navigation }) => {
    const model = useContext(ModelContext);

    //------------------------------------//

    const [modalVisible, setModalVisible] = useState(false);
    const [categoryText, setCategoryText] = useState("");

    //------------------------------------//

    let categorysContent = model.categorys.length === 0 ?
        <Text style={styles.message}>Click on the button to add a new category!</Text>
        :
        <ScrollView style={styles.categoriesScroll} horizontal decelerationRate="fast" showsHorizontalScrollIndicator >
            {model.categorys.map((category, idx) => { return <Category key={idx}>{category}</Category> })}
        </ScrollView>
        ;

    //------------------------------------//

    return (
        <View style={styles.screen}>

            <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => { setModalVisible((modalVisible) => !modalVisible) }}>
                <View style={styles.backgroundModal}>
                    <Text style={styles.textModal}>New category</Text>
                    <TextInput
                        style={styles.textInputModal}
                        placeholder="e.g. Pasta"
                        placeholderTextColor={primaryColor}
                        textAlign="center"
                        value={categoryText}
                        onChangeText={(newText) => setCategoryText(newText)}
                    />
                    <TouchableOpacity onPress={() => {
                        setModalVisible(!modalVisible);
                        model.addCategory(categoryText);
                        setCategoryText("");
                    }}>
                        <View style={styles.buttonModal}>
                            <Text style={styles.buttonTextModal}>Create</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Modal>

            <FlatList
                data={model.favRecipes.slice()}
                renderItem={({ item, index }) => (
                    index % 3 == 1 ?
                        <TouchableOpacity onPress={() =>
                            navigation.navigate("Info", { id: item.id })
                        }>
                            <Recipe key={item.id} img={item.img} counter={index} />
                        </TouchableOpacity> :
                        <TouchableOpacity style={styles.columnaSenar} onPress={() =>
                            navigation.navigate("Info", { id: item.id })
                        }>
                            <Recipe key={item.id} img={item.img} counter={index} />
                        </TouchableOpacity>
                )}
                numColumns={numColumns}
            />

            <LinearGradient
                // Button Linear Gradient
                colors={['#F23838', '#FCB13A']}
                start={[1, 0]}
                end={[0, 1]}
                style={styles.categoriesContainer}>

                <View style={styles.categoryButton} >
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <AddCategoryButton />
                    </TouchableOpacity>
                </View>

                {categorysContent}

            </LinearGradient>

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
        width: screenWidth * (97 / 375),
        height: screenHeight * (5 / 23),
        borderRadius: 20,
        margin: 10,
        flex: 1 / numColumns,
        elevation: 5,
    },
    rotationRight: {
        transform: [{ rotate: `${rotation}deg` }],
    },
    rotationLeft: {
        transform: [{ rotate: `-${rotation}deg` }],

    },
    picture: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        alignItems: "center",

    },
    categoriesContainer: {
        backgroundColor: primaryColor,
        height: 240,
        width: screenWidth,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 23,
        elevation: 10,
    },
    columnaSenar: {
        marginTop: 40,
    },
    categoryButton: {
        position: "absolute",
        top: -30
    },
    textModal: {
        color: primaryColor,
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        margin: 10
    },
    backgroundModal: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        padding: 5,
        position: "absolute",
        top: screenHeight / 4,
        backgroundColor: "white",
        width: screenWidth / 1.5,
        elevation: 10,
        borderRadius: 15,
    },
    textInputModal: {
        width: "75%",
        borderBottomWidth: 1,
        borderColor: primaryColor,
        color: primaryColor,
        fontSize: parapraphTextSize2,
        margin: 10,
    },
    buttonModal: {
        margin: 15,
        height: 24,
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        backgroundColor: primaryColor
    },
    buttonTextModal: {
        textAlign: 'center',
        fontSize: parapraphTextSize,
        alignItems: 'stretch',
        color: "white"
    },
    categoriesScroll: {
        marginHorizontal: 12,
        marginVertical: 15,
    },
    message: {
        color: "white",
        opacity: .5,
        fontFamily: 'Poppins-Bold',
        fontSize: parapraphTextSize2,
        fontWeight: 'bold',
        marginTop: 50
    }
})
