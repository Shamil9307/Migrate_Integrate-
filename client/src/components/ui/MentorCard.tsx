import React from 'react';
import { Button, Card } from 'react-bootstrap';
import type { UserType } from '../../types/auth';

type UserProps = {
  user: UserType;
};
export default function MentorCard({ user }: UserProps): JSX.Element {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
  <div style={{ overflow: 'hidden', aspectRatio: '1/1' }}>
    <Card.Img variant="top" src={user?.img} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
  </div>
  <Card.Body>
    <Card.Title>{user?.name}</Card.Title>
    <Card.Text>{user?.info}</Card.Text>
  </Card.Body>
</Card>
  );
}
