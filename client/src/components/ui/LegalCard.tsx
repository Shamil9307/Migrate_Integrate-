import React from 'react';
import type { LegalType } from '../../types/legals';
import { useAppDispatch } from '../../redux/hooks';
import { Button, Card } from 'react-bootstrap';
import { setSelectedLegal } from '../../redux/slices/legals';
import { thunkDeleteLegal } from '../../redux/slices/legals/createAsyncThunks';

type LegalCardProps = {
  legal: LegalType;
};

export default function LegalCard({ legal }: LegalCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={legal.img} />
      <Card.Body>
        <Card.Title>{legal.title}</Card.Title>
        <Card.Text>{legal.text}</Card.Text>
        <Card.Text>{legal.url}</Card.Text>
        <Button variant="secondary" onClick={() => void dispatch(setSelectedLegal(legal))}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => dispatch(thunkDeleteLegal(legal.id))}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}
