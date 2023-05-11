import React from 'react'
import { useState } from 'react'


function CardFilling() {
  const [pick, setPick] = useState(false)

  function pickFilling(){
    setPick(prevState => !prevState)
    //add/remove filling to the localStorage to currne crepe
  }

  return (
    <div>
        <div onClick={pickFilling} className={`fillingCard rowSpaceBetween ${pick && "ifCardPicked"}` }>
            <div className='fillingText'>
                <h2>Topping name</h2>
                <span>Short discription</span>
            </div>
            <img className='fillingImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTen83PUXUVLHPfIv1KD6iiTpE8RYdKTVyrYg&usqp=CAU" alt='hello'></img> 
        </div>
    </div>
  )
}

export default CardFilling