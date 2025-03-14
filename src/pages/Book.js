import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Form, Button } from 'react-bootstrap';
import './Book.css';

const Book = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tourPackage: '',
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking Successful! We will contact you soon.');
  };

  return (
    <motion.div 
<<<<<<< HEAD
      className="booking-page1"
=======
      className="booking-page"
>>>>>>> b2088b22ac606b449043eb4aa5429ca68ba996cb
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
<<<<<<< HEAD
      <h1 className="booking-title1">Book Your Trip</h1>
      <Form className="booking-form1" onSubmit={handleSubmit}>
=======
      <h1 className="booking-title">Book Your Trip</h1>
      <Form className="booking-form" onSubmit={handleSubmit}>
>>>>>>> b2088b22ac606b449043eb4aa5429ca68ba996cb
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" onChange={handleChange} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" onChange={handleChange} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" name="phone" onChange={handleChange} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Select Tour Package</Form.Label>
          <Form.Control as="select" name="tourPackage" onChange={handleChange} required>
            <option value="">Select...</option>
            <option value="Kashmir">Kashmir</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Ladakh">Ladakh</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Travel Date</Form.Label>
          <Form.Control type="date" name="date" onChange={handleChange} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Additional Message</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" onChange={handleChange} />
        </Form.Group>

<<<<<<< HEAD
        <Button className="submit-btn1" type="submit">Submit Booking</Button>
=======
        <Button className="submit-btn" type="submit">Submit Booking</Button>
>>>>>>> b2088b22ac606b449043eb4aa5429ca68ba996cb
      </Form>
    </motion.div>
  );
};

export default Book;
