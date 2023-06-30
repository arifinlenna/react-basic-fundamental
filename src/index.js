import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import FormInput from './components/FormInput';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App name="arifin" age="23"/> */}
    <FormInput/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
