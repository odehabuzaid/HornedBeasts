import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: '#FFFFFF',
      fColor: '#fff',
    };
  }
  boxClick = () => {
    let colors = [];
    let color;
    while (colors.length < 100) {
      do {
        color = Math.floor(Math.random() * 1000000 + 1);
      } while (colors.indexOf(color) >= 0);
      colors.push('#' + ('000000' + color.toString(16)).slice(-6));
    }
    let getrnd = () => Math.floor(Math.random() * (colors.length - 1 - 0) + 0);
    // console.log(colors[getrnd()]);
    this.setState({
      bgColor: colors[getrnd()],
      color: colors[getrnd()],
    });
  };
  render() {
    return (
      <header
        style={{
          backgroundColor: this.state.bgColor,
          color: this.state.color,
        }}
        onClick={this.boxClick}
      >
        <h1>Horned Beasts</h1>
      </header>
    );
  }
}

export default Header;
