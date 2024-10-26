import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Home: React.FC = () => {
  return (
    <Container className="mt-4">
      <h1 className="text-center">Welcome to Your Bank</h1>
      <Row className="mt-4">
        <Col>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Quick Access</Card.Title>
              <Card.Text>
                Easily manage your banking tasks and access your account details.
              </Card.Text>
              <Button variant="primary" href="/dashboard">Go to Dashboard</Button>
              <Button variant="secondary" href="/accounts" className="ml-2">Manage Accounts</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
