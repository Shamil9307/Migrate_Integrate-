import React, { useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useAppSelector } from '../../redux/hooks';
import type { UserType } from '../../types/auth';

type Props = {
  migr: UserType;
};
export default function MigrationCard({ migr }: Props): JSX.Element {
  return (
    <Card style={{ width: '18rem', margin: '10px'}}>
      <Card.Img variant="top" src={migr?.img} />

      <Card.Body>
        <Card.Title>{migr?.name}</Card.Title>
        <Card.Text>{migr?.info}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Email: {migr?.email}</ListGroup.Item>
        <ListGroup.Item>Сотовый телефон: {migr?.number}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Изменить данные</Card.Link>
      </Card.Body>
    </Card>
  );
}
