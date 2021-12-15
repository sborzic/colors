import React from "react";
import Button from "./Button";
import List from "./List";

class App extends React.Component {
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
        if (hex !== "#" && this.state.hex !== hex) {
          this.setState({ hex, colors });
        }
      });
  };

  render() {
    return (
      <div className='ui container'>
        <Button buttonClicked={this.onButtonClick} colorData={this.state} />
        <List colors={this.state.colors} />
      </div>
    );
  }
}

export default App;
