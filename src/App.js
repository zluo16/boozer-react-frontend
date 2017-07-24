import React, { Component } from 'react';
import './App.css';
import CocktailsContainer from './components/CocktailsContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {

  state = {
    cocktails: []
  }

  componentDidMount() {
    const url = 'http://localhost:3000/api/v1/cocktails'

    fetch(url)
      .then(res => res.json())
      .then(cocktails => {
        this.setState({
          cocktails
        })
      })
  }

  render() {
    return (
      <Router>
      <div>
        <Route>
          <Route path="/" render={() =>
            <CocktailsContainer
            cocktails={this.state.cocktails}
            />}/>
          <Route path="/:id" render={}
        </Route>
      </div>
      </Router>
    );
  }
}

export default App;
