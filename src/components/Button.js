import React from "react";
import List from "./List";

class Button extends React.Component {
  state = { hex: "", colors: [] };

  onButtonClick = async () => {
    await fetch("http://www.colr.org/json/color/random", {
      cache: "no-cache",
    })
      .then((res) => res.json())
      .then((data) => {
        let { hex, colors } = this.state;
        hex = `#${data.colors[0].hex}`;
        colors.push(hex);
        if (this.state.hex !== hex) {
          this.setState({ hex, colors });
        }
      });
  };

  render() {
    return (
      <div className='ui container'>
        <button
          onClick={this.onButtonClick}
          className='ui button lg'
          style={{ color: this.state.hex }}
        >
          Click me
        </button>
        <div>
          <List colors={this.state.colors} />
        </div>
      </div>
    );
  }
}

export default Button;
