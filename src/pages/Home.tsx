import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import './Home.css'; // Підключіть CSS файл для стилізації
import slide1 from '../assets/bank-loan-business-meeting1668151824.webp';
import slide2 from '../assets/bank-loan-proposal1662354955.webp';
import slide3 from '../assets/banking-infographics1639391293.webp';

const Home: React.FC = () => {
  return (
    <Container className="mt-4">
      <h1 className="text-center">Welcome to Your Bank</h1>

      {/* Слайдер */}
      <Carousel className="mt-4">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to Our Bank</h3>
            <p>Experience the best banking services with us.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Easy Online Banking</h3>
            <p>Manage your accounts easily from anywhere.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>24/7 Customer Support</h3>
            <p>We are here to assist you anytime, anywhere.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Секція блоків */}
      <Row className="mt-4">
        <Col xs={12} md={4}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <Card.Title>Account Overview</Card.Title>
              <Card.Text>
                View your account balance, transactions, and more.
              </Card.Text>
              <Button variant="primary" href="/dashboard">View Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <Card.Title>Loan Options</Card.Title>
              <Card.Text>
                Explore various loan options and apply online.
              </Card.Text>
              <Button variant="primary" href="/loans">Apply Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <Card.Title>Investment Plans</Card.Title>
              <Card.Text>
                Check out our investment plans to grow your wealth.
              </Card.Text>
              <Button variant="primary" href="/investments">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
