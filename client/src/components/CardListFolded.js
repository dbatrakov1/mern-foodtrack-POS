import React from 'react'
import { useState } from 'react'
function CardListFolded(props) {
    const [fold, setFold] = useState(true)

    function toggleCard(){
        setFold(prevState => !prevState)
    }

  return (
    <>
    {fold ?
    <div className='foldedCard' onClick={toggleCard}>
        <div className='foldedCardText'>
            <h3>Title</h3>
            <p>Lorem ipsum</p>
            <span>$10</span>
            
        </div>
        <img className='foldedCardImg' src="https://rdironworks.com/wp-content/uploads/2017/12/600x600.png" alt="Italian Trulli"></img>

    </div>
    :
    <div className='foldedCard unfoldedCard' onClick={toggleCard}>
        <div className='foldedCardText'>
            <h3>Title</h3>
            <p>Lorem ipsum</p>
            <span>$10</span>
            
        </div>
        <img className='foldedCardImg' src="https://rdironworks.com/wp-content/uploads/2017/12/600x600.png" alt="Italian Trulli"></img>
    </div>}
    
    </>
    
  )
}

export default CardListFolded