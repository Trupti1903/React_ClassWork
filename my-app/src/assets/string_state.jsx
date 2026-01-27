import React, { Component } from "react";

class StringState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      age: "",
    };
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleAgeChange = (e) => {
    this.setState({ age: e.target.value });
  };

  render() {
    return (
      <div>
        <h2>String State Example</h2>

        <input
          type="text"
          placeholder="Enter name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <br /><br />

        <input
          type="email"
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <br /><br />

        <input
          type="number"
          placeholder="Enter age"
          value={this.state.age}
          onChange={this.handleAgeChange}
        />
        <br /><br />

        <p>Name: {this.state.name}</p>
        <p>Email: {this.state.email}</p>
        <p>Age: {this.state.age}</p>
      </div>
    );
  }
}

export default StringState;
