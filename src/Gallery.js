import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gallery.css';

const images = [
  'https://i0.wp.com/globalgrasshopper.com/wp-content/uploads/2011/01/Most-beautiful-places-to-visit-in-India.jpg',
  'https://xplro.com/wp-content/uploads/2024/04/Xplro-2024-04-19T211258.491.jpg',
  'https://hazrulremo.com/wp-content/uploads/2023/09/Salim-Chishti--1024x577.jpg',
  'https://www.holidify.com/images/cmsuploads/compressed/1030_20190404091854.jpg',
  'https://blog.thomascook.in/wp-content/uploads/2018/04/placestovisitinindiablog.jpg',
  'https://media.timeout.com/images/105242423/750/422/image.jpg',
  'https://cdn.siasat.com/wp-content/uploads/2024/03/SIS-66.png'
];

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const Gallery = () => {
  const [shuffledImages, setShuffledImages] = useState(images);

  useEffect(() => {
    const interval = setInterval(() => {
      setShuffledImages(shuffleArray(images));
    }, 3000); // Shuffle every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container text-center">
        <h1>Popular destination</h1>
      <div className="row">
        {shuffledImages.map((img, index) => (
          <div key={index} className="col-md-4 col-6 p-2 fade-animation">
            <img
              src={img}
              alt={`Image ${index}`}
              className="img-fluid rounded shadow zoom"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
