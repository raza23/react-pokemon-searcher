import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  render() {
    console.log(this.props);
    const hp = this.props.stats.find(stat => stat.name === "hp");
    return (
      <Card>
        <div>
          <div className="image">
            <img src={this.props.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp.value} hp
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
