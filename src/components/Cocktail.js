import React, {Component} from 'react'
import {Card} from 'semantic-ui-react'

class Cocktail extends Component {

  // state = {}

  // componentWillMount(props){
  //   const id = this.props.match.params.id
  //   const url = 'http://localhost:3000/api/v1/cocktails'
  //
  //   fetch(url + `/${id}`)
  //     .then(res => res.json())
  //     .then(cocktail => {
  //       this.setState({
  //         name: cocktail.name,
  //         description: cocktail.description,
  //         instructions: cocktail.instructions,
  //         proportions: cocktail.proportions
  //       })})
  //   }

    mappedProportions(){
      return this.props.cocktail.proportions.map((proportion, i) => {
        return (
          <li key={i}>
            <p>{proportion.amount} {proportion.ingredient_name}</p>
          </li>
        )
      })
    }

  render(){
    console.log("single cocktail")
  return (
    <Card>
      <Card.Content>
        <Card.Header>{this.props.cocktail.name}</Card.Header>
          <br></br>
        <Card.Header> Description</Card.Header>
        <Card.Description>{this.props.cocktail.description}</Card.Description>
          <br></br>
        <Card.Header> Instructions</Card.Header>
        <Card.Description>{this.props.cocktail.instructions}</Card.Description>
          <br></br>
        <Card.Header> Proportions</Card.Header>
        <Card.Description>
          <div>
            <ul>{this.props.cocktail.proportions ? this.mappedProportions() : ''}</ul>
          </div>
        </Card.Description>
      </Card.Content>
    </Card>
    )
  }
}

export default Cocktail
