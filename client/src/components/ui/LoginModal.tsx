import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Modal } from 'react-bootstrap';
import type { LoginFormData } from '../../types/auth';
import { useAppDispatch } from '../../redux/hooks';
import { thunkLogin } from '../../redux/slices/auth/createAsyncThunks';

type LoginModalProps = {
  show: boolean;
  handleCloseLogin: () => void;
};

export default function LoginModal({ show, handleCloseLogin }: LoginModalProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <Modal style={{marginTop:"150px"}} show={show} onHide={handleCloseLogin}>
      <Modal.Header closeButton>
        <Modal.Title>Авторизация</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = Object.fromEntries(new FormData(e.currentTarget)) as LoginFormData;
           void dispatch(thunkLogin(formData));
            handleCloseLogin(); 
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Электронная почта</Form.Label>
            <Form.Control type="email" name="email" placeholder="Введите электронную почту" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="password" name="password" placeholder="Введите пароль" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Авторизоваться
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer />
    </Modal>
  );
}
