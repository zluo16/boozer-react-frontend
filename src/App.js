import React, { Component } from 'react';
import './App.css';
import CocktailsContainer from './components/CocktailsContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Cocktail from './components/Cocktail'

class App extends Component {

  state = {
    cocktails: [],
    currentCocktail: {}
  }

  componentDidMount() {
    const url = 'http://localhost:3000/api/v1/cocktails'

    fetch(url)
      .then(res => res.json())
      .then(cocktails => {
        this.setState({
          cocktails,
          currentCocktail: cocktails[0]
        })
      })
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" render={() =>
            <CocktailsContainer
            cocktails={this.state.cocktails}
            />}/>
            <Route path='/cocktails/:id' render={() => <Cocktail cocktail={this.state.currentCocktail} />} />
        </div>
      </Router>
    );
  }
}

export default App;
