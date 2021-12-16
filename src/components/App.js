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
        if (hex.length === 7 && colors.indexOf(hex) === -1) {
          console.log(hex.length);
          colors.push(hex);
          this.setState({ hex, colors });
        }
      });
  };

  getSearchTerm = (term) => {
    this.setState({ btnText: term });
  };

  handleSubmit = (term) => {
    const colors = this.state.colors;
    if (colors.indexOf(term) === -1) {
      colors.push(term);
      this.setState({ colors });
    } else alert("Color already added");
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar
          handleSubmit={this.handleSubmit}
          getSearchTerm={this.getSearchTerm}
        />
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
