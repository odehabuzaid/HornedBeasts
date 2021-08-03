import React from 'react';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfVotes: 0,
    };
  }
  increaseNoOfVotes = () => {
    this.setState({
      numberOfVotes: this.state.numberOfVotes + 1,
    });
  };
  render() {
    const { image_url, title, description, keyword } = this.props;
    return (
      <Card className='shadow rounded' style={{ minWidth: '20rem' }}>
        <Card.Img
          onClick={this.increaseNoOfVotes}
          variant='top'
          src={image_url}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{keyword}</Card.Text>
          <Card.Text></Card.Text>
        </Card.Body>
        <Card.Footer className='text-center'>
          <small> ❤️ {this.state.numberOfVotes}</small>
        </Card.Footer>
      </Card>
    );
  }
}
export default HornedBeast;
