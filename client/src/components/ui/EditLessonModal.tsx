import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { thunkEditRec } from '../../redux/slices/recpmindation/createAsyncThunks';
import type { AddCommentFormData } from '../../types/recomedation';
import { clearSelectedRes } from '../../redux/slices/recpmindation';
import { clearSelectedLesson } from '../../redux/slices/lessons';
import type { AddLessonFormData } from '../../types/lesson';
import { thunkEditLesson } from '../../redux/slices/lessons/createAsyncThunks';

export default function EditLessonModal(): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedLesson = useAppSelector((store) => store.lessonsSlice.selectedLesson);

  return (
    <Modal show={!!selectedLesson} onHide={() => dispatch(clearSelectedLesson())}>
      <Modal.Header closeButton>
        <Modal.Title>Редактирование урока!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = Object.fromEntries(new FormData(e.currentTarget)) as AddLessonFormData;
            void dispatch(thunkEditLesson({ formData, id: selectedLesson!.id }));
            dispatch(clearSelectedLesson());
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              defaultValue={selectedLesson?.title}
              name="title"
              type="text"
              placeholder="Enter title"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicBody">
            <Form.Label>Text</Form.Label>
            <Form.Control
              defaultValue={selectedLesson?.text}
              name="text"
              type="text"
              as="textarea"
              rows={3}
              placeholder="Body"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicBody">
            <Form.Label>img</Form.Label>
            <Form.Control
              defaultValue={selectedLesson?.img}
              name="img"
              type="text"
              as="textarea"
              rows={3}
              placeholder="Body"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicBody">
            <Form.Label>url</Form.Label>
            <Form.Control
              defaultValue={selectedLesson?.url}
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
  );
}
