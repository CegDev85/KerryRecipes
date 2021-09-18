import React from 'react'
import { RecipeQuickView } from '../components/RecipeQuickView'

const RecipeContainer = ({recipes}) => {





    return (
        <div className="recipe-container">
            <RecipeQuickView recipes={recipes} />
            
        </div>
    )
}

export default RecipeContainer
