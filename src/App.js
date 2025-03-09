import React, { useRef } from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import './App.css'
import './Bookyour/Bookingform.css'
import BookingForm from './Bookyour/Bookingform'
import { Button } from 'react-bootstrap'
import Carousel from './Carousel/Carousel'
import TestimonialSlider from './Testing/Testing'
import Gallery from './Gallery'
 

function App() {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div  >
      <Navbar />
      <div className='background-image  '>
        <img src="https://www.nationalunlock.com/wp-content/uploads/2023/07/travel-agency.jpg" alt="Travel Agency" />
        <div className='overlay'>
          <h1>Welcome to Traveller</h1>
          <Button onClick={scrollToForm} className="explore-btn">
            Book Now Explore Now
          </Button>
        </div>
      </div>
      <div ref={formRef}> 
        <BookingForm />
      </div>
      <Carousel/>
       <Gallery/>
      <TestimonialSlider/>
      <Footer />
    </div>
  )
}

export default App
