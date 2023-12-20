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

  const [selectedRole, setSelectedRole] = useState('');
  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    password: '',
    info: '',
    number: '',
  });

  const isFormValid = Object.values(formFields).every((field) => field.trim() !== '');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Modal style={{ marginTop: '300px' }} show={show} onHide={handleCloseSignup}>
      <Modal.Header closeButton>
        <Modal.Title>Регистрация</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const formData = Object.fromEntries(
              new FormData(e.currentTarget),
            ) as unknown as SignupFormData;
            console.log(formData, 'a;a;a;a;a;a;a');
            formData.roleId = selectedRole;

            if (selectedRole === '2' || selectedRole === 2) {
              formData.statusId = 2;
            } else if (selectedRole === '3' || selectedRole === 3) {
              formData.statusId = 3;
            }

            void dispatch(thunkSignup(formData));
            handleCloseSignup();
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Введите полное имя:</Form.Label>
            <Form.Control type="text" placeholder="Введите полное имя" name="name"  value={formFields.name}
            onChange={handleInputChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="Введите email" name="email"  value={formFields.email}
            onChange={handleInputChange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Пароль:</Form.Label>
            <Form.Control type="password" placeholder="Введите пароль" name="password"  value={formFields.password}
            onChange={handleInputChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>О себе:</Form.Label>
            <Form.Control type="text" placeholder="Опишите себя" name="info"  value={formFields.info}
            onChange={handleInputChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Номер:</Form.Label>
            <Form.Control type="text" placeholder="Номер" name="number"  value={formFields.number}
            onChange={handleInputChange}/>
          </Form.Group>

          <Form.Select
            aria-label="Default select example"
            onChange={(e) => setSelectedRole(e.target.value)} // Обработчик изменения для отслеживания выбранной роли
            value={selectedRole}
          >
            <option>Кто вы?</option>
            <option value="2">Наставник</option>
            <option value="3">Мигрант</option>
          </Form.Select>
          <Button
            disabled={!isFormValid || !selectedRole}
            className="btn btn-primary"
            type="submit"
          >
            Зарегистрироваться
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer />
    </Modal>
  );
}
