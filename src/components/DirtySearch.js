import React from 'react'
import { useState } from 'react'



const DirtySearch = ({recipes,dirtyIngreds}) => {

    const [foundJobs, setDirtyJobs] = useState("")


    const handleClick = () => {
        let list = recipesWithDirtyIngreds()
        setDirtyJobs(list
            )
    } 

    const recipesWithDirtyIngreds = () => {
        const dirtyList = []
        for(let recipe of recipes){
            for(let dirtyIngred of dirtyIngreds){
                for(let ingredient of recipe.ingredients){
                    const ingred = Object.values(ingredient)
                    if(ingred.includes(dirtyIngred)){
                        dirtyList.push(recipe.name)
                    }
                }
            }
        }return dirtyList.length
    }


    return (
        <div className="dirty-jobs">
             <hr></hr>
            <h2>Search for dirty jobs</h2>
            <button type="submit" onClick={handleClick} >View Dirty Jobs</button>
            <h3>{foundJobs}</h3>

            
        </div>
    )
}

export default DirtySearch
