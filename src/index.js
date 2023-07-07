import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Search from './components/Search'
import RandomRecipe from './components/RandomRecipe';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";



ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>, 
  document.getElementById('root')
);
// function Home() {
//   return (
//     <div>
//       <h1>Home!</h1>
//     </div>
//   );
// }


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
  {/* <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/home" element={<Home />} />
    <Route path="/randomrecipe" element={<RandomRecipe />} />
    <Route path="/search" element={<Search />} />
   */}
  // <App />
  {/* </Routes>
  </BrowserRouter> */}
  // </React.StrictMode>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
