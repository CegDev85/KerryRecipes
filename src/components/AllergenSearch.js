import React from 'react'
import { useState,useEffect } from 'react'

const AllergenSearch = ({recipes, allergens, selectedRecipe, setSelectedRecipe}) => {

    const [foundAllergens, setFoundAllergens] = useState("")

    useEffect(() => {
        // handleClick()
     },[foundAllergens])
    

     const recipeNamesFullList = () => {
       const allergensFound = []
        for(let recipe of recipes){
            console.log(recipe)
            for(let allergen of allergens){
                const items = Object.values(allergens)
                console.log(items)
                for(let ingredient of recipe.ingredients){
                    const ingreds = Object.values(ingredient)
                    console.log(ingredient)
                    if(ingreds.includes(allergen)){
                        allergensFound.push(recipe.name)}

                }
            }
        }
        let uniqueAllergens = [...new Set(allergensFound)]
        console.log(uniqueAllergens)
        return uniqueAllergens.toString()
    }

   
    const handleClick = () => {
        let funct = recipeNamesFullList()
    setFoundAllergens(funct)
    }



    return (
        <div className="allergen-search">
            <hr></hr>
            <h2>Search jobs for Allergens</h2>
            {/* <br></br> */}
           {/* {recipeNames()} */}
            <button type="submit" onClick={handleClick} >Click to run seach</button>
            <br></br>
            <h3>{foundAllergens}</h3>


            
        </div>
    )
}

export default AllergenSearch
