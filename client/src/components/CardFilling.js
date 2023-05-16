import React from 'react'
import { useState,useEffect } from 'react'


function CardFilling(props) {
  const [pick, setPick] = useState(false)
  const fillingsLimit = 3
  

  useEffect(() =>{
    function checkIfCardPicked(){
      //if no fillings in localStorage => do nothing
      if(props.storedFillings == null){
      }
      //else if the card's title is found in localStorage => highlight it
      else if(props.storedFillings.includes(props.filling.title)){
        setPick(true)
      }}
    checkIfCardPicked()
  },[props.filling.title, props.storedFillings]) 


  function pickFilling(){
    //if no filling picked yet => first filling will be added
    if(props.storedFillings == null){
      localStorage.setItem("fillings", JSON.stringify([props.filling.title]))
      setPick(true)
      props.setStoredFillings([props.filling.title])
      // console.log('cond 1')
    }
    //else if the fillings limit is not achieved and you try to pick filling that is not picked => new filling will be added
    else if(props.storedFillings.length < fillingsLimit && !props.storedFillings.includes(props.filling.title)){
      let temFillings = props.storedFillings.concat(props.filling.title)
      localStorage.setItem("fillings", JSON.stringify(temFillings))
      setPick(true)
      props.setStoredFillings(temFillings)
      // console.log('cond 2')
    }
    //else if the filling is already picked and you try to click it => this feeling will be unpicked(removed)
    else if(props.storedFillings.includes(props.filling.title)){
      let temFillings = props.storedFillings
      let index = temFillings.indexOf(props.filling.title)
      temFillings.splice(index, 1)
      localStorage.setItem("fillings", JSON.stringify(temFillings))
      setPick(false)
      props.setStoredFillings(temFillings)
      // console.log('cond 3')
    }
    //else if the fillings limit is achieved and you try to pick a filling that is not picked => nothing happens
    else if(props.storedFillings.length >= fillingsLimit && !props.storedFillings.includes(props.filling.title)){
      // console.log('cond 4')
    }
  }

  // function pickFilling(){
  //   //if no filling picked yet => first filling will be added
  //   if(props.storedFillings == null){
  //     localStorage.setItem("fillings", props.filling.title)
  //     setPick(true)
  //     props.setStoredFillings(props.filling.title)
  //     // console.log('cond 1')
  //   }
  //   //else if the fillings limit is not achieved and you try to pick filling that is not picked => new filling will be added
  //   else if(props.storedFillings.trim().split('   ').length < fillingsLimit && !props.storedFillings.includes(props.filling.title)){
  //     let temFillings = props.storedFillings + "   " + props.filling.title
  //     localStorage.setItem("fillings", temFillings)
  //     setPick(true)
  //     props.setStoredFillings(temFillings)
  //     // console.log('cond 2')
  //   }
  //   //else if the filling is already picked and you try to click it => this feeling will be unpicked(removed)
  //   else if(props.storedFillings.includes(props.filling.title)){
  //     let temFillings = props.storedFillings
  //     temFillings = temFillings.replace(props.filling.title, '').trim()
  //     localStorage.setItem("fillings", temFillings)
  //     setPick(false)
  //     props.setStoredFillings(temFillings)
  //     // console.log('cond 3')
  //   }
  //   //else if the fillings limit is achieved and you try to pick a filling that is not picked => nothing happens
  //   else if(props.storedFillings.split(' ').length >= fillingsLimit && !props.storedFillings.includes(props.filling.title)){
  //     // console.log('cond 4')
  //   }
  // }

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