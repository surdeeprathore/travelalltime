import React from "react";
import { motion } from "framer-motion";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./TourPage.css";

const KashmirTour = () => {
  return (
    <motion.div
      className="tour-page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <motion.div className="tour-hero">
        <h1 className="tour-title">Kashmir Tour Packages</h1>
        <motion.img
          src="https://cdn1.tripoto.com/media/filter/tst/img/1791424/Image/1627470320_kashmir5.jpg.webp"
          alt="Kashmir Tour"
          className="tour-image"
        />
      </motion.div>

      {/* Description */}
      <motion.p className="tour-description">
        Explore the breathtaking beauty of Kashmir, known as "Paradise on Earth." 
        Visit stunning locations like Gulmarg, Srinagar, and Pahalgam.
      </motion.p>

      {/* Itinerary Section (No Hover Effect) */}
      <div className="itinerary-card-wrapper">
        <Card className="itinerary-card">
          <Card.Body>
            <Card.Title className="section-heading">Tour Itinerary</Card.Title>
            <Container>
              <Row>
                {[
                  { day: 1, title: "Arrival in Srinagar", desc: "Houseboat stay with a scenic Shikara ride." },
                  { day: 2, title: "Gulmarg Excursion", desc: "Enjoy the famous Gondola ride & snow activities." },
                  { day: 3, title: "Pahalgam Visit", desc: "Explore Lidder River & lush valleys." },
                  { day: 4, title: "Srinagar Sightseeing", desc: "Visit Dal Lake, Mughal Gardens, & more." },
                  { day: 5, title: "Departure", desc: "Bid farewell to the paradise of Kashmir." }
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

      {/* Pricing Section (No Hover Effect) */}
      <div className="pricing-card-wrapper">
        <Card className="pricing-card">
          <Card.Body>
            <Card.Title className="section-heading">Pricing</Card.Title>
            <Card.Text className="pricing-text">
              <strong>Starting at ₹18,999</strong> per person  
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

export default KashmirTour;
