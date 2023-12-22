import React from 'react';
import { Button, Card } from 'react-bootstrap';
import type { UserType } from '../../types/auth';
import { useAppDispatch } from '../../redux/hooks';
import { thunkApruvedUser, thunkDeniteUser } from '../../redux/slices/user/createAsyncThunks';

type UserProps = {
  user: UserType;
};

export default function UserCard({ user }: UserProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <Card
      style={{
        width: '18rem',
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backdropFilter: 'blur(5px)',
        borderRadius: '15px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Card.Img
        variant="top"
        src={user.img}
        style={{ height: '300px', width: '100%', objectFit: 'cover', borderRadius: '15px 15px 0 0' }}
      />
      <Card.Body
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flex: 1,
          padding: '20px',
        }}
      >
        <Card.Title style={{color:'white'}}>{user.name}</Card.Title>
        <Card.Text style={{color:'white'}}>{user.info}</Card.Text>
        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center' }}>
          <Button
            style={{ marginRight: '5px', backgroundColor: '#28a745', color: 'white' }}
            variant="success"
            onClick={() => void dispatch(thunkApruvedUser(user))}
          >
            Подтвердить
          </Button>
          <Button
            style={{ backgroundColor: '#dc3545', color: 'white' }}
            variant="danger"
            onClick={() => void dispatch(thunkDeniteUser(user))}
          >
            Отказать
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
