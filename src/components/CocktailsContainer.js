import React from 'react'
import Cocktail from './Cocktail'
import { Grid } from 'semantic-ui-react'

const CocktailsContainer = (props) => {
  console.log(props);
  return (
    <div className="cocktails-container">
      <Grid>
        <Grid.Row>
          <Grid.Column floated='left' width={5}>
            <ul>
              {props.cocktails.map(cocktail => {
                return <li><a>{cocktail.name}</a></li>
              })}
            </ul>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column floated='right' width={5}>
            <div>
              Lorum ipsum text
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default CocktailsContainer
