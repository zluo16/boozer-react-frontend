import React, { Component } from 'react';
import './App.css';

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
          cocktails: cocktails
        })
      })
  }

  render() {
    debugger
    return (
      <div>

      </div>
    );
  }
}

export default App;
