import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from './NavBar';
import RandomRecipe from './RandomRecipe';
import Search from './Search';
import Cuisines from './Cuisines';
import Home from "./Home";


function App() {
  const [page, setPage] = useState("/")
  
  return (
        <div>
            <NavBar onChangePage={setPage} />
            <Switch>
                <Route path="/randomrecipe">
                    <RandomRecipe />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/cuisines">
                    <Cuisines />
                </Route>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route path="*">
                    <h1>404 Not Found</h1>
                </Route>
            </Switch>
        </div>
    );
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
}

export default App;
