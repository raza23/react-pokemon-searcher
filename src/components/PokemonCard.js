import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = {
    cardFlipped: true
  };

  handleClick = () => {
    this.setState({ cardFlipped: !this.state.cardFlipped });
  };

  render() {
    console.log(this.props);
    // const hp = this.props.stats.find(stat => stat.name === "hp");
    const sprite = this.state.cardFlipped
      ? this.props.fronturl
      : this.props.backurl;
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            <img src={sprite} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp} hp
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
