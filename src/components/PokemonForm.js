import React from "react";
import { Form } from "semantic-ui-react";

class PokemonForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      hp: "",
      frontUrl: "",
      backUrl: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onNewCatch(this.state);
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleHpChange = e => {
    this.setState({ hp: e.target.value });
  };

  handleFrontChange = e => {
    this.setState({ frontUrl: e.target.value });
  };

  handleBackChange = e => {
    this.setState({ backUrl: e.target.value });
  };

  render() {
    // console.log(this.state)
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              value={this.state.name}
              onChange={this.handleNameChange}
              fluid
              label="Name"
              placeholder="Name"
              name="name"
            />
            <Form.Input
              value={this.state.hp}
              onChange={this.handleHpChange}
              fluid
              label="hp"
              placeholder="hp"
              name="hp"
            />
            <Form.Input
              value={this.state.frontUrl}
              onChange={this.handleFrontChange}
              fluid
              label="Front Image URL"
              placeholder="url"
              name="frontUrl"
            />
            <Form.Input
              value={this.state.backUrl}
              onChange={this.handleBackChange}
              fluid
              label="Back Image URL"
              placeholder="url"
              name="backUrl"
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default PokemonForm;
