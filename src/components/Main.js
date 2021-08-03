import React from 'react';
import HornedBeast from './HornedBeast';
import jsonData from './assets/data.json';
import { Container, Col, Row } from 'react-bootstrap';
class Main extends React.Component {
  render() {
    return (
      <main>
        <Container
          fluid
          className='justify-content-center d-flex'
          style={{ flexWrap: 'wrap' }}
        >
          <Row style={{ width: '100%' }} className='justify-content-center '>
            {jsonData.map((beast, index) => (
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
