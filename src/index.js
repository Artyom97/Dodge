import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import {BrowserRouter} from "react-router-dom";

const application = (
      <App />
);

ReactDOM.render(
 <BrowserRouter>
      <React.StrictMode>
          {application}
      </React.StrictMode>
 </BrowserRouter>,
document.getElementById('root')
);