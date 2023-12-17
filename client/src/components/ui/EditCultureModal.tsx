import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { Button, Form, Modal } from 'react-bootstrap'
import { clearSelectedCulture } from '../../redux/slices/cultures'
import type { AddCultureFormData } from '../../types/cultures'
import { thunkEditCulture } from '../../redux/slices/cultures/createAsyncThunks'

export default function EditCultureModal():JSX.Element {
    const dispatch = useAppDispatch()
    const selectedCulture = useAppSelector((state) => state.culturesSlice.selectedCulture)

  return (
    <Modal show={!!selectedCulture} onHide={() => dispatch(clearSelectedCulture())}>
      <Modal.Header closeButton>
        <Modal.Title>Редактирование культуры&досуга</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = Object.fromEntries(
              new FormData(e.currentTarget),
            ) as AddCultureFormData;           
            void dispatch(thunkEditCulture({ formData, id:selectedCulture!.id }));
            dispatch(clearSelectedCulture());
          }}
        >
            <Form.Group className="mb-3" controlId="formBasicBody">
            <Form.Label>IMG</Form.Label>
            <Form.Control
              defaultValue={selectedCulture?.img}
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
              defaultValue={selectedCulture?.title}
              name="title"
              type="text"
              placeholder="Enter title"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicBody">
            <Form.Label>TEXT</Form.Label>
            <Form.Control
              defaultValue={selectedCulture?.text}
              name="text"
              type="text"
              as="textarea"
              rows={3}
              placeholder="Body"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicBody">
            <Form.Label>URL</Form.Label>
            <Form.Control
              defaultValue={selectedCulture?.url}
              name="url"
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
  )
}
