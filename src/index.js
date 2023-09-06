import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import { Provider } from 'react-redux';
import {UserStore} from "./Store/UserStore"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // wrap the whole components with provider to access all 
  //the states from all other components
  <Provider store={UserStore}>
    <App />
  </Provider>
);

