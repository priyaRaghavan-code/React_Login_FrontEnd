import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import { withRouter } from "react-router-dom";
import { isAuthenticated } from "./store/selector/AuthSelector";
import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkAutoLogin } from "./store/services/AuthService";
require("dotenv").config();

function App(props) {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   checkAutoLogin(dispatch);
  // }, []);
  let routes = (
    <Switch>
      <Route exact path="/" component={SignUp} />
      <Route path="/login" component={Login} />
    </Switch>
  );

  if (props.isAuthenticated) {
    console.log(props.isAuthenticated);
    routes = (
      <Switch>
        <Route path="/home" component={Home} />
        <Redirect to="/home" />
      </Switch>
    );
  }
  return (
    // <BrowserRouter>
    <div>
      <Header />
      <div className="container px-3 mx-auto">
        {routes}
        {/* <Switch>
            <Route  path="/signup" component={SignUp} />
            <Route  path="/login" component={Login} />
            <Route exact path='/' component={Home} />
          </Switch> */}
      </div>
    </div>
    // </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: isAuthenticated(state),
  };
};

export default withRouter(connect(mapStateToProps)(App));
