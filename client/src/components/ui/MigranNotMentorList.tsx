import React from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { thunkChooseMigrant } from '../../redux/slices/user/createAsyncThunks';
import type { UserType, UserState } from '../../types/auth';

export default function MigranNotMentorList(): JSX.Element {
  const userNotMentor = useAppSelector((store) => store.userSlice.allUser).filter(
    (user) => user.roleId === 3 && user.statusId === 2,
  );
  const dispatch = useAppDispatch();

  const userayut: UserType | null = useAppSelector((store) => {
    if (store.authSlice.user.status === 'authenticated') {
      return store.authSlice.user;
    }
    return null;
  });
  return (
    <Row>
      {userNotMentor.map((user) => (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={user.img} />
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>{user.info}</Card.Text>
            <Button
              variant="primary"
              onClick={() => {
                if (userayut) {
                  void dispatch(thunkChooseMigrant({ id: user.id, userId: userayut.id }));
                }
              }}
            >
              Выбрать
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Row>
  );
}
