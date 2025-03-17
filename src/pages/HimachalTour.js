import React from "react";
import { motion } from "framer-motion";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./TourPage.css";

const HimachalTour = () => {
  return (
    <motion.div
      className="tour-page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <motion.div className="tour-hero">
        <h1 className="tour-title">Himachal Tour Packages</h1>
        <motion.img
 
          src="https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1641221572_h8.jpg.webp"
 
          // src="https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1241785171_20191022173231.jpg"
 
          alt="Himachal Tour"
          className="tour-image"
        />
      </motion.div>

      {/* Tour Description */}
      <motion.p className="tour-description">
        Experience the beauty of the Himalayas with our Himachal Tour. Visit **Shimla, Manali, Dharamshala, and Dalhousie**.  
        Enjoy scenic valleys, adventure sports, and serene monasteries!
      </motion.p>

      {/* Itinerary Section */}
      <div className="itinerary-card-wrapper">
        <Card className="itinerary-card">
          <Card.Body>
            <Card.Title className="section-heading">Tour Itinerary</Card.Title>
            <Container>
              <Row>
                {[
                  { day: 1, title: "Arrival in Shimla", desc: "Explore Mall Road & Ridge." },
                  { day: 2, title: "Shimla - Manali", desc: "Visit Kufri & drive to Manali." },
                  { day: 3, title: "Manali Sightseeing", desc: "Explore Solang Valley & Hadimba Temple." },
                  { day: 4, title: "Manali - Dharamshala", desc: "Visit Tibetan Monasteries & Cricket Stadium." },
                  { day: 5, title: "Dharamshala - Dalhousie", desc: "Explore Dalhousie & Khajjiar (Mini Switzerland)." },
                  { day: 6, title: "Departure", desc: "Return with beautiful memories." }
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
              <strong>Starting at ₹21,999</strong> per person  
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

export default HimachalTour;
