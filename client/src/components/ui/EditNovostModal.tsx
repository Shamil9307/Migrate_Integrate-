import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Button, Form, Modal } from 'react-bootstrap';
import { clearSelectedNovost } from '../../redux/slices/novosti';
import type { AddNovostFormData } from '../../types/novosti';
import { thunkEditNovost } from '../../redux/slices/novosti/createAsyncThunks';

export default function EditNovostModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedNovost = useAppSelector((state) => state.novostiSlice.selectedNovost);

  return (
    <Modal show={!!selectedNovost} onHide={() => dispatch(clearSelectedNovost())}>
      <Modal.Header closeButton>
        <Modal.Title>Редактирование новости</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = Object.fromEntries(new FormData(e.currentTarget)) as AddNovostFormData;
            void dispatch(thunkEditNovost({ formData, id: selectedNovost!.id }));
            dispatch(clearSelectedNovost());
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicBody">
            <Form.Label>IMG</Form.Label>
            <Form.Control
              defaultValue={selectedNovost?.img}
              name="img"
              type="text"
              as="textarea"
              rows={3}
              placeholder="Body"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>TITLE</Form.Label>
            <Form.Control
              defaultValue={selectedNovost?.title}
              name="title"
              type="text"
              placeholder="Enter title"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicBody">
            <Form.Label>TEXT</Form.Label>
            <Form.Control
              defaultValue={selectedNovost?.text}
              name="text"
              type="text"
              as="textarea"
              rows={3}
              placeholder="Body"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Изменить
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
