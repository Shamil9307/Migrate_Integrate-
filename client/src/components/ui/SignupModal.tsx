import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Modal } from 'react-bootstrap';
import type { SignupFormData } from '../../types/auth';
import { useAppDispatch } from '../../redux/hooks';
import { thunkSignup } from '../../redux/slices/auth/createAsyncThunks';

type LoginModalProps = {
  show: boolean;
  handleCloseSignup: () => void;
};

export default function SignupModal({ show, handleCloseSignup }: LoginModalProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [mentorStatus, setMentorStatus] = useState(false);

  return (
    <Modal style={{ marginTop: '300px' }} show={show} onHide={handleCloseSignup}>
      <Modal.Header closeButton>
        <Modal.Title>Регистрация</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = Object.fromEntries(new FormData(e.currentTarget)) as SignupFormData;
            formData.statusId = mentorStatus ? 1 : 3; // Updated this line

            void dispatch(thunkSignup(formData));
            handleCloseSignup();
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Введите полное имя</Form.Label>
            <Form.Control type="text" placeholder="Введите полное имя" name="name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Введите email" name="email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="password" placeholder="Введите пароль" name="password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>О себе</Form.Label>
            <Form.Control type="text" placeholder="Опишите себя" name="info" />
          </Form.Group>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Хотите быть наставником?"
            checked={mentorStatus}
            onChange={() => setMentorStatus(!mentorStatus)}
          />
          <Button variant="primary" type="submit" style={{ marginLeft: '35px' }}>
            Зарегистрироваться
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer />
    </Modal>
  );
}
