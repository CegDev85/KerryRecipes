import React from 'react'



const RecipeSelect = ({recipes, onRecipeSelect}) => {

    const handleChange = (event) => {
        const chosenRecipe = recipes[event.target.value]
        onRecipeSelect(chosenRecipe)
    }

    const recipeOptions = recipes.map((recipe, index) => {
        return <option value={index} key={index}>{recipe.name}</option>
    })


    return (
        <div className="recipe-select">
            <label for="select">Quick View:</label>
            <select name="select" onChange={handleChange}>
                <option>Select a recipe</option>
                {recipeOptions}
            </select>
        
            
        </div>
    )
}

export default RecipeSelect
