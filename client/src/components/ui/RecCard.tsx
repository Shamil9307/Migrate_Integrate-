import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useAppDispatch } from '../../redux/hooks';
import { thunkDeleteRec } from '../../redux/slices/recpmindation/createAsyncThunks';
import type { RecomType } from '../../types/recomedation';
import { setSelectedRes } from '../../redux/slices/recpmindation';

type CardProps = {
  card: RecomType;
  
};

export default function RecCard({ card }: CardProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <Col xs={3} className="p-2">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={card.img} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.info}</Card.Text>
          <Button variant="danger" onClick={() => void dispatch(thunkDeleteRec(card.id))}>
            Х
          </Button>
          <Button variant="danger" onClick={() => dispatch(setSelectedRes(card))}>
            edit
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
