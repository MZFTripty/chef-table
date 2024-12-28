/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import { useEffect, useState } from "react"
import RecipeCard from "./RecipeCard"


export default function RecipeCards({handleWantToCook}) {
    const [recipeCards, setRecipeCards] = useState([])

    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setRecipeCards(data))
    }, [])
    
    return (
        <div className="grid grid-cols-2 max-w-5xl gap-5 ">
            {/* <h1>{recipeCards.length}</h1> */}
            {
                recipeCards.map(recipeCard => <RecipeCard recipeCard={recipeCard} handleWantToCook={handleWantToCook}></RecipeCard>)
            }
        </div>
    )
}
