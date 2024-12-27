/* eslint-disable react/jsx-key */

import { useEffect, useState } from "react"
import RecipeCard from "./RecipeCard"


export default function RecipeCards() {
    const [reciprCards, setRecipeCards] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async()=>{
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
                const data = await response.json()
                console.log(data)
            }
            catch{
                console.log("something wrong")
            }
            finally{
                setLoading(false)
            }
        }
        fetchData()
    }, [])
    
    return (
        <div>
            <h1>{reciprCards.length}</h1>
            {
                loading? <div>loading</div> : reciprCards.map(recipeCard => <RecipeCard recipeCard={recipeCard}></RecipeCard>)
            }
        </div>
    )
}
