
import CardFilling from "../CardFilling";
import { useState , useEffect} from "react";
import { BsBag } from "react-icons/bs";

const OrderScreen = () => {
  const [fillings, setFillings] = useState([])
  const [storedFillings, setStoredFillings] = useState(JSON.parse(localStorage.getItem("fillings")))
  const [bag, setBag] = useState({})
  const [crepesInBag, setCrepesInBag] = useState([])
  // const [bag, setBag] = useState(JSON.parse(localStorage.getItem("bag"))?JSON.parse(localStorage.getItem("bag")):{})

useEffect(() =>{
    const fetchFillings = async () => {
        const data = await (await fetch('/api/public/getallfillings')).json();
          setFillings(data);
      };
    fetchFillings();
    let getBagFromLocalSt = JSON.parse(localStorage.getItem("bag"))
    setBag(getBagFromLocalSt)
    console.log(bag)
},[]) 


//Print filling cards
const printFillings = fillings.map((item, index) => {
    return(
        <CardFilling key={index} filling={item} storedFillings={storedFillings} setStoredFillings={setStoredFillings}/>
    )
})

//Bag
function Bag(crepesFillings){
  this.crepes = [crepesFillings]
}
useEffect(() =>{
  //if bag has something show how many items it has on bag icon
  // let newBag = new Bag(storedFillings)
  localStorage.setItem("bag", JSON.stringify(bag))
},[bag]) 

const addToBag = () => {
  console.log('Crepe added!!!')
  if(bag == null){
    console.log('Condition 1 bag == null')

    let newBag = new Bag(storedFillings)
    setBag(newBag)
    setStoredFillings()
    
    localStorage.removeItem("fillings");
  }
  else if((bag.hasOwnProperty('crepes'))){
    console.log('Condition 2 crepes property exist')
    if(bag.crepes.length == 0){
      console.log(`Condition 2-1 crepes quatity${bag.crepes.length}`)
    }
    else if(bag.crepes.length > 0){
      console.log(`Condition 2-2 crepes quatity${bag.crepes.length}`)
      

      setCrepesInBag(current => [...current, storedFillings])
      console.log(crepesInBag)
      let newBag = new Bag(crepesInBag)
      setBag(newBag)
      console.log(bag)
      setStoredFillings()
      
      localStorage.removeItem("fillings");
    }
    // let newBag = new Bag(storedFillings)
    
    
    // setBag(1)
    // console.log(bag)
    // localStorage.setItem("bag", JSON.stringify(newBag))
  }

}

  return (
    <>
      <BsBag className="orderScreenBag" size={30}/>
      <div className="orderScreenBagText">8</div>
      <div className="orderScreenMain">
        <div className="">
          <h1>French Crepes</h1>
          <h3>Choose up to three fillings:</h3>
        </div>
        
        {printFillings}
        
      </div>
      <div className="orderScreenFixedBottom" onClick={addToBag}>
        <h2>Add to bag</h2>
      </div>
        
    </>
  );
};

export default OrderScreen;