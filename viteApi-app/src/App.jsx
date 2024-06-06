import React, { useState } from 'react'
import './App.css'
import FoodRecipe from './Components/FoodRecipe'
import Mapped from './Components/Mapped'
import FoodDetails from './FoodDetails'
import { Route,Routes } from 'react-router-dom'

function App() {
  const[recipe,setRecipe]=useState([])
  const[foodId,setFoodId]=useState('652968')

  return (
    <>
    <Routes>
        <Route
          path="/"
          element={
            <>
              <FoodRecipe recipe={recipe} setRecipe={setRecipe} />
              <Mapped recipe={recipe} setFoodId={setFoodId} />
            </>
          }
        />
        <Route path="/FoodDetails" element={<FoodDetails foodId={foodId} />} />
      </Routes>

    </>
  )
}

export default App
