import React from 'react';
import { Modal } from 'react-bootstrap';
import { useAppDispatch } from '../../redux/hooks';
import type { AddNovostFormData } from '../../types/novosti';
import { thunkPostNovost } from '../../redux/slices/novosti/createAsyncThunks';

type AddRecModalProps = {
  showNovost: boolean;
  handleCloseNovost: () => void;
};

export default function AddNovostModal({
  showNovost,
  handleCloseNovost,
}: AddRecModalProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <Modal show={showNovost} onHide={handleCloseNovost}>
      <Modal.Header closeButton>
        <Modal.Title>Добавление Новость</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = Object.fromEntries(new FormData(e.currentTarget)) as AddNovostFormData;
            void dispatch(thunkPostNovost(formData));
            handleCloseNovost();
          }}
        >
          <input type="text" name="img" placeholder="Фото" />
          <input type="text" name="title" placeholder="Название" />
          <input type="text" name="text" placeholder="Текст" />
          <button type="submit">Добавить</button>
        </form>
      </Modal.Body>
      <Modal.Footer />
    </Modal>
  );
}
