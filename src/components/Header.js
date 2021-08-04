import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fColor: '#fff',
      colors: ['#fff', '#ee7752', '#e73c7e', '#23a6d5', '#23d5ab'],
    };
  }
  interAction = () => {
    let getrnd = () => Math.floor(Math.random() * this.state.colors.length);
    this.setState({ fColor: this.state.colors[getrnd()] });
  };
  render() {
    return (
      <header
        className="rounded-bottom"
        style={{ color: this.state.fColor }}
        onClick={this.interAction} >
        <h1>Horned Beasts</h1>
      </header>
    );
  }
}
export default Header;
