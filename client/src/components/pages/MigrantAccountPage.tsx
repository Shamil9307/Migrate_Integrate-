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
  const [migr, setMigr] = useState(user);

  const [click, setClick] = useState(false);

  const changeHandler = () => {
    setClick(true);
  };
  return (
    <div
      style={{
        fontFamily: 'Gill Sans, sans-serif',
        fontSize: '18px',
        fontWeight: '400',
        color: 'white',
      }}
    >
      <Tabs defaultActiveKey="profile" id="justify-tab-example" className="mb-6" justify>
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
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    marginTop: '10px',
                  }}
                />
              </div>

              {edit ? (
                <input
                  name="name"
                  placeholder="Имя"
                  style={{
                    width: '700px',
                    height: '60px',
                    paddingLeft: '20px',
                    marginTop: '20px',
                    fontFamily: 'Gill Sans, sans-serif',
                    fontSize: '18px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    boxSizing: 'border-box',
                  }}
                  defaultValue={migr.name}
                />
              ) : (
                <div
                  style={{
                    width: '200px',
                    height: '30px',
                    textAlign: 'center',
                    marginTop: '10px',
                    fontFamily: 'Gill Sans, sans-serif',
                    fontSize: '23px',
                  }}
                >
                  <p>Имя: {migr.name}</p>
                </div>
              )}
              {edit ? (
                <input
                  name="info"
                  placeholder="Информация о себе"
                  style={{
                    width: '700px',
                    height: '60px',
                    paddingLeft: '20px',
                    marginTop: '20px',
                    fontFamily: 'Gill Sans, sans-serif',
                    fontSize: '18px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    boxSizing: 'border-box',
                  }}
                  defaultValue={migr.info}
                />
              ) : (
                <div
                  style={{
                    marginTop: '20px',
                    fontFamily: 'Gill Sans, sans-serif',
                    fontSize: '23px',
                  }}
                >
                  <br />
                  <p>Информация о себе: {migr.info} </p>
                </div>
              )}
              {edit ? (
                <input
                  name="number"
                  placeholder="Номер телефона"
                  style={{
                    width: '700px',
                    height: '60px',
                    paddingLeft: '20px',
                    marginTop: '20px',
                    fontFamily: 'Gill Sans, sans-serif',
                    fontSize: '18px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    boxSizing: 'border-box',
                  }}
                  defaultValue={migr.number}
                />
              ) : (
                <div
                  style={{
                    marginTop: '10px',
                    fontFamily: 'Gill Sans, sans-serif',
                    fontSize: '23px',
                  }}
                >
                  <p>Номер телефона: {migr.number}</p>
                </div>
              )}
              {edit ? (
                <input
                name="email"
                placeholder="Email"
                style={{
                  width: '700px',
                  height: '60px',
                  paddingLeft: '20px',
                  marginTop: '20px',
                  fontFamily: 'Gill Sans, sans-serif',
                  fontSize: '18px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  boxSizing: 'border-box',
                  backgroundColor: '#f5f5f5', // Светло-серый фон
                }}
                defaultValue={migr.email}
                />
              ) : (
                <div
                  style={{
                    fontFamily: 'Gill Sans, sans-serif',
                    fontSize: '18px',
                    marginTop: '20px',
                  }}
                >
                  <p>
                    Email:
                    {migr.email}
                  </p>
                </div>
              )}

              {edit ? (
                <Button
                  type="submit"
                  style={{
                    fontFamily: 'Gill Sans, sans-serif',
                    fontSize: '18px',
                    backgroundColor: '#5fae32',
                    marginTop: '20px',
                  }}
                >
                  Сохранить
                </Button>
              ) : (
                <></>
              )}
              <div />
            </form>
            {edit ? (
              <></>
            ) : (
              <Button
                type="button"
                onClick={handleShow}
                style={{
                  fontFamily: 'Gill Sans, sans-serif',
                  fontSize: '18px',
                  backgroundColor: '#5fae32',
                }}
              >
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
        <Tab
          eventKey="profile"
          title="Наставник"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <>
            {user.statusId === 1 ? (
              nastavnik?.map((el) => <MentorCard key={el.id} user={el} />)
            ) : !click ? (
              <Button
                style={{
                  fontFamily: 'Gill Sans, sans-serif',
                  fontSize: '20px',
                  backgroundColor: '#5fae32',
                  margin: '0 auto',
                  display: 'block',
                  marginTop: '40px',
                  marginBottom: '20px',
                }}
                onClick={() => {
                  void dispatch(thunkZayvkaNaNastavnika({ id: user.id }));
                  void dispatch(thunkRefreshToken());
                  changeHandler();
                }}
              >
                Получить наставника
              </Button>
            ) : (
              <div
                style={{
                  fontSize: '20px',
                  fontFamily: 'Gill Sans, sans-serif',
                  textAlign: 'center',
                  marginBottom: '500px',
                }}
              >
                <br />
                <div style={{ height: '40px', borderRadius: '10%' }}>
                  <h3>
                    Благодарим за ваш интерес! В ближайшее время мы подберем для вас наставника!
                  </h3>
                </div>
              </div>
            )}
          </>
        </Tab>
      </Tabs>
    </div>
  );
}
