import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import type { SignupFormData } from '../../types/auth';
import { thunkSignup } from '../../redux/slices/auth/createAsyncThunks';
import { useAppDispatch } from '../../redux/hooks';

export default function SignupPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [mentorStatus, setMentorStatus] = useState(false);

  return (
    <Container style={{ display: 'flex', justifyContent: 'center', marginTop: '300px' }}>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = Object.fromEntries(new FormData(e.currentTarget)) as SignupFormData;
          formData.statusId = mentorStatus ? 1 : 3; // Updated this line

          void dispatch(thunkSignup(formData));
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
    </Container>
  );
}
