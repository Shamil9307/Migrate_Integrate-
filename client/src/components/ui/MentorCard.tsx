import React from 'react';
import { Card } from 'react-bootstrap';
import type { UserType } from '../../types/auth';

type UserProps = {
  user: UserType;
};

export default function MentorCard({ user }: UserProps): JSX.Element {
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
      <div style={{ overflow: 'hidden', aspectRatio: '1/1' }}>
        <Card.Img variant="top" src={user?.img} style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '15px 15px 0 0' }} />
      </div>
      <Card.Body style={{ padding: '20px', color: 'white' }}>
        <Card.Title>{user?.name}</Card.Title>
        <Card.Text>{user?.info}</Card.Text>
      </Card.Body>
    </Card>
  );
}
