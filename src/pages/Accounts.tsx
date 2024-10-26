import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';

const Accounts: React.FC = () => {
  return (
    <Container className="mt-4">
      <h1 className="text-center">Your Accounts</h1>
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Accounts List</Card.Title>
              <ListGroup>
                <ListGroup.Item>
                  Checking Account
                  <Button variant="link" className="float-end">View Details</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  Savings Account
                  <Button variant="link" className="float-end">View Details</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  Business Account
                  <Button variant="link" className="float-end">View Details</Button>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Accounts;
