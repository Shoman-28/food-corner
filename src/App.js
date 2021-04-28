import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AdminHome from "./components/Admin/AdminHome/AdminHome";
import Deals from "./components/Deals/Deals";
import Orders from "./components/Order/Orders";

import Products from "./components/Products/Products";
import Header from "./components/Header/Header";
import CheckOut from "./components/CheckOut/CheckOut";

import { createContext, useState } from "react";
import Loging from "./components/Loging/Loging";
import PrivateRoute from "./components/PrivateRoute";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const userContext = createContext();

function App() {
  const [user, setUser] = useState({});

  return (
      <userContext.Provider value={{ user, setUser }}>
          <Router>
              <Switch>
                  <Route exact path="/">
                      <Header></Header>
                      <Products></Products>
                  </Route>
                  <Route path="/home">
                      <Header></Header>
                      <Products></Products>
                  </Route>
                  <PrivateRoute path="/orders">
                      <Header></Header>
                      <Orders></Orders>
                  </PrivateRoute>
                  <PrivateRoute path="/admin">
                      <AdminHome></AdminHome>
                  </PrivateRoute>
                  <Route path="/deals">
                      <Header></Header>
                      <Deals></Deals>
                  </Route>
                  <PrivateRoute path="/checkOut/:id">
                      <Header></Header>
                      <CheckOut></CheckOut>
                  </PrivateRoute>
                  <Route path="/loging">
                      <Header></Header>
                      <Loging></Loging>
                  </Route>
              </Switch>
          </Router>
      </userContext.Provider>
  );
}

export default App;
