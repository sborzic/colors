import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form'>
          <div className='field'>
            <label>Enter hex value</label>
            <input
              onChange={this.onInputChange}
              value={this.state.term}
              type='text'
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;