import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState(
      { term: event.target.value },
      this.props.getSearchTerm(event.target.value)
    );
    console.log(this.state.term);
  };

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form'>
          <div className='field'>
            <label>Enter hex value</label>
            <input
              value={this.state.term}
              onChange={this.onInputChange}
              type='text'
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
