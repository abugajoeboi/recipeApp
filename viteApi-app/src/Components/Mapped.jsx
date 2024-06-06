import React from 'react'
import style from '../Foodrecipecss/Mapped.module.css'
import Foodlist from './Foodlist'

export default function Mapped({recipe,setFoodId}) {
  return (
    <div className={style.container}>
          {recipe.map((item)=>(


            <Foodlist
            key={item.id}
            item={item}
            setFoodId={setFoodId}
            />

            



))}


    </div>
  )
}
