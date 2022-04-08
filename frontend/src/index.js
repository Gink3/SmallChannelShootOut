import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {  QueryClientProvider } from 'react-query';

import { queryClient } from './reactQuery';


ReactDOM.render((
    <QueryClientProvider client={queryClient}>
          <App />
    </QueryClientProvider>
   
), document.getElementById("root"));


reportWebVitals();
