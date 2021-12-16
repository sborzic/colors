import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState(
      { term: event.target.value },
      this.props.getSearchTerm(event.target.value)
    );
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(typeof this.state.term);
    // this.props.handleSubmit(this.state.term);
  };

  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Enter hex value</label>
            <input
              value={this.state.term}
              onChange={this.onInputChange}
              type='text'
              pattern='#[0-9a-fA-F]{6}'
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
