import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useAppSelector } from '../../redux/hooks';

export default function UserCard(): JSX.Element {
  const user = useAppSelector((store) => store.authSlice.user);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={user?.img} />
      <Card.Body>
        <Card.Title>{user?.name}</Card.Title>
        <Card.Text>{user?.info}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Email: {user?.email}</ListGroup.Item>
        <ListGroup.Item>Сотовый телефон:</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Изменить данные</Card.Link>
      </Card.Body>
    </Card>
  );
}
