import React from 'react';
import { Container, Nav, NavDropdown, Navbar, Image, Button } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { thunkLogout } from '../../redux/slices/auth/createAsyncThunks';

export default function NavBar(): JSX.Element {
  const dispatch = useAppDispatch()
  const user = useAppSelector((store) => store.authSlice.user);

  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="#home">MIGRATE INTEGRATE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/signup">Регистрация</Nav.Link>
            <Nav.Link href="/login">Авторизация</Nav.Link>
            <Nav.Link href="/logout"  as={Button} onClick={() => void dispatch(thunkLogout())}>Выйти</Nav.Link>
            
            <NavDropdown title="---" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Тренинги</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Правовая информация</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Рекомендации</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Культура и досуг</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Получить куратора</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {user.status === 'authenticated' ? (
            <Image
              src="https://img.freepik.com/free-photo/front-view-portrait-of-a-beauty-young-female-face_186202-460.jpg"
              roundedCircle
              style={{ width: '60px', height: '60px', objectFit: 'cover', marginLeft: '20px' }}
            />
          ) : (
            <></>
          )}
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}