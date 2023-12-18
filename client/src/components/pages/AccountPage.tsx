import React, { useState } from 'react';
import { Button, Container, Tab, Tabs } from 'react-bootstrap';
import { Input } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import type { UserEditForm } from '../../types/auth';
import { thunkEditUser } from '../../redux/slices/user/createAsyncThunks';
import { thunkRefreshToken } from '../../redux/slices/auth/createAsyncThunks';
import Chat from '../ui/Chat';
import MigranNotMentorList from '../ui/MigranNotMentorList';

export default function AccountPage(): JSX.Element {
  const user = useAppSelector((state) => state.authSlice.user);
  const allusers = useAppSelector((state) => state.userSlice.allUser).filter(
    (item) => item.id === user.id,
  );
  const dispatch = useAppDispatch();
  const [edit, setEdit] = useState(false);
  const mig = allusers[0]?.Kurator[0];
  // console.log(mig);

  const handleShow = (): void => setEdit(!edit);

  return (
    <Tabs defaultActiveKey="profile" id="fill-tab-example" className="mb-3" fill>
      <Tab eventKey="home" title="Моя анкета">
        <Container
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onSubmit={(e) => {
              e.preventDefault();
              const formData = Object.fromEntries(new FormData(e.currentTarget)) as UserEditForm;
              void dispatch(thunkEditUser({ formData, id: user.id }));
              void dispatch(thunkRefreshToken());
              setEdit(false);
            }}
          >
            <div
              style={{ borderRadius: '50%', overflow: 'hidden', width: '300px', height: '300px' }}
            >
              <img
                src={user.img}
                alt="Профиль пользователя"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
              />
            </div>

            {edit ? (
              <Input
                name="name"
                style={{ width: '300px', paddingLeft: '30px', marginTop: '50px' }}
                defaultValue={user.name}
              />
            ) : (
              <div style={{ width: '100%', textAlign: 'center', marginTop: '10px' }}>
                <h2>{user.name}</h2>
              </div>
            )}
            {edit ? (
              <Input
                name="info"
                style={{ width: '700px', paddingLeft: '30px', marginTop: '50px' }}
                defaultValue={user.info}
              />
            ) : (
              <div style={{ marginTop: '50px' }}>
                <h4>{user.info} </h4>
              </div>
            )}
            {edit ? (
              <Input
                name="number"
                style={{ width: '300px', paddingLeft: '100px', marginTop: '50px' }}
                defaultValue={user.number}
              />
            ) : (
              <div style={{ marginTop: '50px' }}>
                <p>Сотовый телефон:{user.number}</p>
              </div>
            )}
            {edit ? (
              <Input
                name="email"
                style={{ width: '300px', paddingLeft: '130px', marginTop: '50px' }}
                defaultValue={user.email}
              />
            ) : (
              <div style={{ marginTop: '50px' }}>
                <p>
                  Email:
                  {user.email}
                </p>
              </div>
            )}
            {edit ? <Button type="submit">Сохранить</Button> : <></>}
            <div />
          </form>
          {edit ? (
            <></>
          ) : (
            <Button type="button" onClick={handleShow}>
              Изменить данные
            </Button>
          )}
        </Container>
      </Tab>
      <Tab eventKey="profile" title="Подопечный">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ borderRadius: '50%', overflow: 'hidden', width: '300px', height: '300px' }}>
            <img
              src={mig?.img}
              alt="Профиль пользователя"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
            />
          </div>
          <div>
            <h2>{mig?.name}</h2>
          </div>
          <div>
            <h4>{mig?.info}</h4>
          </div>
          <div>
            <h4>Сотовый телефон:{mig?.number}</h4>
          </div>
          <div>
            <h4>Email:{mig?.email}</h4>
          </div>
        </div>
      </Tab>
      <Tab eventKey="longer-tab" title="Выбрать подопечного">
        <MigranNotMentorList/>
      </Tab>
    </Tabs>
  );
}
