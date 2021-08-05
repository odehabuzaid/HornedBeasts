import React from 'react';

class Footer extends React.Component {
  constructor( props ) {

    super( props );
    this.state = {
      fColor: '#fff',
      colors: ['#fff', '#ee7752', '#e73c7e', '#23a6d5', '#23d5ab'],
    };

  }

   interAction = () => {
     let getrnd = () => Math.floor( Math.random() * this.state.colors.length );
     this.setState( { fColor: this.state.colors[getrnd()] } );
   };

   render() {

     return (
       <footer data-aos="fade-up" data-aos-offset='250' className="rounded-top" style={{color:this.state.fColor}} onClick={this.interAction}>
         <h1>&copy; Odehabuzaid</h1>
       </footer>
     );
   }
}

export default Footer;
