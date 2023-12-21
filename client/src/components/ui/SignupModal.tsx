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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormFields((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Modal show={show} onHide={handleCloseSignup}>
      <div >
      <Modal.Header closeButton> 
        <Modal.Title style={{fontFamily:'Gill Sans, sans-serif', fontSize: '30px'}}>Регистрация</Modal.Title>
      </Modal.Header >
      <Modal.Body  >
        <Form 
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const formData = Object.fromEntries(
              new FormData(e.currentTarget),
            ) as unknown as SignupFormData;
            console.log(formData, 'a;a;a;a;a;a;a');
            formData.roleId = selectedRole;

            if (selectedRole === '2' || Number(selectedRole) === 2) {
              formData.statusId = 2;
            } else if (selectedRole === '3' || Number(selectedRole) === 3) {
              formData.statusId = 3;
            }

            void dispatch(thunkSignup(formData));
            handleCloseSignup();
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label  style={{fontFamily:'Gill Sans, sans-serif', fontSize: '18px'}}>Имя:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Введите имя"
              name="name"
              value={formFields.name}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{fontFamily:'Gill Sans, sans-serif', fontSize: '18px'}}>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Введите email"
              name="email"
              value={formFields.email}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{fontFamily:'Gill Sans, sans-serif', fontSize: '18px'}}>Пароль:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Введите пароль"
              name="password"
              value={formFields.password}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{fontFamily:'Gill Sans, sans-serif', fontSize: '18px'}}>О себе:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Опишите себя"
              name="info"
              value={formFields.info}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{fontFamily:'Gill Sans, sans-serif', fontSize: '18px'}}>Телефон:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Введите номер телефона"
              name="number"
              value={formFields.number}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Select  style={{fontFamily:'Gill Sans, sans-serif', fontSize: '18px'}}
            aria-label="Default select example"
            onChange={(e) => setSelectedRole(e.target.value)} // Обработчик изменения для отслеживания выбранной роли
            value={selectedRole}
          >
            <option>Кто вы?</option>
            <option value="2">Наставник</option>
            <option value="3">Мигрант</option>
          </Form.Select>
          <br/>
          <Button style={{fontFamily:'Gill Sans, sans-serif', fontSize: '20px', backgroundColor: '#5fae32'}}
            disabled={!isFormValid || !selectedRole}
            className="btn btn-primary"
            type="submit"
          >
            Зарегистрироваться
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer />
      </div>
    </Modal>
  );
}
