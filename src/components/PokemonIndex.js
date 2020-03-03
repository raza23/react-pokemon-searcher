import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search } from "semantic-ui-react";
import _ from "lodash";
const pokemon_url = "http://localhost:3000/pokemon";

class PokemonIndex extends React.Component {
  state = {
    pokemon: []
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
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search
          onSearchChange={_.debounce(() => console.log("🤔"), 500)}
          showNoResults={false}
        />
        <br />
        <PokemonCollection pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default PokemonIndex;
