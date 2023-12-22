import React from 'react';
import { Button, Card } from 'react-bootstrap';
import type { LegalType } from '../../types/legals';
import { useAppDispatch } from '../../redux/hooks';
import { setSelectedLegal } from '../../redux/slices/legals';
import { thunkDeleteLegal } from '../../redux/slices/legals/createAsyncThunks';

type LegalCardProps = {
  legal: LegalType;
};

export default function LegalCard({ legal }: LegalCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <div>
<Card style={{ width: '30rem', marginTop: '-60px', marginBottom: '100px' }} className="mb-4 d-flex justify-content-center">
  <Card.Img variant="top" src={legal.img} />
  <Card.Body className="text-center">
    <Card.Title>{legal.title}</Card.Title>
    <Card.Text>{legal.text}</Card.Text>
    <Card.Text>{legal.url}</Card.Text>
    <div className="d-flex justify-content-center gap-3">
      <Button variant="secondary" style={{ fontFamily: 'Gill Sans, sans-serif', fontSize: '18px', backgroundColor: '#5fae32', width: '150px' }} onClick={() => void dispatch(setSelectedLegal(legal))}>
        Edit
      </Button>
      <Button variant="danger" style={{ fontFamily: 'Gill Sans, sans-serif', fontSize: '18px', backgroundColor: 'red', width: '150px' }} onClick={() => dispatch(thunkDeleteLegal(legal.id))}>
        Delete
      </Button>
    </div>
  </Card.Body>
</Card>
    </div>
  );
}
