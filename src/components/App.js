import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from './src/NavBar';
import RandomRecipe from './RandomRecipe';
import Search from './src/Search';
import Cuisines from '../Cuisines';


function App() {
  const [page, setPage] = useState("/")
  
  return (
        <div>
            <NavBar onChangePage={setPage} />
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/randomrecipe">
                    <RandomRecipe />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/Cuisines">
                    <Cuisines />
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
