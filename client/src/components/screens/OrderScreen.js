
import CardFilling from "../CardFilling";
import { useState , useEffect} from "react";


const OrderScreen = () => {
  const [fillings, setFillings] = useState([])
  const [storedFillings, setStoredFillings] = useState(localStorage.getItem("fillings"))

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
        <h1>French Crepes</h1>
        <h3>Add three topings:</h3>
        {printFillings}
        
    </>
  );
};

export default OrderScreen;