import React, { Component } from 'react';
import './App.css';
import CocktailsContainer from './components/CocktailsContainer'

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
      <div>
        <CocktailsContainer
          cocktails={this.state.cocktails}
        />
      </div>
    );
  }
}

export default App;
