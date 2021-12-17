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
    this.props.handleSubmit(this.state.term);
  };

  render() {
    return (
      <div className='ui compact segment' style={{ marginTop: "10px" }}>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label className='label'>Enter hex value</label>
            <input
              placeholder='Enter value with "#"'
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
