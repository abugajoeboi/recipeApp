import React, { useEffect, useState } from 'react'

export default function FoodDetails({foodId}) {
  const[display,setDisplay]=useState({})
  const[isloading,setIsLoading]=useState(true)
  const[error,setError]=useState(null);
  const URL=`https://api.spoonacular.com/recipes/${foodId}/information`
  const KEY='6d842652abde458e9ffe2bc91be3e710'

  useEffect(() => {
    async function fetchFood() {
      try {
        const response = await fetch(`${URL}?apiKey=${KEY}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setDisplay(data);
      } catch (error) {
        console.error('Error fetching food details:', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchFood();
  }, [foodId]);

  if(isloading){
    return <div>loading...</div>
  }
  if(error){
    return <div>Error: {error}</div>
  }


  return (
    <div>

      <div>
        <h1>{display.title}</h1>
        <img src={display.image} alt="sorry picture not avaliable🤔" />
      </div>


    </div>
  )
}
