import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TestimonialSlider.css';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Simanan Hytmaye',
    role: 'Software Engineer',
    image: 'https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000',
    review: 'This platform is amazing! It helped me scale my business to the next level. Highly recommended.',
    rating: 5
  },
  {
    name: 'Johan Smith',
    role: 'Product Manager',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    review: 'Great experience! I was impressed with the quality of service provided. Definitely using again.',
    rating: 4.5
  },
  {
    name: 'Emma Watson',
    role: 'UI/UX Designer',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    review: 'The design and user experience of this platform are simply outstanding. Loved it!',
    rating: 5
  }
];

// Function to render stars based on rating
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  
  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} color="#fbc531" />
      ))}
      {halfStar && <FaStarHalfAlt color="#fbc531" />}
    </>
  );
};

function TestimonialSlider() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      
      <div className="testimonial-container">
      <h1>Our Happy Traveller</h1>  
        <Carousel interval={3000} indicators={false} className="w-100">
        
          {testimonials.map((item, index) => (
        
            <Carousel.Item key={index}>
              <div className="testimonial-card">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-circle shadow-lg"
                  width={100}
                  height={100}
                />
                <h5 className="mt-3 mb-1">{item.name}</h5>
                <small className="text-muted">{item.role}</small>
                <p className="text-center mt-3">{item.review}</p>
                <div className="stars mt-2">
                  {renderStars(item.rating)}
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default TestimonialSlider;