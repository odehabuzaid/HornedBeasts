import React from 'react';
import HornedBeast from './HornedBeast';
import jsonData from './assets/data.json';
import { Container, Col, Row } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import { Form, FormControl } from 'react-bootstrap';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beastsData: [{}],
    };
  }

  componentDidMount = () => this.initData('all');

  //set Search DataSource
  initData = (text) => {
    if (text === 'all') {
      this.setState({ beastsData: jsonData });
    } else {
      let filteredArr = jsonData.filter((el) =>
        String(el.keyword).startsWith(text)
      );
      if (filteredArr.length !== 0) {
        this.setState({ beastsData: filteredArr });
      }
    }
  };

  //Search DataSource MOD
  updateFilter = (text) => {
    if (text) {
      this.initData(text.toLowerCase().trim());
    } else {
      this.setState({ beastsData: jsonData });
    }
  };

  render() {
    return (
      <main>
        <Container
          fluid
          className='justify-content-center d-flex'
          style={{ flexWrap: 'wrap' }}
        >
          <Row md='auto' style={{ width: '100%' }}>
            <Navbar bg='light' expand='lg'>
              <Navbar.Brand href='#'>Horned Beasts | Gallery</Navbar.Brand>
              <Navbar.Toggle aria-controls='navbarScroll' />
              <Navbar.Collapse id='navbarScroll'>
                <Nav
                  className='mr-auto my-2 my-lg-0'
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link href='#'>
                    {' '}
                    <Form className='d-flex'>
                      <FormControl
                        type='search'
                        placeholder='Search'
                        className='mr-2'
                        aria-label='Search'
                        autoComplete='on'
                        onChange={(e) => {
                          this.updateFilter(e.target.value);
                        }}
                      />
                    </Form>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Row>
          <Row style={{ width: '100%' }} className='justify-content-center '>
            {this.state.beastsData.map((beast, index) => (
              <Col key={index} className='m-2'>
                <HornedBeast
                  image_url={beast.image_url}
                  title={beast.title}
                  description={beast.description}
                  keyword={beast.keyword}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    );
  }
}
export default Main;
