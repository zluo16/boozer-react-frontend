import React, {Component} from 'react'
import {Feed, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class CocktailsList extends Component {
  renderList(){
    console.log(this.props);
    return (this.props.cocktails.map( c => (
      <Feed.Event key={c.id}>
        <Feed.Label>
          <Icon name="cocktail" />
        </Feed.Label>
        <Feed.Content>
          <Link onClick={() => this.props.changeCocktail(c)} to={`/cocktails/${c.id}`}>{c.name}</Link>
        </Feed.Content>
      </Feed.Event>
    )))
  }

  render () {
    return (<Feed>{this.renderList()}</Feed>)
  }
}

export default CocktailsList
