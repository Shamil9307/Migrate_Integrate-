import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { thunkEditRec } from '../../redux/slices/recpmindation/createAsyncThunks';
import type { AddCommentFormData } from '../../types/recomedation';
import { clearSelectedRes } from '../../redux/slices/recpmindation';

export default function EditRecModal(): JSX.Element {
  const selectedRec = useAppSelector((store) => store.recSlice.selectedRes);

  const dispatch = useAppDispatch();
  return (
    <Modal show={!!selectedRec} onHide={() => dispatch(clearSelectedRes())}>
      <Modal.Header closeButton>
        <Modal.Title>Редактирование коммента</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = Object.fromEntries(
              new FormData(e.currentTarget),
            ) as AddCommentFormData;

            void dispatch(thunkEditRec({ formData, id: selectedRec.id }));
            dispatch(clearSelectedRes());
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              defaultValue={selectedRec?.title}
              name="title"
              type="text"
              placeholder="Enter title"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicBody">
            <Form.Label>Body</Form.Label>
            <Form.Control
              defaultValue={selectedRec?.text}
              name="text"
              type="text"
              as="textarea"
              rows={3}
              placeholder="Body"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicBody">
            <Form.Label>Body</Form.Label>
            <Form.Control
              defaultValue={selectedRec?.img}
              name="img"
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
