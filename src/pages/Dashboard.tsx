import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';

const Dashboard: React.FC = () => {
  return (
    <Container className="mt-4">
      <h1 className="text-center">Account Overview</h1>
      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Account Balance</Card.Title>
              <Card.Text className="display-4">$5,000.00</Card.Text>
              <ProgressBar now={70} label={`70%`} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Recent Transactions</Card.Title>
              <Card.Text>No recent transactions found.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
