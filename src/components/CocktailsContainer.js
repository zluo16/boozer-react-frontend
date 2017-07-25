import React, {Component} from 'react'
import CocktailsList from './CocktailsList'
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import Cocktail from './Cocktail'

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
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Route  path='/cocktails' render={()=>(
              <CocktailsList cocktails={this.state.cocktails} changeCocktail={this.changeSelectedCocktail.bind(this)}/>
            )}/>
          </Grid.Column>
          <Grid.Column>
            <Route path='/cocktails/:id' render={()=>(
              <Cocktail cocktail={this.state.currentCocktail} />
            )}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default CocktailsContainer
