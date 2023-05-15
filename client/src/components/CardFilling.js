import React from 'react'
import { useState,useEffect } from 'react'


function CardFilling(props) {
  const [pick, setPick] = useState(false)
 
  let fillingsLimit = 3
  

  useEffect(() =>{
    function checkIfCardPicked(){
      if(props.storedFillings == null){
      }
      else if(props.storedFillings.includes(props.filling.title)){
        console.log(`highlight ${props.filling.title}`)
        setPick(true)
      }}
    checkIfCardPicked()
    console.log('useEffect')
  },[props.filling.title, props.storedFillings]) 


  function pickFilling(){
    if(props.storedFillings == null){
      localStorage.setItem("fillings", props.filling.title)
      setPick(true)
      props.setStoredFillings(props.filling.title)
    }
    else if(props.storedFillings.split(' ').length < fillingsLimit && !props.storedFillings.includes(props.filling.title)){
      console.log(`fillings number ${props.storedFillings.split(' ').length}`)
      let temFillings = props.storedFillings + " " + props.filling.title
      localStorage.setItem("fillings", temFillings)
      setPick(true)
      props.setStoredFillings(temFillings)
    }else if(props.storedFillings.includes(props.filling.title)){
      let temFillings = props.storedFillings
      temFillings = temFillings.replace(props.filling.title, '').trim()
      localStorage.setItem("fillings", temFillings)
      setPick(false)
      props.setStoredFillings(temFillings)
    }
    else if(props.storedFillings.split(' ').length >= fillingsLimit && !props.storedFillings.includes(props.filling.title)){
      
    }
  }

  return (
    <div>
        <div onClick={pickFilling} className={`fillingCard rowSpaceBetween ${pick && "ifCardPicked"}` }>
            <div className='fillingText'>
                <h2>{props.filling.title}</h2>
                <span>Short discription</span>
            </div>
            <img className='fillingImg' src={props.filling.imglink} alt='img'></img> 
        </div>
    </div>
  )
}

export default CardFilling