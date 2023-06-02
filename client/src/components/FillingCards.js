
import CardFilling from "./CardFilling";
import { useState , useEffect} from "react";

const OrderScreen = () => {
  const [fillings, setFillings] = useState([])
  const [storedFillings, setStoredFillings] = useState(JSON.parse(localStorage.getItem("fillings")))
  const [crepesInCart, setCrepesInCart] = useState([])

useEffect(() =>{
    const fetchFillings = async () => {
        const data = await (await fetch('/api/public/getallfillings')).json();
          setFillings(data);
      };
    fetchFillings();
      if(JSON.parse(localStorage.getItem("crepesInCart"))){
        setCrepesInCart(JSON.parse(localStorage.getItem("crepesInCart")))
      }
},[]) 
useEffect(() =>{//related to addToCart button
    localStorage.setItem("crepesInCart", JSON.stringify(crepesInCart))
    setStoredFillings()
    localStorage.removeItem("fillings");
},[crepesInCart]) 


//Print filling cards
const printFillings = fillings.map((item, index) => {
    return(
        <CardFilling key={index} filling={item} storedFillings={storedFillings} setStoredFillings={setStoredFillings}/>
    )
})

const addToCart = () => {
    if(storedFillings){
        let newArr = [...crepesInCart]
        newArr.push(storedFillings)
        setCrepesInCart(newArr)
    }else{
        console.log('error addToBag')
    }
}
 

  return (
    <div>
      
      {/* <BsBag className="orderScreenBag" size={30}/> */}
      {/* <div className="orderScreenBagText">8</div> */}
      <div className="orderScreenMain">
        <h3>Choose up to three fillings for your crepe, add to cart, repeat:</h3>
        {printFillings}
      </div>
      <div className="orderScreenFixedBottom" onClick={addToCart}>
        <h2>Add to cart</h2>
      </div>
        
    </div>
  );
};

export default OrderScreen;