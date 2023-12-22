import React, { useState } from 'react';
import { Button, Container, Tab, Tabs } from 'react-bootstrap';
import { Input } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import type { AuthState, UserEditForm, UserState, UserType } from '../../types/auth';
import { thunkEditUser } from '../../redux/slices/user/createAsyncThunks';
import { thunkRefreshToken } from '../../redux/slices/auth/createAsyncThunks';
import MigranNotMentorList from '../ui/MigranNotMentorList';

export default function NastavnikAccountPage(): JSX.Element {
  const user = useAppSelector((state) => state.authSlice.user) as {
    status: 'authenticated';
  } & UserType;
  const carrentUser = useAppSelector((state) => state.userSlice.allUser);
  const carrentUserFilter = carrentUser.filter((item) => item.id === user.id);
  const migrant = carrentUserFilter[0]?.Kurator?.[0];
  const dispatch = useAppDispatch();

  const [edit, setEdit] = useState(false);
  const [user1, setUser1] = useState(user);
  // const mig = carrentUser?.Kurator;
  // const [mig]: UserType[] | null = carrentUser?.Kurator;

  const handleShow = (): void => setEdit(!edit);
  console.log(user1, 'aaaaaaaaaa');

  return (
    <Tabs defaultActiveKey="profile" id="fill-tab-example" className="mb-3" fill>
      <Tab eventKey="home" title="Моя анкета">
        <Container
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontFamily: 'Gill Sans, sans-serif',
            fontSize: '30px',
            borderRadius: '5px',
            boxSizing: 'border-box',
            border: '1px solid #ccc' 

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
              setUser1({ ...user1, ...formData });
              setEdit(false);
            }}
          >
            <div
              style={{ borderRadius: '50%', overflow: 'hidden', width: '300px', height: '300px' }}
            >
              <img
                src={user1?.img}
                alt="Профиль пользователя"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
              />
            </div>
            {edit ? (
              <input
                name="name"
                style={{  width: '600px',
                height: '60px',
                paddingLeft: '20px',
                marginTop: '10px',
       
                fontSize: '20px',
                borderRadius: '5px',
                boxSizing: 'border-box',
                border: '1px solid #ccc' }}
                defaultValue={user1?.name}
              />
            ) : (
              <div style={{ width: '100%', textAlign: 'center', marginTop: '10px' }}>
                <h2>{user1?.name}</h2>
              </div>
            )}
            {edit ? (
              <input
                name="info"
                style={{
                  width: '600px',
                  height: '60px',
                  fontSize: '20px',
                  marginTop: '10px',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                }}
                defaultValue={user1?.info}
              />
            ) : (
              <div style={{ marginTop: '10px' }}>
                <h4>{user1?.info} </h4>
              </div>
            )}
            {edit ? (
              <input
                name="number"
                style={{ width: '600px',
                height: '60px',
                fontSize: '20px',
                paddingLeft: '30px',
                marginTop: '10px',
                borderRadius: '8px',
                border: '1px solid #ccc',}}
                defaultValue={user1?.number}
              />
            ) : (
              <div style={{ marginTop: '10px' }}>
                <p>Телефон: {user1?.number}</p>
              </div>
            )}
            {edit ? (
             <input
             name="email"
             style={{
               width: '600px',
               paddingLeft: '30px',
               height: '60px',
               fontSize: '20px',
               marginTop: '10px',
               borderRadius: '8px',
               border: '1px solid #ccc',
               backgroundColor: '#f5f5f5',
             }}
             defaultValue={user1?.email}
           />
            ) : (
              <div style={{ marginTop: '10px' }}>
                <p>
                  Email: 
                   {user1?.email}
                </p>
              </div>
            )}
            {edit && (
              <Button
                type="submit"
                style={{ marginBottom: '20px', marginTop: '20px', backgroundColor: '#5fae32' }}
              >
                Сохранить
              </Button>
            )}
            <div />
          </form>
          {edit ? (
            <> </>
          ) : (
            <Button
              type="button"
              onClick={handleShow}
              style={{
                fontFamily: 'Gill Sans, sans-serif',
                fontSize: '18px',
                backgroundColor: '#5fae32',
                marginBottom: '10px',
              }}
            >
              Изменить данные
            </Button>
          )}
        </Container>
      </Tab>
      {migrant && (
        <Tab eventKey="profile" title="Подопечный">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{ borderRadius: '50%', overflow: 'hidden', width: '300px', height: '300px' }}
            >
              <img
                src={migrant?.img}
                alt="Профиль пользователя"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
              />
            </div>
            <div>
              <h2>{migrant?.name}</h2>
            </div>
            <div>
              <h4>{migrant?.info}</h4>
            </div>
            <div>
              <h4>Телефон: {migrant?.number}</h4>
            </div>
            <div>
              <h4>Email: {migrant?.email}</h4>
            </div>
          </div>
        </Tab>
      )}
      {user1.statusId === 1 && !migrant && (
        <Tab eventKey="longer-tab" title="Выбрать подопечного">
          <MigranNotMentorList />
        </Tab>
      )}
    </Tabs>
  );
}
