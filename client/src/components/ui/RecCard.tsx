import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useAppDispatch } from '../../redux/hooks';
import { thunkDeleteRec } from '../../redux/slices/recpmindation/createAsyncThunks';
import type { RecomType } from '../../types/recomedation';
import { setSelectedRes } from '../../redux/slices/recpmindation';

type CardProps = {
  lesson: RecomType;
  
};

export default function RecCard({ lesson }: CardProps): JSX.Element {
  console.log("karta",lesson);
  const dispatch = useAppDispatch();
  return (
    <Col xs={3} className="p-2">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={lesson.img} />
        <Card.Body>
          <Card.Title>{lesson.title}</Card.Title>
          <Card.Text>{lesson.info}</Card.Text>
          <Button variant="danger">
            Х
          </Button>
          <Button variant="danger">
            edit
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
