import React from 'react'

const RecipeDetail = ({chosenRecipe}) => {





    return (
        <div className="recipe-detail">
         
                <p>Name: {chosenRecipe.name}</p>
                <p>Machine: {chosenRecipe.machine}</p>
                
            
            
        </div>
    )
}

export default RecipeDetail
