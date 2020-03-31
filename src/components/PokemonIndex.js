import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
// import { Search } from "semantic-ui-react";
// import _ from "lodash";
// const pokemon_url = "http://localhost:3000/pokemon";
const pokemon_url = "http://localhost:8000/pokemon/";

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

  handleCatch = newPokemon => {
    const pokemon = {
      name: newPokemon.name,

      stats: [
        {
          value: newPokemon.hp,
          name: "hp"
        }
      ],
      sprites: {
        front: newPokemon.frontUrl,
        back: newPokemon.backUrl
      }
    };
    // console.log(newPokemon)
    fetch(pokemon_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(pokemon)
    })
      .then(res => res.json())
      .then(newPokemon => {
        this.setState({ pokemon: [...this.state.pokemon, newPokemon] });
      });
  };

  render() {
    console.log(this.state);
    // const searchPokemon = this.state.pokemon.filter(poke =>
    //   poke.name.includes(this.state.term)
    // );
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <br></br>
        <input
          placeholder="Search Your Pokemon"
          value={this.state.term}
          onChange={this.handleChange}
          type="search"
        />
        <br />
        <br />
        <PokemonCollection pokemon={this.state.pokemon} />
        <br></br>
        <PokemonForm onNewCatch={this.handleCatch} />
      </div>
    );
  }
}

export default PokemonIndex;
