import React from "react";
import { motion } from "framer-motion";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./TourPage.css";

const LadakhTour = () => {
  return (
    <motion.div
      className="tour-page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <motion.div className="tour-hero">
        <h1 className="tour-title">Ladakh Tour Packages</h1>
        <motion.img
 
          src="https://www.worldsdreamtravels.com/assets/images/package-images/1647861167_ladakh1jpg.jpg"
 
          // src="https://www.hptourtravel.com/wp-content/uploads/2023/06/Leh_Ladakh_Header_Image-1.webp"
 
          alt="Ladakh Tour"
          className="tour-image"
        />
      </motion.div>

      {/* Tour Description */}
      <motion.p className="tour-description">
        Ride through the breathtaking landscapes of Ladakh, visit **Pangong Lake, Nubra Valley, and the famous monasteries**.  
        Experience high-altitude beauty and rich Tibetan culture on this adventurous trip!
      </motion.p>

      {/* Itinerary Section */}
      <div className="itinerary-card-wrapper">
        <Card className="itinerary-card">
          <Card.Body>
            <Card.Title className="section-heading">Tour Itinerary</Card.Title>
            <Container>
              <Row>
                {[
                  { day: 1, title: "Arrival in Leh", desc: "Acclimatization & local sightseeing." },
                  { day: 2, title: "Leh - Nubra Valley", desc: "Drive via Khardung La Pass, visit Diskit Monastery." },
                  { day: 3, title: "Nubra - Pangong Lake", desc: "Enjoy the beautiful Pangong Tso." },
                  { day: 4, title: "Pangong - Leh", desc: "Return to Leh, explore local markets." },
                  { day: 5, title: "Departure", desc: "Fly back home with beautiful memories." }
                ].map((day, index) => (
                  <Col md={6} lg={4} key={index} className="mb-4">
                    <Card className="inner-card">
                      <Card.Body>
                        <Card.Title className="card-title">Day {day.day}: {day.title}</Card.Title>
                        <Card.Text className="card-text">{day.desc}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </div>

      {/* Pricing Section */}
      <div className="pricing-card-wrapper">
        <Card className="pricing-card">
          <Card.Body>
            <Card.Title className="section-heading">Pricing</Card.Title>
            <Card.Text className="pricing-text">
              <strong>Starting at ₹24,999</strong> per person  
            </Card.Text>
            <Card.Text className="pricing-text">
              Includes hotel, meals, transport, permits, and sightseeing.
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

export default LadakhTour;
