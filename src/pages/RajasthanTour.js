import React from "react";
import { motion } from "framer-motion";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./TourPage.css";

const RajasthanTour = () => {
  return (
    <motion.div
      className="tour-page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div className="tour-hero">
        <h1 className="tour-title">Rajasthan Tour Packages</h1>
        <motion.img
          src="https://rajasthanyatra.in/blog/wp-content/uploads/2024/09/Rajasthan-Tour-Packages-from-Bangalore.webp"
          alt="Rajasthan Tour"
          className="tour-image"
        />
      </motion.div>

      <motion.p className="tour-description">
        Experience the grandeur of Rajasthan with its palaces, forts, and deserts. Visit Jaipur, Jodhpur, Udaipur, and Jaisalmer to explore the royal heritage of India.
      </motion.p>

      <div className="itinerary-card-wrapper">
        <Card className="itinerary-card">
          <Card.Body>
            <Card.Title className="section-heading">Tour Itinerary</Card.Title>
            <Container>
              <Row>
                {[
                  { day: 1, title: "Jaipur Arrival", desc: "Explore Amber Fort & City Palace." },
                  { day: 2, title: "Jodhpur", desc: "Visit Mehrangarh Fort & Umaid Bhawan Palace." },
                  { day: 3, title: "Udaipur", desc: "Boat ride at Lake Pichola & City Palace tour." },
                  { day: 4, title: "Jaisalmer", desc: "Camel Safari & Sand Dunes at Sam." },
                  { day: 5, title: "Departure", desc: "Transfer to the airport/train station." }
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

      <div className="booking-button-wrapper">
        <Link to="/booking">
          <Button className="book-now">Book Now</Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default RajasthanTour;
