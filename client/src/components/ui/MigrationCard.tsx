import React, { useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useAppSelector } from '../../redux/hooks';

export default function MigrationCard(): JSX.Element {
  const user = useAppSelector((store) => store.authSlice.user);
  const userid = user.userId;
  const migrant = useAppSelector((store) => store.recSlice.allUser).filter(
    (el) => el.id === userid,
  );
  console.log(migrant);
  const [open, setOpen] = useState(false);

  const handleClosed = (): void => setOpen(false);
  const handleShowed = (): void => setOpen(true);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={migrant[0]?.img} />
      
      <Card.Body>
        <Card.Title>{migrant[0]?.name}</Card.Title>
        <Card.Text>{migrant[0]?.info}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Email: {migrant[0]?.email}</ListGroup.Item>
        <ListGroup.Item>Сотовый телефон:</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#" onClick={() => handleShowed()}>
          Изменить данные
        </Card.Link>
      </Card.Body>
    </Card>
  );
}
