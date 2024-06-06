import React from 'react'
import style from '../Foodrecipecss/Mapped.module.css'
import { Link } from 'react-router-dom'

export default function Foodlist({item, setFoodId}) {
  return (
    
    <div key={item.id} className={style.card}>
   <img src={item.image} alt={item.title} className={style.card_image} />
    <h1 className={style.card_title}>{item.title}</h1>
    
    <button
    onClick={()=>{
        console.log(item.id, item.title)
        setFoodId(item.id)
    }}
     className={style.view_butt}> <Link to ='/FoodDetails'></Link>view recipe</button>

</div>
    
  )
}
