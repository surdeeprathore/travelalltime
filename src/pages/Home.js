import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import BookingForm from "../Bookyour/Bookingform";
import Carousel from "../Carousel/Carousel";
import Gallery from "../Gallery";
import TestimonialSlider from "../Testing/Testing";
import '../pages/Home.css'
const Home = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="background-image">
        <img
          src="https://www.nationalunlock.com/wp-content/uploads/2023/07/travel-agency.jpg"
          alt="Travel Agency"
        />
        <div className="overlay">
          <h1>Welcome to Traveller</h1>
          <Button onClick={scrollToForm} className="explore-btn">
            Book Now Explore Now
          </Button>
        </div>
      </div>
      <div ref={formRef}>
        <BookingForm />
      </div>
      <Carousel />
      <Gallery />
      <TestimonialSlider />
    </div>
  );
};

export default Home;
