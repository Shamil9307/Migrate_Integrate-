import React from 'react';
import { Modal } from 'react-bootstrap';
import { useAppDispatch } from '../../redux/hooks';
import { thunkPostLesson } from '../../redux/slices/lessons/createAsyncThunks';
import type { AddLessonFormData } from '../../types/lesson';

type AddRecModalProps = {
  showLesson: boolean;
  handleCloseLesson: () => void;
};
export default function AddLessonModal({
  showLesson,
  handleCloseLesson,
}: AddRecModalProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <Modal show={showLesson} onHide={handleCloseLesson}>
      <Modal.Header closeButton>
        <Modal.Title>Добавление урока</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = Object.fromEntries(new FormData(e.currentTarget)) as AddLessonFormData;
            void dispatch(thunkPostLesson(formData));
            handleCloseLesson();
          }}
        >
          <input type="text" name="img" placeholder="Фото" />
          <input type="text" name="title" placeholder="Название" />
          <input type="text" name="text" placeholder="Текст" />
          <input type="text" name="url" placeholder="URL" />
          <button type="submit">Добавить</button>
        </form>
      </Modal.Body>
      <Modal.Footer />
    </Modal>
  );
}
