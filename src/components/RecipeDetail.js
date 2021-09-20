
import React from 'react'

const RecipeDetail = ({recipe}) => {

    const recipeObjsValues = Object.entries(recipe.ingredients)

    const ingredientsList = () => {
        const lil = []
        for(let item of recipeObjsValues){
            let first = item[0]
            let second = item[1]
            item = `${first} - ${second.toFixed(2)}.kg  `
            lil.push(item)
        } return lil
    }
    
        

    

    return (
        <div className="recipe-detail">
            <div className="recipe-list">
                <h3>Name: {recipe.name}</h3>
                <h3>Job Number: {recipe.jobNumber}</h3>
                <h3>Size: {recipe.size}</h3>
                <h3>Machne: {recipe.machine}</h3>
                <h3>Ingredients: {ingredientsList()} </h3>
                {/* <h3>Ingredients: {Object.entries(recipe.ingredients)} </h3> */}

            </div>
            
        </div>
    )
}

export default RecipeDetail
