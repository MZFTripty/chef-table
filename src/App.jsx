import './App.css'
import Banner from './components/Banner'
import Navber from './components/Navber'
import OurRecipe from './components/OurRecipe'
import RecipeCard from './components/RecipeCard'
import RecipeCards from './components/RecipeCards'

function App() {


  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <Navber></Navber>
        <Banner></Banner>
        <OurRecipe></OurRecipe>
        <RecipeCards></RecipeCards>
        <RecipeCard></RecipeCard>
      </div>
    </>
  )
}

export default App
