import React from "react";
import { motion } from "framer-motion";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./TourPage.css";

const GoaTour = () => {
  return (
    <motion.div
      className="tour-page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div className="tour-hero">
        <h1 className="tour-title">Goa Tour Packages</h1>
        <motion.img
          src="https://i.pinimg.com/736x/0e/3d/65/0e3d6537e7a8cb33890d95de9d510c65.jpg"
          alt="Goa Tour"
          className="tour-image"
        />
      </motion.div>

      <motion.p className="tour-description">
        Experience the vibrant beaches, nightlife, and Portuguese heritage of Goa. Explore the stunning coastline and indulge in adventure sports.
      </motion.p>

      {/* Itinerary Section */}
      <div className="itinerary-card-wrapper">
        <Card className="itinerary-card">
          <Card.Body>
            <Card.Title className="section-heading">Tour Itinerary</Card.Title>
            <Container>
              <Row>
                {[
                  { day: 1, title: "Arrival in Goa", desc: "Relax at the beach and explore local markets." },
                  { day: 2, title: "North Goa Sightseeing", desc: "Visit Baga Beach, Aguada Fort, and Anjuna Beach." },
                  { day: 3, title: "South Goa Tour", desc: "Explore Colva Beach, Basilica of Bom Jesus, and spice plantations." },
                  { day: 4, title: "Adventure & Water Sports", desc: "Enjoy jet skiing, parasailing, and scuba diving." },
                  { day: 5, title: "Departure", desc: "Transfer to the airport or railway station." }
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
              <strong>Starting at ₹15,999</strong> per person
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

export default GoaTour;
