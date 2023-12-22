import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { thunkDeleteRec } from '../../redux/slices/recpmindation/createAsyncThunks';
import type { RecomType } from '../../types/recomedation';
import { setSelectedRes } from '../../redux/slices/recpmindation';

type CardProps = {
  card: RecomType;
};

export default function RecCard({ card }: CardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.authSlice.user);
  return (
    <Col xs={3} className="p-2 d-flex justify-content-center">
      <Card
        style={{ width: '30rem', marginTop: '-60px', marginBottom: '100px' }}
        className="mb-4 d-flex justify-content-center"
      >
        <Card.Img variant="top" src={card.img} />
        <Card.Body className="text-center">
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.info}</Card.Text>
          <div className="d-flex justify-content-center gap-1">
            {user.id === 1 && (
              <>
                <Button
                  variant="danger"
                  style={{
                    fontFamily: 'Gill Sans, sans-serif',
                    fontSize: '18px',
                    backgroundColor: 'red',
                    width: '150px',
                  }}
                  onClick={() => void dispatch(thunkDeleteRec(card.id))}
                >
                  Delete
                </Button>
                <Button
                  variant="danger"
                  style={{
                    fontFamily: 'Gill Sans, sans-serif',
                    fontSize: '18px',
                    backgroundColor: '#5fae32',
                    width: '150px',
                  }}
                  onClick={() => dispatch(setSelectedRes(card))}
                >
                  Edit
                </Button>
              </>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
