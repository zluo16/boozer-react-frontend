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
          <Route  path="/cocktails" component={ CocktailsContainer } />
        </div>
      </Router>
    );
  }
}

export default App;
