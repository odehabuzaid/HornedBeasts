import React from 'react';

class HornedBeast extends React.Component {
  render() {
    const { title, description, imgSrc } = this.props;
    return (
      <>
        <div className='beast'>
          <h3>{title}</h3>
          <br />
          <div style={{ width: '100%', height: '50%' }}>
            <img src={imgSrc} alt={title} />
          </div>
          <p>{description}</p>
        </div>
      </>
    );
  }
}
export default HornedBeast;
