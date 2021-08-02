import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: '#FC2D48',
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
    this.setState({
      bgColor: colors[getrnd()],
      color: colors[getrnd()],
    });
  };
  render() {
    return (
      <>
        <footer
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: this.state.bgColor,
            height: '60px',
            marginTop: '20px',
            color: this.state.color,
            //  filter: "invert(100%)",
            mixBlendMode: 'difference',
          }}
          onClick={this.boxClick}
        >
          <h1
            style={{ userSelect: 'none', fontSize: '22px' }}
            className='text-center'
          >
            &copy; Odehabuzaid
          </h1>
        </footer>
      </>
    );
  }
}

export default Footer;
