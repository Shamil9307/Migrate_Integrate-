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
     <Card style={{ width: '30rem', marginTop: '0px', marginBottom: '100px', height:"90vh" }} className="mb-4 d-flex justify-content-center">
  <Card.Img variant="top" src={legal.img} style={{height: '20rem'}} />
  <Card.Body>
    <Card.Title>{legal.title}</Card.Title>
    <Card.Text>{legal.text}</Card.Text>
    <Card.Text>{legal.url}</Card.Text>
    {/* <div style={{}}> */}
    <Button variant="secondary" onClick={() => void dispatch(setSelectedLegal(legal))}>
      Edit
    </Button>
    <Button variant="danger" onClick={() => dispatch(thunkDeleteLegal(legal.id))}>
      Delete
    </Button>
    {/* </div> */}
  </Card.Body>
</Card>
    </div>
  );
}
