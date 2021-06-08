import { action, computed, makeObservable, observable, observe } from "mobx";
import React, { createContext } from "react";


const URL_BASE = 'https://api.spoonacular.com';
const apiKey = "6b7427f391974de5921bcd793e67086e";
const numberOfRecipes = 1;  //anirem d'una en una


class WhatTodayModel {
    constructor() {
        this.randomRecipe = null;   //recepta que es mostra en la card en cada moment
        this.favRecipes = [];      //aqui anem guardant totes les receptes Likeadas
        this.filters = [];       //array per guardar els filtres (de moment filtres de paisos per ferho mes facil, despres ja podem canviar)

        makeObservable(this, {
            randomRecipe: observable,
            favRecipes: observable,
            filters: observable,
            addFavRecipe: action,
            loadRandomRecipe: action,
            addFilter: action,
            removeFilter: action
        })
    }

    addFavRecipe(idParam, titleParam) {
        this.favRecipes.push({
            id: idParam,
            title: titleParam
        });
    }

    addFilter(filter) {
        this.filters.push(filter);
        console.log(this.filters);
    }

    removeFilter(filter) {
        let index = this.filters.indexOf(filter);
        this.filters.splice(index, 1);
        console.log(this.filters);
    }

    async loadRandomRecipe() {
        //de moment utilitzarem l'endpoint "complexSearch" en lloc del random, ja que també permet obtenir receptes random i a més podem guardar mes informacio que en la del random
        //hem de saber si tenim o no filtres activats
        if (this.filters.length === 0) {
            const response = await fetch(`${URL_BASE}/recipes/complexSearch?apiKey=${apiKey}&number=${numberOfRecipes}&sort=random&addRecipeNutrition=true`);
            const json = await response.json();
            this.randomRecipe = json.results;
        } else {
            const response = await fetch(`${URL_BASE}/recipes/complexSearch?apiKey=${apiKey}&number=${numberOfRecipes}&sort=random&addRecipeNutrition=true&cuisine=${this.filters}`);
            const json = await response.json();
            this.randomRecipe = json.results;
        }

    }

}

const model = new WhatTodayModel();

export const ModelContext = createContext();

export const ModelProvider = ({ children }) => (
    <ModelContext.Provider value={model}>
        {children}
    </ModelContext.Provider>
);

