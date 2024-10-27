import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import './TransactionHistory.css'; // Підключаємо CSS файл для стилізації

const transactions = [
  { id: 1, user: "Тестовий Користувач 1", time: "12:00", amount: 100, type: "credit" },
  { id: 2, user: "Тестовий Користувач 2", time: "14:30", amount: -50, type: "debit" },
  { id: 3, user: "Тестовий Користувач 3", time: "16:15", amount: -200, type: "debit" },
  { id: 4, user: "Тестовий Користувач 4", time: "18:00", amount: 300, type: "credit" },
];

const TransactionHistory: React.FC = () => {
  return (
    <Card className="grid-item transaction-history shadow-sm">
      <Card.Body>
        <Card.Title>Історія транзакцій</Card.Title>
        <ListGroup>
          {transactions.map((transaction) => (
            <ListGroup.Item key={transaction.id} className={`transaction-item ${transaction.type}`}>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  {transaction.type === "credit" ? (
                    <FaArrowUp className="text-success me-2" />
                  ) : (
                    <FaArrowDown className="text-danger me-2" />
                  )}
                  <span>{transaction.user}</span>
                </div>
                <span>{transaction.time} <strong>{transaction.amount} UAH</strong></span>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default TransactionHistory;
