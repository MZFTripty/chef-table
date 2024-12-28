/* eslint-disable react/prop-types */


import { IoIosTimer } from "react-icons/io";
import { AiOutlineFire } from "react-icons/ai";

export default function RecipeCard({ recipeCard,handleWantToCook }) {
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipeCard;
    return (
        <div className="">
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img className="w-72 h-52 rounded-lg"
                        src={recipe_image}
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p className="text-start text-sm">{short_description}</p>
                    <hr />
                    <div>
                        <p className="font-semibold">Ingredients: {ingredients.length} </p>
                        {
                            <ol className="list-decimal list-outside ml-5">
                                {ingredients.map((ingredient, index) => (
                                    <li key={index} className="text-start">
                                        {ingredient}
                                    </li>
                                ))}
                            </ol>
                        }
                    </div>
                    <hr />
                    <div className="flex gap-4">
                        <div className="flex items-start justify-start gap-1">
                            <IoIosTimer className="mt-1" /><p className="text-start">{preparing_time} minuites</p>
                        </div>
                        <div className="flex items-start justify-start gap-1">
                            <AiOutlineFire className="mt-1"/><p className="text-start">{calories} calories</p>
                        </div>
                    </div>
                    <div className="card-actions justify-start mt-4">
                        <button onClick={()=> handleWantToCook(recipeCard)} className="border-2 p-2 rounded-full px-4 bg-green-400 font-serif font-bold ">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
