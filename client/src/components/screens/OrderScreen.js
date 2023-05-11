import { useEffect } from "react";

import "./LoginScreen.css";
import CardFilling from "../CardFilling";

const OrderScreen = ({ history }) => {
  
  

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);

  

  return (
    <>
        <h1>French Crepes</h1>
        <h3>Add three topings:</h3>
        <CardFilling />
        <CardFilling />
    </>
  );
};

export default OrderScreen;