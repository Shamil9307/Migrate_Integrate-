import React from 'react';
import { Button, Card } from 'react-bootstrap';
import type { UserType } from '../../types/auth';

type UserProps = {
  user: UserType;
};
export default function MentorCard({ user }: UserProps): JSX.Element {
  return (
    <Card style={{ width: '18rem',margin: '10px' }}>
      <Card.Img variant="top" src={user.img} />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.info}</Card.Text>
       
      </Card.Body>
    </Card>
  );
}
