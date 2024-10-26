import React from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';

const Transactions: React.FC = () => {
  return (
    <Container className="mt-4">
      <h1 className="text-center">Transaction History</h1>
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Recent Transactions</Card.Title>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2024-10-01</td>
                    <td>Payment to Vendor</td>
                    <td>$200.00</td>
                    <td>Completed</td>
                  </tr>
                  <tr>
                    <td>2024-10-02</td>
                    <td>Deposit</td>
                    <td>$1,000.00</td>
                    <td>Completed</td>
                  </tr>
                  <tr>
                    <td>2024-10-03</td>
                    <td>Transfer to Savings</td>
                    <td>$150.00</td>
                    <td>Completed</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Transactions;
