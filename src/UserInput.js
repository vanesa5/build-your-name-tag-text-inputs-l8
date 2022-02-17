import React, { Component } from "react";

class UserInput extends Component {
  state = { name: "" };

  //Event Hander
  updateName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    //prevent the page from refreshing when the form is submitted
    event.preventDefault();
    //calling addName
    this.props.addName(this.state.name);
    //reset state property back t empty strings
    this.setState({ name: "" });
  };

  render() {
    return (
      //onSubmit={this.handleSubmit} implements handleSubmit method
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add a new name here..."
          value={this.state.name}
          onChange={this.updateName}
        />
        <input type="submit" value="Create Name Tag" />
      </form>
    );
  }
}

export default UserInput;
