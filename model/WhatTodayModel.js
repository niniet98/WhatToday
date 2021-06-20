import { action, computed, makeObservable, observable, observe } from "mobx";
import React, { createContext } from "react";


const URL_BASE = 'https://api.spoonacular.com/recipes';
//const apiKey = "6b7427f391974de5921bcd793e67086e"; //noe 1
//const apiKey = "701b25c5a2014c749a3d17ca5e3b357f"; //noe 2
//15b916dae08f81c59aaff57a425be1c638ad7cbb
//const apiKey = "19029611d889407a81d175e7ffbebd9f"; //apiKey mario
const apiKey = "19029611d889407a81d175e7ffbebd9f"; //apiKey mario
//e89966377c73ed879fdda9b8ac57ce1a324259db
//const apiKey = "f8b7ed4858454125a22606a37be0b9d0"; //apiKey mario 2
//const apiKey = "40c1982b35bb441a8f82db372ebe7d9c"; //apiKey mario 3
const apiKey = "cdf982d07e1946d585219202dc10cb26"; //apikey jose
const numberOfRecipes = 1;  //anirem d'una en una



class WhatTodayModel {
    constructor() {
        this.randomRecipe = null;   //recepta que es mostra en la card en cada moment
        this.favRecipes = [];      //aqui anem guardant totes les receptes Likeadas
        this.filters = [];       //array per guardar els filtres (de moment filtres de paisos per ferho mes facil, despres ja podem canviar)
        this.recipeInfo = null;
        this.categorys = [];  //array per anar guardant les categories que vagi creant l'usuari

        makeObservable(this, {
            randomRecipe: observable,
            favRecipes: observable,
            filters: observable,
            recipeInfo: observable,
            categorys: observable,
            addFavRecipe: action,
            loadRandomRecipe: action,
            addFilter: action,
            addCategory: action,
            removeFilter: action,
            setRandomRecipe: action,
            setRecipeInfo: action,
        })
    }

    addFavRecipe(idParam, imageParam) {
        this.favRecipes.push({
            id: idParam,
            img: imageParam
        });
    }

    addFilter(filter) {
        this.filters.push(filter);
    }

    addCategory(category) {
        this.categorys.push(category);
    }

    removeFilter(filter) {
        let index = this.filters.indexOf(filter);
        this.filters.splice(index, 1);
    }

    setRandomRecipe(recipe) {
        this.randomRecipe = recipe;
    }

    setRecipeInfo(recipeInfo) {
        this.recipeInfo = recipeInfo;
    }

    async loadRandomRecipe() {
        //de moment utilitzarem l'endpoint "complexSearch" en lloc del random, ja que també permet obtenir receptes random i a més podem guardar mes informacio que en la del random
        //hem de saber si tenim o no filtres activats
        if (this.filters.length === 0) {
            const response = await fetch(`${URL_BASE}/complexSearch?apiKey=${apiKey}&number=${numberOfRecipes}&sort=random&addRecipeNutrition=true`);
            const json = await response.json();
            this.setRandomRecipe(json.results);
        } else {
            const response = await fetch(`${URL_BASE}/complexSearch?apiKey=${apiKey}&number=${numberOfRecipes}&sort=random&addRecipeNutrition=true&cuisine=${this.filters}`);
            const json = await response.json();
            this.setRandomRecipe(json.results);
        }
    }
}

export const getRecipeInfo = async (id, setRecipeInfo) => {
    const response = await fetch(`${URL_BASE}/${id}/information?apiKey=${apiKey}&includeNutrition=true`);
    const recipeInfo = await response.json();
    /* console.log(`${URL_BASE}/${id}/information?apiKey=${apiKey}&includeNutrition=true`);
    console.log(recipeInfo); */
    setRecipeInfo(recipeInfo);
}

const model = new WhatTodayModel();

export const ModelContext = createContext();

export const ModelProvider = ({ children }) => (
    <ModelContext.Provider value={model}>
        {children}
    </ModelContext.Provider>
);

