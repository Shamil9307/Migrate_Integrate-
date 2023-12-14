import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAppDispatch } from '../../redux/hooks';
import { thunkDeleteRec } from '../../redux/slices/recpmindation/createAsyncThunks';
import type { RecomType } from '../../types/recomedation';

type CardProps = {
  card: RecomType;
};
export default function RecCard({ card }: CardProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card.img} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.info}</Card.Text>
        <Button variant="primary" onClick={() => void dispatch(thunkDeleteRec(card.id))}>
          Х
        </Button>
      </Card.Body>
    </Card>
  );
}
