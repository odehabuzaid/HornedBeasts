import React from 'react';
import {
  Container,
  Col,
  Row
} from 'react-bootstrap';
import jsonData from '../assets/data.json';
import HornedBeast from '../HornedBeast';
import NavBar from '../controls/NavBar';
import 'aos/dist/aos.css';

class Main extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      beastsData: [],
      navBarTitle:'Filter'
    };
  }
  componentDidMount = () => this.initData( 'all' );

  initData = ( text ) => {
    if ( text === 'all' ) {
      this.setState( { beastsData: jsonData } );
    } else {
      let filteredArr = jsonData.filter( ( el ) =>
        String( el.keyword ).startsWith( text )
      );
      if ( filteredArr.length !== 0 ) {
        this.setState( { beastsData: filteredArr } );
      }
    }
  };

  updateFilter = ( text ) => {
    if ( text ) {
      this.initData( text.toLowerCase().trim() );
    } else {
      this.setState( { beastsData: jsonData } );
    }
  };

  updateHornValue = ( e ) => {
    e.preventDefault();
    let filterByHorns = jsonData.slice( 0 ).filter( ( beast ) => {
      if ( e.target.value === 'All' ) {
        return beast;
      } else {
        return beast.horns === +e.target.value;
      }
    } );
    this.setState( {
      beastsData: filterByHorns,
      navBarTitle: `Filter ${e.target.value}` } );
  };

  render() {
    return (
      <main onScroll="smooth">

        <Container fluid style={{ flexWrap: 'wrap' }} >
          <NavBar title={this.state.navBarTitle} updateFilter = {this.updateFilter} updateHornValue ={this.updateHornValue}/>
          <Row className='justify-content-center'>
            {this.state.beastsData.map( ( beast, index ) => (
              <Col
                data-aos='slide-up'
                data-aos-offset='250'
                key={index}
                className='m-2' >
                <HornedBeast
                  image_url={beast.image_url}
                  title={beast.title}
                  description={beast.description}
                  keyword={beast.keyword}
                />
              </Col>
            ) )}
          </Row>
        </Container>
      </main>
    );
  }
}
export default Main;
