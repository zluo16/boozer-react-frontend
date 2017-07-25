import React, { Component } from 'react';
import './App.css';
import CocktailsContainer from './components/CocktailsContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Cocktail from './components/Cocktail'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/cocktails" component={ CocktailsContainer } />
          <Route path='/cocktails/:id' component={ Cocktail } />
        </div>
      </Router>
    );
  }
}

export default App;
