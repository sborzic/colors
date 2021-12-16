import React from "react";

class Button extends React.Component {
  render() {
    return (
      <div className='ui container'>
        <button
          onClick={this.props.buttonClicked}
          className='ui button'
          style={{ color: this.props.colorData.hex }}
        >
          {this.props.btnText}
        </button>
      </div>
    );
  }
}

export default Button;
