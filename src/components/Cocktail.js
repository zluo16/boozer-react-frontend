import React, {Component} from 'react'
import {Card} from 'semantic-ui-react'

const Cocktail = (props) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.cocktail.name}</Card.Header>
        <Card.Header> Description</Card.Header>
        <Card.Description>
          {props.cocktail.description}
        </Card.Description>
        <Card.Header> Instructions</Card.Header>
        <Card.Description>
          {props.cocktail.instructions}
        </Card.Description>
        <Card.Header> Proportions</Card.Header>
        <Card.Description>
          {props.cocktail.proportions}
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default Cocktail
