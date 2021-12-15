import React from "react";

class Button extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className='ui container'>
        <button
          onClick={this.props.buttonClicked}
          className='ui button lg'
          style={{ color: this.props.colorData.hex }}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default Button;
