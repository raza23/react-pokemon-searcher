import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
// import { Search } from "semantic-ui-react";
// import _ from "lodash";
const pokemon_url = "http://localhost:3000/pokemon";

class PokemonIndex extends React.Component {
  state = {
    pokemon: [],
    term: ""
  };

  handleChange = e => {
    this.setState({ term: e.target.value });
  };

  componentDidMount() {
    fetch(pokemon_url)
      .then(res => res.json())
      .then(data => {
        this.setState({ pokemon: data });
      });
  }

  render() {
    // console.log(this.state.pokemon);
    const searchPokemon = this.state.pokemon.filter(poke =>
      poke.name.includes(this.state.term)
    );
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br></br>
        <input
          value={this.state.term}
          onChange={this.handleChange}
          type="search"
        />
        <br />
        <br />
        <PokemonCollection pokemon={searchPokemon} />
      </div>
    );
  }
}

export default PokemonIndex;
