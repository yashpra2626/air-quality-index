import React, { useState, useCallback, useEffect, useContext } from "react";
import "./App.css";
import backimg from "./assets/redleaf.jpg";
import HomePage from "./pages/HomePage";
import Articles from "./pages/Articles";
import OurTeam from "./pages/OurTeam";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import 'antd/dist/antd.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import NavBar from "./components/NavBar";
import PageFooter from "./components/PageFooter";

import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {

  let routes;

  routes = (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/articles" exact>
        <Articles />
      </Route>
      <Route path="/ourteam" exact>
        <OurTeam />
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  return (
    
    <Layout className="mainLayout">
      <Router>
      <Header>
        <NavBar />
      </Header>
      <Content>
        {routes}
      </Content>
      <Footer>
        <PageFooter />  
      </Footer>      
      </Router>
    </Layout>
  );
}

export default App;



