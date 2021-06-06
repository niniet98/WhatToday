import { action, computed, makeObservable, observable, observe } from "mobx";
import React, { createContext } from "react";


const URL_BASE = 'https://api.spoonacular.com/';
const apiKey = "6b7427f391974de5921bcd793e67086e";
const numberOfRecipes = 1;


class WhatTodayModel {
    constructor() {
        this.randomList = null;
        this.favRecipes = [];

        makeObservable(this, {
            randomList: observable,
            favRecipes: observable,
            addFavRecipe: action,
            loadRandomList: action
        })
    }

    addFavRecipe(idParam, titleParam) {
        this.favRecipes.push({
            id: idParam,
            title: titleParam
        });
    }

    async loadRandomList() {
        const response = await fetch(`${URL_BASE}/recipes/random/?apiKey=${apiKey}&number=${numberOfRecipes}`);
        const json = await response.json();
        this.randomList = json.recipes;
    }

}

const model = new WhatTodayModel();

export const ModelContext = createContext();

export const ModelProvider = ({ children }) => (
    <ModelContext.Provider value={model}>
        {children}
    </ModelContext.Provider>
);

