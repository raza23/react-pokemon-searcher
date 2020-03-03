import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

class PokemonCollection extends React.Component {
  render() {
    // console.log(this.props);
    const pokemonCard = this.props.pokemon.map(pokemon => {
      return <PokemonCard key={pokemon.id} {...pokemon} />;
    });
    return (
      <Card.Group itemsPerRow={6}>
        <h1>
          <center>Hello From Pokemon Collection</center>
        </h1>
        {pokemonCard}
      </Card.Group>
    );
  }
}

export default PokemonCollection;
