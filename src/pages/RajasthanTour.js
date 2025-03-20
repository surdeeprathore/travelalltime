import React from "react";
import { motion } from "framer-motion";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./TourPage.css";

const commonImage =
  "https://www.holidify.com/images/bgImages/RAJASTHAN.jpg"; // Common image for all cards

const RajasthanTour = () => {
  return (
    <motion.div
      className="tour-page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <motion.div className="tour-hero">
        <h1 className="tour-title">Rajasthan Tour Packages</h1>
        <motion.img
          src="https://prachitourism.com/assets/uploads/di_tour_cover_image/di_tour_cover_image_16.jpg"
          alt="Rajasthan Tour"
          className="tour-image"
        />
      </motion.div>

      <motion.p className="tour-description">
        Experience the grandeur of Rajasthan with its palaces, forts, and deserts. Visit Jaipur, Jodhpur, Udaipur, and Jaisalmer to explore the royal heritage of India.
      </motion.p>

      {/* Three Cards with One Common Image */}
      <Container className="tour-info-cards">
        <Row className="g-4">
          {/* Destination Card */}
          <Col md={4}>
            <Card className="tour-card">
              <Card.Img variant="top" src={commonImage} alt="Rajasthan View" className="tour-card-img" />
              <Card.Body>
                <Card.Title>📍 Destinations Covered</Card.Title>
                <Card.Text>
                  Jaipur, Jodhpur, Udaipur, Jaisalmer – Discover Rajasthan's historic palaces, forts, and vibrant culture.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Hotel Facilities Card */}
          <Col md={4}>
            <Card className="tour-card">
              <Card.Img variant="top" src={commonImage} alt="Rajasthan View" className="tour-card-img" />
              <Card.Body>
                <Card.Title>🏨 Hotel Facilities</Card.Title>
                <ul className="hotel-list">
                  <li>✔️ 4 & 5 Star Hotels</li>
                  <li>✔️ Free Wi-Fi & Breakfast</li>
                  <li>✔️ Swimming Pool & Spa</li>
                  {/* <li>✔️ 24/7 Room Service</li>
                  <li>✔️ Complimentary Airport Pickup</li> */}
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Tour Duration Card */}
          <Col md={4}>
            <Card className="tour-card">
              <Card.Img variant="top" src={commonImage} alt="Rajasthan View" className="tour-card-img" />
              <Card.Body>
                <Card.Title>🗓️ Tour Duration</Card.Title>
                <Card.Text>
                  🏕️ <strong>5 Days & 4 Nights</strong> <br />
                  Explore Rajasthan with guided tours, cultural experiences, and comfortable accommodations.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Pricing Section */}
      <div className="pricing-card-wrapper">
        <Card className="pricing-card">
          <Card.Body>
            <Card.Title className="section-heading">Pricing</Card.Title>
            <Card.Text className="pricing-text">
              <strong>Starting at ₹22,999</strong> per person  
            </Card.Text>
            <Card.Text className="pricing-text">
              Includes hotel, meals, transport, and sightseeing.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      {/* Booking Button */}
      <div className="booking-button-wrapper">
        <Link to="/booking">
          <Button className="book-now">Book Now</Button>
        </Link>
      </div>

    </motion.div>
  );
};

export default RajasthanTour;
