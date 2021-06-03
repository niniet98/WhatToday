import { action, computed, makeObservable, observable } from "mobx";
import React, { createContext } from "react";

const URL_BASE = 'https://api.spoonacular.com/';

class WhatTodayModel {
    constructor() {
        this.randomList = null;
        this.favRecipes = [];

        makeObservable(this, {
            favRecipes: observable,
            addFavRecipe: action,
            totalRecipes: computed
        })
    }

    addFavRecipe(id) {
        this.favRecipes.push(id);
    }

    get totalRecipes() {
        let s = 0;
        for (let i = 0; i < this.favRecipes.length; i++) {
            s += this.favRecipes[i];
        }
        return s;
    }

    async loadRandomList() {
        const response = await fetch(`${URL_BASE}/recipes/random/?apiKey=6b7427f391974de5921bcd793e67086e&number=5`);
        const json = await response.json();
        this.randomList(json.recipes);
    }

}

const model = new WhatTodayModel();

export const ModelContext = createContext();

export const ModelProvider = ({ children }) => (
    <ModelContext.Provider value={model}>
        {children}
    </ModelContext.Provider>
);

//xddddd

