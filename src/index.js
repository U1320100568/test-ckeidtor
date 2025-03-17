import React from "react";
// import ReactDOM from 'react-dom/client'; // react 18
import ReactDOM from "react-dom"; // react 17
import "./index.css";
import App from "./App";

// react 18
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// react 17
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
