import React from "react";

class Button extends React.Component {
  state = { hex: "" };

  onButtonClick = async () => {
    await fetch("http://www.colr.org/json/color/random", {
      cache: "no-cache",
    })
      .then((res) => res.json())
      .then((data) => this.setState({ hex: `#${data.colors[0].hex}` }));
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
      </div>
    );
  }
}

export default Button;
