/* eslint-disable react/prop-types */


import { IoIosTimer } from "react-icons/io";

export default function RecipeCard({ recipeCard}) {
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipeCard;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={recipe_image}
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p>{short_description}</p>
                    <hr />
                    <div>
                        <p>Ingredients: {ingredients.length} </p>
                        {
                            ingredients.map(ingredient => <ol><li>{ingredient}</li></ol>)
                        }
                    </div>
                    <hr />
                    <div>
                        <IoIosTimer /><p>{preparing_time} minuites</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
