import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import type { UserType } from '../../types/auth';
import { useAppSelector } from '../../redux/hooks';
import { thunkApruvedUser, thunkDeniteUser } from '../../redux/slices/user/createAsyncThunks';

type UserProps = {
  user: UserType;
};
export default function UserCard({ user }: UserProps): JSX.Element {
  const dispatch = useDispatch();
  const selectUser = useAppSelector((store) => store.userSlice.selectedUser);
  console.log(selectUser);

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={user.img} />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.info}</Card.Text>
        <Button variant="primary" onClick={() => void dispatch(thunkApruvedUser(user))}>
          Подтвердить
        </Button>
        <Button variant="primary" onClick={() => void dispatch(thunkDeniteUser(user))}>
          Отказать
        </Button>
      </Card.Body>
    </Card>
  );
}
