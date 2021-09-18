import React, { useState } from 'react'
import RecipeDetail from './RecipeDetail'


export const RecipeQuickView = ({recipes}) => {

    const [chosenRecipe, setChosenRecipe] = useState("select a recipe")

    const recipeOptions = recipes.map((recipe, index) => {
        return <option value={index} key={index}>{recipe.name}</option>
    })

    const handleSelect = (event) => {
        const chosenRecipe = recipes[event.target.value]
        setChosenRecipe(chosenRecipe)
    }



    return (
        <div className="recipe-view">
            <label for="select">Quick View:</label>
            <select name="select" onChange={handleSelect} >
            <option>Select a recipe</option>
            {recipeOptions}
            </select>
            <RecipeDetail chosenRecipe={chosenRecipe} />
        </div>
    )
}

export default RecipeQuickView
