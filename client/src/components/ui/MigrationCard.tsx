import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import type { UserType } from '../../types/auth';

type Props = {
  migr: UserType;
};

export default function MigrationCard({ migr }: Props): JSX.Element {
  return (
    <Card style={{
      width: '18rem',
      margin: '10px',
      borderRadius: '15px',
      overflow: 'hidden',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
    }}>
      <Card.Img variant="top" src={migr?.img} style={{ height: '200px', objectFit: 'cover', borderRadius: '15px 15px 0 0' }} />

      <Card.Body style={{ padding: '20px', color: 'white' }}>
        <Card.Title>{migr?.name}</Card.Title>
        <Card.Text>{migr?.info}</Card.Text>
        <Card.Text>Email: <p style={{ color: 'white' }}> {migr?.email}</p></Card.Text>
        <Card.Text>Сотовый телефон: <p style={{ color: 'white' }}>{migr?.number}</p></Card.Text>

      </Card.Body>

      
    </Card>
  );
}
