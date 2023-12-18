import React, { useState }, { useState } from 'react';
import { Container, Nav, NavDropdown, Navbar, Image, Button } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { thunkLogout } from '../../redux/slices/auth/createAsyncThunks';
import AddRecModal from './AddRecModal';
import AddCultureModal from './AddCultureModal';
import AddLegalModal from './AddLegalModal';
import AddNovostModal from './AddNovostModal';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import AddLessonModal from './AddLessonModal';

export default function NavBar(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.authSlice.user);

  const [show, setShow] = useState(false);
  const [openLogModal, setOpenLogModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);

  const handleClose = (): void => setShow(false);
  const handleShow = (): void => setShow(true);

  const handleCloseLogin = (): void => setOpenLogModal(false);
  const handleShowLogin = (): void => setOpenLogModal(true);
  const handleCloseSignup = (): void => setOpenSignupModal(false);
  const handleShowSignup = (): void => setOpenSignupModal(true);


  const [showCulture, setShowCulture] = useState(false);
  const handleCloseCulture = (): void => setShowCulture(false);
  const handleShowCulture = (): void => setShowCulture(true);

  const [showLegal, setShowLegal] = useState(false);
  const handleCloseLegal = (): void => setShowLegal(false);
  const handleShowLegal = (): void => setShowLegal(true);

  const [showNovost, setShowNovost] = useState(false);
  const handleCloseNovost = (): void => setShowNovost(false);
  const handleShowNovost = (): void => setShowNovost(true);


  const [showLesson, setShowLesson] = useState(false);

  const handleCloseLesson = (): void => setShowLesson(false);
  const handleShowLesson = (): void => setShowLesson(true);

  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="#home">MIGRATE INTEGRATE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="/signup"
              onClick={(e) => {
                e.preventDefault();
                handleShowSignup();
              }}
            >
              Регистрация
            </Nav.Link>
            <Nav.Link
              href="/login"
              onClick={(e) => {
                e.preventDefault();
                handleShowLogin();
              }}
            >
              Авторизация
            </Nav.Link>
            <Nav.Link href="/logout" as={Button} onClick={() => void dispatch(thunkLogout())}>
              Выйти
            </Nav.Link>

            <NavDropdown title="---" id="basic-nav-dropdown">
              <NavDropdown.Item href="/lesson">Тренинги</NavDropdown.Item>
              <NavDropdown.Item href="/legal">Правовая информация</NavDropdown.Item>
              <NavDropdown.Item href="/recomendation">Рекомендации</NavDropdown.Item>
              <NavDropdown.Item href="/culture">Культура и досуг</NavDropdown.Item>
              <NavDropdown.Item href="/news">Новости</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Получить куратора</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Добавить" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={handleShow}>Рекомендации</NavDropdown.Item>
              <NavDropdown.Item onClick={handleShowCulture}>Культура и досуг</NavDropdown.Item>
              <NavDropdown.Item onClick={handleShowLegal}>Правовая информация</NavDropdown.Item>
              <NavDropdown.Item onClick={handleShowNovost}>Новости</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Добавить" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={handleShowLesson}>Тренинги</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {user.status === 'authenticated' ? (
            < a href={user.id ===1?('/lk'):('/account')}>
              <Image
                src={user.img}
                roundedCircle
                style={{ width: '60px', height: '60px', objectFit: 'cover', marginLeft: '20px' }}
              />
            </a>
          ) : (
            <> </>
          )}
        </Navbar.Collapse>
        <AddRecModal show={show} handleClose={handleClose} />
        <LoginModal show={openLogModal} handleCloseLogin={handleCloseLogin} />
        <SignupModal show={openSignupModal} handleCloseSignup={handleCloseSignup} />
        <AddCultureModal showCulture={showCulture} handleCloseCulture={handleCloseCulture}/>
        <AddLegalModal showLegal={showLegal} handleCloseLegal={handleCloseLegal} />
        <AddNovostModal showNovost={showNovost} handleCloseNovost={handleCloseNovost} />
        <AddLessonModal showLesson={showLesson} handleCloseLesson={handleCloseLesson}/>
      </Navbar>
    </Container>
  );
}
