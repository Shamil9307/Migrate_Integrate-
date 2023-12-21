import React from 'react';
import { Button, Card } from 'react-bootstrap';
import type { UserType } from '../../types/auth';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { thunkApruvedUser, thunkDeniteUser } from '../../redux/slices/user/createAsyncThunks';

type UserProps = {
  user: UserType;
};
export default function UserCard({ user }: UserProps): JSX.Element {
  const dispatch = useAppDispatch();
  const selectUser = useAppSelector((store) => store.userSlice.selectedUser);

  return (
    <Card style={{ width: '18rem', margin: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <Card.Img variant="top" src={user.img} style={{ height: '300px', width: '100%', objectFit: 'cover' }} />
  <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'end', flex: 1 }}>
    <Card.Title>{user.name}</Card.Title>
    <Card.Text>{user.info}</Card.Text>
    <div style={{ marginTop: 'auto', textAlign: 'right' }}>
      <Button style={{ marginRight: '5px' }} variant="success" onClick={() => void dispatch(thunkApruvedUser(user))}>
        Подтвердить
      </Button>
      <Button variant="danger" onClick={() => void dispatch(thunkDeniteUser(user))}>
        Отказать
      </Button>
    </div>
  </Card.Body>
</Card>

  );
}
