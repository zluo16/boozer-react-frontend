import React, {Component} from 'react'
import CocktailsList from './CocktailsList'
import { Segment } from 'semantic-ui-react'
import { Route } from 'react-router-dom'

class CocktailsContainer extends Component {

  state = {
    cocktails: [],
    currentCocktail: {}
  }

  componentDidMount() {
    const url = 'http://localhost:3000/api/v1/cocktails'

    fetch(url)
      .then(res => res.json())
      .then(cocktails => {
        const currentCocktail = cocktails[0]
        this.setState({
          cocktails,
          currentCocktail
        })
      })
  }

  changeSelectedCocktail(c) {
    this.setState({ currentCocktail: c})
  }

  render(){
    return(
      <Segment>
        <Route path='/cocktails' render={()=>(
          <CocktailsList cocktails={this.state.cocktails} changeCocktail={this.changeSelectedCocktail.bind(this)}/>
        )}/>
      </Segment>
    )
  }
}

export default CocktailsContainer
