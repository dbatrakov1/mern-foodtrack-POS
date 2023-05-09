import { useEffect } from "react";

import "./LoginScreen.css";

const OrderScreen = ({ history }) => {
  
  

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);

  

  return (
    <>
        <h1>OrderScreen</h1>
    </>
  );
};

export default OrderScreen;