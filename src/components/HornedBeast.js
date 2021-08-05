import React from 'react';
import { Card, Button,Container } from 'react-bootstrap';
import SelectedBeast from './controls/SelectedBeast';
import Aos from 'aos';

class HornedBeast extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      numberOfVotes: 0,
    };
  }
  increaseNoOfVotes = () => {
    this.setState( {
      numberOfVotes: this.state.numberOfVotes + 1,
    } );
  };
  componentDidMount() {
    Aos.init( { duration: 500 } );
  }
  componentDidUpdate() {
    Aos.init( { duration: 500 } );
  }
  openModal = () => {
    this.setState( { showModal: true } );
  };
  handleClose = () => {
    this.setState( { showModal: false } );
  };

  render() {
    const { image_url, title, description, keyword } = this.props;
    return (
      <Container>
        <Card className='shadow rounded ' style={{ minWidth: '20rem' }}>
          <Card.Img onClick={this.openModal} variant='top' src={image_url} style={{ minWidth: '20rem' }} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>{keyword}</Card.Text>
            <Card.Text></Card.Text>
          </Card.Body>
          <Card.Footer className='text-center'>
            <Button variant='outline-info' onClick={this.increaseNoOfVotes}>
              ❤️ {this.state.numberOfVotes}
            </Button>
          </Card.Footer>
        </Card>
        <SelectedBeast
          description={this.props.description}
          title={this.props.title}
          imgSrc={this.props.image_url}
          handleClose={this.handleClose}
          show={this.state.showModal}
        />
      </Container>
    );
  }
}
export default HornedBeast;
