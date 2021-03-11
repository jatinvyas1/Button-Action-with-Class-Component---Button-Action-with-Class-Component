import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state({
      showPara: false,
    });
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ showPara: true });
  }
  render() {
    return (
      <div id="main">
        {this.state.showPara && (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        )}
        <button id="button" onClick={this.handleClick}>
          button
        </button>
      </div>
    );
  }
}

export default App;
