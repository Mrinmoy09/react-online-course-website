import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container mt-auto">
            <div className="container-fluid">
            <Row>
                <Col xs={6} md={4}>
                <h3 className="text-success text-wrap">About E-School</h3>
                  <p className="text-white-50">Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.</p>
                </Col>
                <Col xs={6} md={4}>
                  <h3 className="text-success text-wrap">Our Services</h3>
                  <p className="text-white-50">We are mainly focusing on web development though we have some basic progamming courses.</p>
                </Col>
                <Col xs={6} md={4}>
                  <h3 className="text-success">Contact us</h3>
                  <p className="text-white-50">Phone: 171-115-0092-119</p>
                  <p className="text-white-50">email: e-school@edu.bd.com</p>
                </Col>
             </Row>
             <small className="text-white-50 text-center p-2 m-3 copyright">Created by &copy;mrinmoyarnob</small>
            </div>
        </div>
    );
};

export default Footer;