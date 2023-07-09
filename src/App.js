import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './NavBar';
import RandomRecipe from './RandomRecipe';
import Search from './Search';
import Cuisines from './Cuisines';
import Home from "./Home";


function App() {
  const [page, setPage] = useState("/")
  
  return (
        <div>
            <Router>
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
            </Switch>
            </Router>
        </div>
    );
}

export default App;
