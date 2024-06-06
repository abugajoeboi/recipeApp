import React, { useEffect, useState } from 'react'
import style from '../Foodrecipecss/Mapped.module.css'

const ENDPOINT = 'https://api.spoonacular.com/recipes/complexSearch'
const KEY = '6d842652abde458e9ffe2bc91be3e710'

export default function FoodRecipe({recipe,setRecipe}) {
    const[search,setsearch]=useState('meat');

    useEffect(()=> {
       async function foodRecipe(){
            const resp= await fetch(`${ENDPOINT}?query=${search}&apiKey=${KEY}`)
            const data= await resp.json();
            console.log(data.results)
            setRecipe(data.results);

        }
        foodRecipe()
    },[search])
  return (
    <div>
        <input onChange={(e)=> setsearch(e.target.value)} value={search} type="text" className={style.inpute_value} />
    </div>
  )
}
