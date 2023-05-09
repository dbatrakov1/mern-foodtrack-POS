import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("authToken") ? (
          <Component {...props} />
        ) : (
          // <Redirect to="/" />
          rest.path === "/list" ? (<Redirect to="/login" />):(<Redirect to="/" />)
        )
      }
    />
  );
};

export default PrivateRoute;
