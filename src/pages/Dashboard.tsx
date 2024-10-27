import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import './Dashboard.css'; // Підключаємо CSS файл для стилізації
import TransactionHistory from '../components/TransactionHistory';
import MobileTopUp from '../components/MobileTopUp';

const Dashboard: React.FC = () => {
  return (
    <Container fluid className="mt-4">
      <h1 className="text-center mb-4">Гаманець</h1>
      <div className="grid-container">
        {/* Картка з балансом */}
        <Card className="grid-item balance-card shadow-sm">
          <Card.Body>
            <Card.Title className="text-center">Картка Тестова</Card.Title>
            <Card.Text className="display-4 text-center">1,000.00 UAH</Card.Text>
          </Card.Body>
        </Card>

        {/* Історія транзакцій */}
        <TransactionHistory />

        {/* Поповнення мобільного */}
        <MobileTopUp />

        {/* Що нового у Приват24 */}
        <Card className="grid-item news shadow-sm">
          <Card.Body>
            <Card.Title>Що нового у Приват24</Card.Title>
            <Card.Text>
              <img src="image1.png" alt="Контроль та управління фінансами" width="100%" />
              <img src="image2.png" alt="Коментарі до переказів" width="100%" />
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Мої кредити */}
        <Card className="grid-item my-loans shadow-sm">
          <Card.Body>
            <Card.Title>Мої кредити</Card.Title>
            <Card.Text>
              Інформація про кредити доступна в новому сервісі.
              <Button variant="link" onClick={() => { /* Додайте логіку переходу тут */ }}>
                Перейти
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
        {/* Конвертор валют */}
        <Card className="grid-item currency-converter shadow-sm">
          <Card.Body>
            <Card.Title>Конвертор валют</Card.Title>
            <Card.Text>
              <strong>USD</strong> <br />
              Сума: 200.00 <br />
              1 = 41.05 <br />
              <strong>UAH</strong> <br />
              Сума: 200.00
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Популярні шаблони */}
        <Card className="grid-item templates shadow-sm">
          <Card.Body>
            <Card.Title>Популярні шаблони</Card.Title>
            <Card.Text>Комунальні платежі: вул. Тестова, буд. 1, кв. 1, м. Тестоград</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Dashboard;
