import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import type { NovostType } from '../../types/novosti';
import { setSelectedNovost } from '../../redux/slices/novosti';
import { thunkDeleteNovost } from '../../redux/slices/novosti/createAsyncThunks';

type NovostCardProps = {
  novost: NovostType;
};

export default function NovostCard({ novost }: NovostCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.authSlice.user);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={novost.img} />
      <Card.Body>
        <Card.Title>{novost.title}</Card.Title>
        <Card.Text>{novost.text}</Card.Text>
        {user.id === 1 && (
          <>
            <Button variant="secondary" onClick={() => void dispatch(setSelectedNovost(novost))}>
              Edit
            </Button>
            <Button variant="danger" onClick={() => dispatch(thunkDeleteNovost(novost.id))}>
              Delete
            </Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}
