/* eslint-disable react/prop-types */




export default function WantToCookItems({ wantToCookItems, handlePreparing, currentlyCooking, seeTotalTime, seeTotalCalories }) {
    
    return (
        <div className="max-w-3xl mx-auto border-2 rounded-xl p-4">
            <div>
                <h1 className="font-bold text-xl">Want to Cook: {wantToCookItems?.length}</h1>
                <hr />
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            wantToCookItems.map((wantToCookItem, index) => <>
                                <tr className="hover:bg-base-200">
                                    <th>{index + 1}</th>
                                    <td>{wantToCookItem.recipe_name}</td>
                                    <td>{wantToCookItem.preparing_time} minuites</td>
                                    <td>{wantToCookItem.calories} calories</td>
                                    <td><button onClick={() => handlePreparing(wantToCookItem)} className="border-2 p-1 rounded-full px-4 bg-green-400 font-serif font-bold">preparing</button></td>
                                </tr>
                            </>)
                        }


                    </tbody>
                </table>
            </div>



            <div>
                <h1 className="font-bold text-xl">Currently Cooking: {currentlyCooking?.length}</h1>
                <hr />
                <table className="table">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            currentlyCooking.map((cookItem, index) => <>
                                <tr className="hover:bg-base-200">
                                    <th>{index + 1}</th>
                                    <td>{cookItem.recipe_name}</td>
                                    <td>{cookItem.preparing_time} minuites</td>
                                    <td>{cookItem.calories} calories</td>

                                </tr>
                                
                            </>)
                        }
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Total time: {seeTotalTime}</td>
                            <td>Total calories: {seeTotalCalories}</td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    )
}
