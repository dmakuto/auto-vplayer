import React from 'react';

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const text = e.target.value;
    this.props.chooseVideo(text);
  }
  
  render() {
    return (
      <form onClick={this.handleClick}>
        <input type="radio" name="src" value="antelope" /> Antelope
        <input type="radio" name="src" value="snail" /> snail
        <input type="radio" name="src" value="cat" /> cat
        <input type="radio" name="src" value="spider" /> spider
      </form>
    );
  }
}