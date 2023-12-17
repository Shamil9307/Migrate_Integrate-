import React from 'react'
import { Modal } from 'react-bootstrap';
import { useAppDispatch } from '../../redux/hooks';
import type { AddLegalFormData } from '../../types/legals';
import { thunkPostLegal } from '../../redux/slices/legals/createAsyncThunks';

export default function AddLegalModal({showLegal, handleCloseLegal}):JSX.Element {
    const dispatch = useAppDispatch();
    return (
      <Modal show={showLegal} onHide={handleCloseLegal}>
        <Modal.Header closeButton>
          <Modal.Title>Добавление "правовая информация"</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = Object.fromEntries(
                new FormData(e.currentTarget),
              ) as AddLegalFormData;
              void dispatch(thunkPostLegal(formData));
              handleCloseLegal();
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
