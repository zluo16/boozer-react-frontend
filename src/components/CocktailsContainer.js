import React from 'react'

const CocktailsContainer = (props) => {
  console.log(props);
  return (
    <div>
      <ul>
        {props.cocktails.map(cocktail => {
          return <li><a>{cocktail.name}</a></li>
        })}
      </ul>
    </div>
  )
}

export default CocktailsContainer
