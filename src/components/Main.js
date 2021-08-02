import React from 'react';
import HornedBeast from './HornedBeast';
import jsonData from './assets/data.json';
import { Container, Col, Row } from 'react-bootstrap';
class Main extends React.Component {
  render() {
    return (
      <main >
        <Container fluid className="justify-content-center">
          <Row >
            {jsonData.map((beast, index) => (
              <Col key={index} className="justify-content-center">
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
