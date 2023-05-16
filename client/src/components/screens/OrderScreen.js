
import CardFilling from "../CardFilling";
import { useState , useEffect} from "react";


const OrderScreen = () => {
  const [fillings, setFillings] = useState([])
  // const [storedFillings, setStoredFillings] = useState(localStorage.getItem("fillings"))
  const [storedFillings, setStoredFillings] = useState(JSON.parse(localStorage.getItem("fillings")))

useEffect(() =>{
    const fetchFillings = async () => {
        const data = await (await fetch('/api/public/getallfillings')).json();
          setFillings(data);
      };
    fetchFillings();
},[]) 



const printFillings = fillings.map((item, index) => {
    return(
        <CardFilling key={index} filling={item} storedFillings={storedFillings} setStoredFillings={setStoredFillings}/>
    )
})

  

  return (
    <>
      <div className="orderScreenMain">
        <h1>French Crepes</h1>
        <h3>Choose up to three fillings:</h3>
        {printFillings}
      </div>
      <div className="orderScreenFixed">
        <h2>Add to bag</h2>
      </div>
        
    </>
  );
};

export default OrderScreen;