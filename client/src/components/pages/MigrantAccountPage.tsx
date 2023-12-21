import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Tab, Tabs } from 'react-bootstrap';
import UserCard from '../ui/UserCard';
import MentorCard from '../ui/MentorCard';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { thunkEditUser, thunkZayvkaNaNastavnika } from '../../redux/slices/user/createAsyncThunks';
import { thunkRefreshToken } from '../../redux/slices/auth/createAsyncThunks';
import type { UserEditForm, UserType } from '../../types/auth';

export default function MigrantAccountPage(): JSX.Element {
  const user = useAppSelector((state) => state.authSlice.user) as {
    status: 'authenticated';
  } & UserType;
  const dispatch = useAppDispatch();
  const [edit, setEdit] = useState(false);

  const handleShow = (): void => setEdit(!edit);

  const migrantWithNastavnik = useAppSelector((state) => state.userSlice.nastavnik).filter(
    (el) => el.id === user?.id,
  );
  const nastavnik = migrantWithNastavnik[0]?.Migrant;
  const [migr,setMigr]=useState(user)

  return (
    <Tabs defaultActiveKey="profile" id="justify-tab-example" className="mb-3" justify>
      <Tab eventKey="home" title="Личная страница">
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
              setMigr({ ...migr, ...formData });
              setEdit(false);
            }}
          >
            <div
              style={{ borderRadius: '50%', overflow: 'hidden', width: '300px', height: '300px' }}
            >
              <img
                src={migr.img}
                alt="Профиль пользователя"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
              />
            </div>

            {edit ? (
              <input
                name="name"
                style={{ width: '300px', paddingLeft: '30px', marginTop: '50px' }}
                defaultValue={migr.name}
              />
            ) : (
              <div style={{ width: '100%', textAlign: 'center', marginTop: '10px' }}>
                <h2>{migr.name}</h2>
              </div>
            )}
            {edit ? (
              <input
                name="info"
                style={{ width: '700px', paddingLeft: '30px', marginTop: '50px' }}
                defaultValue={migr.info}
              />
            ) : (
              <div style={{ marginTop: '50px' }}>
                <h4>{migr.info} </h4>
              </div>
            )}
            {edit ? (
              <input
                name="number"
                style={{ width: '300px', paddingLeft: '100px', marginTop: '50px' }}
                defaultValue={migr.number}
              />
            ) : (
              <div style={{ marginTop: '50px' }}>
                <p>Сотовый телефон:{migr.number}</p>
              </div>
            )}
            {edit ? (
              <input
                name="email"
                style={{ width: '300px', paddingLeft: '130px', marginTop: '50px' }}
                defaultValue={migr.email}
              />
            ) : (
              <div style={{ marginTop: '50px' }}>
                <p>
                  Email:
                  {migr.email}
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
        {/* <Row className="m-3">
                {candidatMentor.map((el) => (
                  <UserCard key={el.id} user={el} /> 
                ))}
              </Row> */}
      </Tab>
      <Tab eventKey="profile" title="Наставник">
        <Row className="m-3">
          {/* {user.statusId === 1 ? (
            nastavnik?.map((el) => <MentorCard key={el.id} user={el} />)
          ) : user.statusId === 3 ? (
            <Button
              onClick={() => {
                void dispatch(thunkZayvkaNaNastavnika({ id: user.id }));
                void dispatch(thunkRefreshToken());
              }}
            >
              Получить наставника
            </Button>
          ) : (
            user.statusId === 2 && <div>Скоро у вас появится наставник. Спасибо.</div>
          )} */}
          
        </Row>
      </Tab>
    </Tabs>
  );
}
