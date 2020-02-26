import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {HashRouter as Router, Route, Redirect} from "react-router-dom";
import {IStoreState} from "./store/shared";
import {updateUserId} from "./store/global";
import Home from "./pages/Home/index";
import Login from "./pages/Login/index";
import Register from "./pages/Register/index";

const App = () => {
  const global = useSelector((state: IStoreState) => ({
    ...state.global
  }));
  const dispatch = useDispatch();
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/register" component={Register}></Route>
    </Router>
  )
}

export default App;
