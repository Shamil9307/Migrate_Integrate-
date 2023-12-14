import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { SignupFormData } from '../../types/auth';
import { thunkSignup } from '../../redux/slices/auth/createAsyncThunks';
import { useAppDispatch } from '../../redux/hooks';

export default function SignupPage(): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <Form onSubmit={(e) => {
      e.preventDefault();
      const formData = Object.fromEntries(new FormData(e.currentTarget)) as SignupFormData;
      void dispatch(thunkSignup(formData));
    }}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" name="name"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password"/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
