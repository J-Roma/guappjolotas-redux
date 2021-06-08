import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Carrito from "../components/Carrito";
import Login from "../components/login";
import Registro from "../components/Registro";

import Main from "../pages/Main";

import VerCompra from "../pages/VerCompra";

const appRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/carrito" component={Carrito} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/vercompra" component={VerCompra} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default appRoutes;
