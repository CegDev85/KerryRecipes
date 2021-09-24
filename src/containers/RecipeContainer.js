import React from 'react'
import { useState } from 'react'
import ALllergenSearch from '../components/AllergenSearch'
import RecipeSelect from '../components/RecipeSelect'
import RecipeDetail from '../components/RecipeDetail'
import DirtySearch from '../components/DirtySearch'

const RecipeContainer = () => {

    const [dirtyIngreds, setDirtyIngreds] = useState(["red chilli powder","lemon flv","paprika"])
    const [allergens, setAllergens] = useState(["milk powder","mustard","egg powder"])
    const [selectedRecipe, setSelectedRecipe] = useState(null) 
    const [recipes, setRecipes] = useState([
        {
          name: "sticky bbq rub",
          jobNumber:20045619,
          size: 200.00,
          machine: 6,
          ingredients:
              [   
                  {name:"salt",kg:100.00},
                  {name:"onion powder",kg:56.93},
                  {name:"mustard",kg:28.00},
                  {name:"sugar",kg:245.74},
                 
              ]
          
      },
      {
          name:"lemon salmon rub",
          jobNumber:20056718,
          size:1000.00,
          machine:14,
          ingredients:
              [
                {name:"salt",kg:100.00},
                  {name:"garlic powder",kg:79.10},
                  {name:"milk powder",kg:28.00},
                  {name:"egg powder",kg:245.74},
                  {name:"lemon flv",kg:29.00}
              ]
          
            },
      {
          name:"spicy morrocan seas",
          jobNumber:20048913,
          size:198.00,
          machine:6,
          ingredients:
              [
                {name:"salt",kg:100.00},
                {name:"onion powder",kg:56.93},
                {name:"mustard",kg:28.00},
                {name:"sugar",kg:245.74},
                {name:"chilli powder",kg:150.03},
                {name:"paprika",kg:99.00}
              ]
          
            
      }])

       const onRecipeSelect = (recipe) => {
           setSelectedRecipe(recipe)
       }

     

    





    return (
        <div className="recipe-container">
            <RecipeSelect recipes={recipes} onRecipeSelect={onRecipeSelect} />
            {selectedRecipe ? <RecipeDetail recipe={selectedRecipe}/> : null }
            <br></br>
            <ALllergenSearch setSelectedRecipe={setSelectedRecipe} selectedRecipe={selectedRecipe} recipes={recipes} allergens={allergens} />
            <DirtySearch dirtyIngreds={dirtyIngreds} recipes={recipes} />
        </div>
    )
}

export default RecipeContainer
