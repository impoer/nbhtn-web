import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import './MobileTopUp.css'; // Підключаємо CSS файл для стилізації

const countries = [
  { name: 'Україна', code: '+380' },
  { name: 'Польща', code: '+48' },
  { name: 'Німеччина', code: '+49' },
  { name: 'Росія', code: '+7' },
  { name: 'США', code: '+1' },
];

const MobileTopUp: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCountryChange = (event: React.ChangeEvent<HTMLElement>) => {
    const target = event.target as HTMLSelectElement;
    const country = countries.find(c => c.code === target.value);
    if (country) {
      setSelectedCountry(country);
    }
  };

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Зупиняємо перезавантаження сторінки
    // Логіка для переходу на сторінку поповнення
    alert(`Поповнення номеру: ${selectedCountry.code} ${phoneNumber}`);
  };

  return (
    <Card className="grid-item mobile-topup shadow-sm">
      <Card.Body>
        <Card.Title>Поповнення мобільного</Card.Title>
        <Form>
          <Form.Group controlId="countrySelect">
            <Form.Label>Виберіть країну</Form.Label>
            <Form.Control as="select" onChange={handleCountryChange} value={selectedCountry.code}>
              {countries.map((country, index) => (
                <option key={index} value={country.code}>{country.name} ({country.code})</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="phoneNumber">
            <Form.Label>Номер телефону</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Введіть номер"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              pattern="[0-9]*"
              required
            />
          </Form.Group>
          <Button variant="primary" onClick={handleSubmit} className="mt-3">
            Перейти до поповнення
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default MobileTopUp;
