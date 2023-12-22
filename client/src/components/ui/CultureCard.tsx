import React from 'react';
import { Button, Card } from 'react-bootstrap';
import type { CultureType } from '../../types/cultures';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { thunkDeleteCulture } from '../../redux/slices/cultures/createAsyncThunks';
import { setSelectedCulture } from '../../redux/slices/cultures';

type CultureCardProps = {
  culture: CultureType;
};

export default function CultureCard({ culture }: CultureCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.authSlice.user);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={culture.img} />
      <Card.Body>
        <Card.Title>{culture.title}</Card.Title>
        <Card.Text>{culture.text}</Card.Text>
        <Card.Text>{culture.url}</Card.Text>
        {user.id === 1 && (
          <>
            <Button variant="secondary" onClick={() => void dispatch(setSelectedCulture(culture))}>
              Edit
            </Button>
            <Button variant="danger" onClick={() => void dispatch(thunkDeleteCulture(culture.id))}>
              Delete
            </Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}
