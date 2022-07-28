import React from 'react';
import ReactDOM from 'react-dom';
import Footer from "./components/Footer";

import "./css/styles.css"
import './css/index.css';
import './css/App.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";


// Renders the App and Footer in JSX Format
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
