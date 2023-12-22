import React, { useState } from 'react';
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
  const [formFields, setFormFields] = useState({
    email: '',
    password: '',
  });

  const isFormValid = Object.values(formFields).every((field) => field.trim() !== '');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Modal style={{ marginTop: '150px' }} show={show} onHide={handleCloseLogin}>
      <div>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontFamily: 'Gill Sans, sans-serif', fontSize: '30px' }}>
            Авторизация
          </Modal.Title>
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
              <Form.Label style={{ fontFamily: 'Gill Sans, sans-serif', fontSize: '18px' }}>
                Email:
              </Form.Label>
              <Form.Control type="email" name="email" placeholder="Введите email"     value={formFields.email}
              onChange={handleInputChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{ fontFamily: 'Gill Sans, sans-serif', fontSize: '18px' }}>
                Пароль:
              </Form.Label>
              <Form.Control type="password" name="password" placeholder="Введите пароль"     value={formFields.password}
              onChange={handleInputChange}/>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{
                fontFamily: 'Gill Sans, sans-serif',
                fontSize: '20px',
                backgroundColor: '#5fae32',
              }}
              disabled={!isFormValid}
            >
              Авторизоваться
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer />
      </div>
    </Modal>
  );
}
