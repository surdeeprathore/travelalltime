import React from "react";
import { motion } from "framer-motion";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./TourPage.css";

const KeralaTour = () => {
  return (
    <motion.div
      className="tour-page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div className="tour-hero">
        <h1 className="tour-title">Kerala Tour Packages</h1>
        <motion.img
          src="https://hikestravel.com/wp-content/uploads/2024/01/kerala-tour-packages.jpg"
          alt="Kerala Tour"
          className="tour-image"
        />
      </motion.div>

      <motion.p className="tour-description">
        Experience the lush green landscapes of Kerala, visit Munnar, Alleppey, Kovalam, and more.
      </motion.p>

      <div className="itinerary-card-wrapper">
        <Card className="itinerary-card">
          <Card.Body>
            <Card.Title className="section-heading">Tour Itinerary</Card.Title>
            <Container>
              <Row>
                {[ 
                  { day: 1, title: "Cochin Arrival", desc: "Explore Fort Kochi & Marine Drive." },
                  { day: 2, title: "Munnar", desc: "Visit tea gardens, waterfalls & Eravikulam National Park." },
                  { day: 3, title: "Thekkady", desc: "Periyar Wildlife Sanctuary & spice plantation tour." },
                  { day: 4, title: "Alleppey", desc: "Enjoy a houseboat cruise through the backwaters." },
                  { day: 5, title: "Kovalam & Departure", desc: "Relax at Kovalam Beach before heading home." }
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
              <strong>Starting at ₹19,999</strong> per person  
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

export default KeralaTour;
