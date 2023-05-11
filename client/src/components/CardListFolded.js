import React from 'react'
import { useState } from 'react'
import { TiArrowSortedUp } from "react-icons/ti";
import { RiCloseFill } from "react-icons/ri"

function CardListFolded(props) {
    const [fold, setFold] = useState(true)
    const [close, setClose] = useState(false)


    function toggleCard(){
        //this funstion fold and unfold card
        setFold(prevState => !prevState)
        if(close){
            setClose(prevState => !prevState)
        }
    }
    function closeOrderButton(){
        //will show or close pop up window with a massage 'Would you like to close the order?'
        setClose(prevState => !prevState)
    }
    function closeTheOrder(){
        //here suppose to be code which will archive current order and remove it from list
        console.log('Close the oreder')
    }
    function textInACard(){
        //DRY
        return(
            <div className='rowSpaceBetween'>
                    <div className='foldedCardText'>
                        <h1>Denis</h1>
                        <h2>Coffee</h2>
                        <ul className={`${fold ? "hide":"show"}`}>
                            <li>Sugar 2</li>
                            <li>Cream 3</li>
                        </ul>
                    </div>
                    <img className='foldedCardImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTen83PUXUVLHPfIv1KD6iiTpE8RYdKTVyrYg&usqp=CAU" alt="coffee"></img>
            </div>
        )
    }

  return (
    <div className='mainFoldedCard'>
        {fold ?
            <div className='foldedCard' onClick={toggleCard}>
                {textInACard()}
            </div>
        :
            <div className='unfoldedCard columnSpaceBetween ' >
                <div className=' rowSpaceBetween'>
                    <RiCloseFill className='iconButton' size={70} onClick={closeOrderButton}/>
                    <TiArrowSortedUp className='iconButton' size={70}  onClick={toggleCard}/>
                </div>
                {textInACard()}
            </div>
        }
        {close && 
            <div className='closeConfScreen columnSpaceBetween'>
                <div className='closeConfScreenText'>Would you like to close the order?
                </div>
                <div className='rowSpaceBetween'>
                    <button className='iconButton' onClick={closeTheOrder}>Yes</button>
                    <button className='iconButton' onClick={closeOrderButton}>No</button>
                </div>
            </div>
        }
    </div>
  )
}

export default CardListFolded