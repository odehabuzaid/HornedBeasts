import React from 'react';
import HornedBeast from './HornedBeast';
import jsonData from './assets/data.json';
class Main extends React.Component {

  render() {
    return (
      <main>
        {jsonData.map((beast, index) => (
          <HornedBeast
            key={index}
            imgSrc={beast.image_url}
            title={beast.title}
            description={beast.description}
          />
        ))}
      </main>
    );
  }
}

export default Main;
