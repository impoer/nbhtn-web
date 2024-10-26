import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';

const Dashboard: React.FC = () => {
  return (
    <Container fluid className="mt-4">
      <Row>
        <Col md={9}>
          <h1 className="text-center">Account Overview</h1>
          <Row className="mt-4">
            <Col md={6}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Account Balance</Card.Title>
                  <Card.Text className="display-4">$5,000.00</Card.Text>
                  <ProgressBar now={70} label={`70%`} />
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Recent Transactions</Card.Title>
                  <Card.Text>No recent transactions found.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Account Summary</Card.Title>
                  <Card.Text>
                    <ul>
                      <li>Checking Account: $2,500.00</li>
                      <li>Savings Account: $2,000.00</li>
                      <li>Investment Account: $500.00</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Card>
                <Card.Body>
                  <Card.Title>Upcoming Payments</Card.Title>
                  <Card.Text>
                    <ul>
                      <li>Electricity Bill: $150.00 due on Oct 30</li>
                      <li>Internet Bill: $80.00 due on Nov 5</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
