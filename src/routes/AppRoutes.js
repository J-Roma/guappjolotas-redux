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
import { ProductoForm } from "../components/productos/ProductoForm";
import EditarProducto from './../components/productos/EditarProducto'
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
        <Route exact path="/crear-producto" component={ProductoForm} />
        <Route exact path="/editar-productos" component={EditarProducto} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default appRoutes;
