import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { clearSelectedLegal } from '../../redux/slices/legals';
import type { AddLegalFormData } from '../../types/legals';
import { thunkEditLegal } from '../../redux/slices/legals/createAsyncThunks';

export default function EditLegalModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedLegal = useAppSelector((state) => state.legalsSlice.selectedLegal);

  return (
    <Modal show={!!selectedLegal} onHide={() => dispatch(clearSelectedLegal())}>
      <Modal.Header closeButton>
        <Modal.Title style={{fontFamily:'Gill Sans, sans-serif', fontSize: '30px'}}>Редактирование "Правовой информации"</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = Object.fromEntries(new FormData(e.currentTarget)) as AddLegalFormData;
            void dispatch(thunkEditLegal({ formData, id: selectedLegal.id }));
            dispatch(clearSelectedLegal());
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicBody" >
            <Form.Label style={{fontFamily:'Gill Sans, sans-serif', fontSize: '18px'}}>Img:</Form.Label>
            <Form.Control
              defaultValue={selectedLegal?.img}
              name="img"
              type="text"
              as="textarea"
              rows={3}
              placeholder="Вставьте фото"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label style={{fontFamily:'Gill Sans, sans-serif', fontSize: '18px'}}>Title:</Form.Label>
            <Form.Control
              defaultValue={selectedLegal?.title}
              name="title"
              type="text"
              placeholder="Введите заголовок"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicBody">
            <Form.Label style={{fontFamily:'Gill Sans, sans-serif', fontSize: '18px'}}>Text:</Form.Label>
            <Form.Control
              defaultValue={selectedLegal?.text}
              name="text"
              type="text"
              as="textarea"
              rows={3}
              placeholder="Введите текст"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicBody">
            <Form.Label style={{fontFamily:'Gill Sans, sans-serif', fontSize: '18px'}}>Url:</Form.Label>
            <Form.Control
              defaultValue={selectedLegal?.url}
              name="url"
              type="text"
              as="textarea"
              rows={3}
              placeholder="Вставьте ссылку фото"
            />
          </Form.Group>

          <Button variant="primary" type="submit" style={{fontFamily:'Gill Sans, sans-serif', fontSize: '18px', backgroundColor: '#5fae32'}}>
            Изменить
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
