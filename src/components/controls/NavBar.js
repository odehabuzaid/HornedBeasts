import React, { Component } from 'react';
import {
  Navbar,
  Form,
  FormControl,Container,Col,Row
} from 'react-bootstrap';
import FilterNav from '../controls/FilterNav';
export default class NavBar extends Component {
  render() {
    const { title,updateFilter, updateHornValue} = this.props;
    return (
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='#'> Gallery   | </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll' >
          <Container fluid>
            <Row>
              <Col>
                <Form className="flex-d" >
                  <FormControl type='search' placeholder='Search' aria-label='Search'
                    onChange={( e ) => { updateFilter( e.target.value ); }} />
                </Form>
              </Col>
              <Col>
                <FilterNav title = {title} updateHornValue={updateHornValue} />
              </Col>
            </Row>


          </Container>

        </Navbar.Collapse>
      </Navbar>
    );
  }
}
