import React from "react";
import ReactDOM from "react-dom";
// import AppRoutes from "./routes/AppRoutes";

import Buscador from './components/Buscador';
import { GlobalStyle } from './styles/Style';

import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
    {/* <AppRoutes /> */}
    <GlobalStyle />
    <Buscador/>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
