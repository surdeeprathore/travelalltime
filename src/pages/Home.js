import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import BookingForm from "../Bookyour/Bookingform";
import Carousel from "../Carousel/Carousel";
import Gallery from "../Gallery";
import TestimonialSlider from "../Testing/Testing";
import '../pages/Home.css'
<<<<<<< HEAD
import Banner from "../Banner";
 
=======
>>>>>>> b2088b22ac606b449043eb4aa5429ca68ba996cb
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
<<<<<<< HEAD
      <div ref={formRef} style={{backgroundColor:"blue"}}>
        <BookingForm  />
      </div>
      <Carousel />
      <Banner/>
       <Gallery />
       <TestimonialSlider/>
       <div className="footer-banner" style={{ 
        backgroundImage: "url('https://png.pngtree.com/background/20220725/original/pngtree-illustration-travel-landmarks-architecture-morocco-in-marrakech-picture-image_1772376.jpg')" }
        }
       >
    <section className="footer-promo">
      <div className="container text-center">
        <h2 className="promo-title">Your Next Adventure Awaits! ✈️</h2>
        <p className="promo-text">
          <ul>
            <li>At Traveller,we believe that travel is more than just a destination —it's an experience</li>
            <li>Dreaming of breathtaking mountains,beaches,or cityscapes, we've got you covered.</li>
            
          </ul> 
        </p>
      </div>
    </section>

       </div>
=======
      <div ref={formRef}>
        <BookingForm />
      </div>
      <Carousel />
      <Gallery />
      <TestimonialSlider />
>>>>>>> b2088b22ac606b449043eb4aa5429ca68ba996cb
    </div>
  );
};

export default Home;
