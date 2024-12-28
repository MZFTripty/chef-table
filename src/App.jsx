import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Navber from './components/Navber'
import OurRecipe from './components/OurRecipe'
import RecipeCards from './components/RecipeCards'
import WantToCookItems from './components/WantToCookItems'
import Swal from 'sweetalert2'



function App() {

  const [wantToCookItems, setWantToCookItems] = useState([])
  const [currentlyCooking, setCurrentlyCooking] = useState([])

  const handleWantToCook = (item) => {
    if (wantToCookItems.includes(item)) {
      Swal.fire({
        position: "center",
        title: "Toast",
        showConfirmButton: false,
        timer: 1500
      });
    }
    else {
      const newWantToCookItems = [...wantToCookItems, item]
      setWantToCookItems(newWantToCookItems)
    }
  }

  // const handlePreparing = recipe_id => {
  //   const remainingItems = wantToCookItems.filter(wantToCookItem => wantToCookItem.recipe_id !== recipe_id)
  //   setWantToCookItems(remainingItems)
  // }


  const handlePreparing = (item) => {
    // const newWantToCookItems = [...wantToCookItems, item]
    // setWantToCookItems(newWantToCookItems)
    const remainingItems = wantToCookItems.filter(wantToCookItem => wantToCookItem.recipe_id !== item.recipe_id)
    setWantToCookItems(remainingItems)
    setCurrentlyCooking([...currentlyCooking, item])

  }

  let totalTime = 0;
   totalTime = currentlyCooking.map(item => {
    totalTime = totalTime + item.preparing_time
    return totalTime
    
  })
  const seeTotalTime = totalTime[currentlyCooking.length-1]
  
  

  let totalCalorie = 0
  totalCalorie = currentlyCooking.map(item => {
    totalCalorie = totalCalorie + item.calories
    return totalCalorie
  })
  const seeTotalCalories = totalCalorie[currentlyCooking.length-1]
  



  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <Navber></Navber>
        <Banner></Banner>
        <OurRecipe></OurRecipe>
        <div className='flex gap-4'>
          <RecipeCards handleWantToCook={handleWantToCook}></RecipeCards>
          <WantToCookItems wantToCookItems={wantToCookItems} handlePreparing={handlePreparing} currentlyCooking={currentlyCooking} seeTotalTime={seeTotalTime} seeTotalCalories={seeTotalCalories}></WantToCookItems>

        </div>

      </div>
    </>
  )
}

export default App
