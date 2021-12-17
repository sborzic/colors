import React from "react";
import Button from "./Button";
import List from "./List";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { hex: "Click for random color", colors: [] };

  onButtonClick = async () => {
    await fetch("/json/color/random", {
      cache: "no-cache",
    })
      .then((res) => res.json())
      .then((data) => {
        let { hex, colors } = this.state;
        hex = `#${data.colors[0].hex}`;
        if (hex.length === 7 && colors.indexOf(hex) === -1) {
          //added this condition because the server sometimes returns only '#'
          colors.push(hex);
          this.setState({ hex, colors });
        } else alert("Ooops something went wrong, please click again");
      })
      .catch((error) => alert(error));
  };

  getSearchTerm = (term) => {
    this.setState({ hex: term });
  };

  handleSubmit = (term) => {
    const colors = this.state.colors;
    if (colors.indexOf(term) === -1) {
      colors.push(term);
      this.setState({ colors });
    } else alert("Color already added");
  };

  handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = this.state.colors;
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    this.setState({ colors: items });
  };

  render() {
    return (
      <div className='ui container'>
        <div className='ui container'>
          <SearchBar
            handleSubmit={this.handleSubmit}
            getSearchTerm={this.getSearchTerm}
          />
          <Button
            buttonClicked={this.onButtonClick}
            colorData={this.state}
            btnText={this.state.hex}
          />
        </div>
        <List
          handleDragEnd={this.handleDragEnd}
          colors={this.state.colors}
          className='ui segment'
          currentColor={this.state.hex}
        />
      </div>
    );
  }
}

export default App;
