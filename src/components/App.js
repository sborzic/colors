import React from "react";
import Button from "./Button";
import List from "./List";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { hex: "", colors: [], btnText: "Click Me" };

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

  getSearchTerm = (term) => {
    console.log(term);
    this.setState({ btnText: term });
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar getSearchTerm={this.getSearchTerm} />
        <Button
          buttonClicked={this.onButtonClick}
          colorData={this.state}
          btnText={this.state.btnText}
        />
        <List colors={this.state.colors} />
      </div>
    );
  }
}

export default App;
