import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import './Bookingform.css';

function BookingForm() {
  return (
    <div className="booking-form text-center py-5" style={{ background: 'linear-gradient(90deg, #005aa7, #fffde4)' }}>
      <h4 className="book-trip mb-4">
        📋 BOOK YOUR TRIP NOW
      </h4>
      <div className="form-container mx-auto p-4">
        <Form>
          <Row>
            <Col md={4} sm={12} xs={12} className="mb-3">
              <Form.Control type="text" placeholder="Full Name" />
            </Col>
            <Col md={4} sm={12} xs={12} className="mb-3">
              <Form.Control type="number" placeholder="Phone Number" />
            </Col>
            <Col md={4} sm={12} xs={12} className="mb-3">
              <Form.Control type="email" placeholder="Email Id" />
            </Col>
          </Row>

          <Row className="mt-3">
            <Col md={3} sm={6} xs={12} className="mb-3">
              <Form.Select>
                <option>No. of Adult</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </Form.Select>
            </Col>
            <Col md={3} sm={6} xs={12} className="mb-3">
              <Form.Select>
                <option>No. of Child</option>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Form.Select>
            </Col>
            <Col md={3} sm={12} xs={12} className="mb-3">
              <Form.Control type="date" />
            </Col>
            <Col md={3} sm={12} xs={12} className="mb-3 text-center">
              <Button variant="danger" className="send-btn w-100">
                SEND ENQUIRY →
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default BookingForm;
