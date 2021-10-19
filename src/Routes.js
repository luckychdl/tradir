import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import styled from "styled-components";
import SideBar from "./Components/SideBar";
import Basket from "./Pages/Basket";
import BeerList from "./Pages/BeerList";
import Home from "./Pages/Home";
// import ReactGA from "react-ga";

const Center = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: row;
`
const Routes = () => {

  return (
    <Router>
      <Center>
      <SideBar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/beerList" component={BeerList} />
          <Route path="/basket" component={Basket} />
          <Redirect path="/" to="/home" />
        </Switch>
        </Center>
        
    </Router>
  );
};

export default Routes;
