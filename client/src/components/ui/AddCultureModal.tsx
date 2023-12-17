import React from 'react'
import { Modal } from 'react-bootstrap';
import { useAppDispatch } from '../../redux/hooks';
import type { AddCultureFormData } from '../../types/cultures';
import { thunkPostCulture } from '../../redux/slices/cultures/createAsyncThunks';

export default function AddCultureModal({showCulture, handleCloseCulture}):JSX.Element {
    const dispatch = useAppDispatch();
    return (
      <Modal show={showCulture} onHide={handleCloseCulture}>
        <Modal.Header closeButton>
          <Modal.Title>Добавление "культура и досуг"</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = Object.fromEntries(
                new FormData(e.currentTarget),
              ) as AddCultureFormData;
              void dispatch(thunkPostCulture(formData));
              handleCloseCulture();
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
