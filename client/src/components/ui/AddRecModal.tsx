import React from 'react';
import { Button, InputGroup, Modal } from 'react-bootstrap';

import type { AddCommentFormData } from '../../types/recomedation';
import { useAppDispatch } from '../../redux/hooks';
import { thunkRecAdd } from '../../redux/slices/recpmindation/createAsyncThunks';

type AddRecModalProps = {
  show: boolean;
  handleClose: () => void;
};
export default function AddRecModal({ show, handleClose }: AddRecModalProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title  style={{fontFamily:'Gill Sans, sans-serif', fontSize: '30px'}}>Добавление "Рекомендации"</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = Object.fromEntries(new FormData(e.currentTarget)) as AddCommentFormData;
          void dispatch(thunkRecAdd(formData));
          handleClose();
        }}
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label"  style={{fontFamily:'Gill Sans, sans-serif', fontSize: '18px'}}>Название:</label>
          <input type="text" className="form-control" id="title" name="title" placeholder="Введите название" />
        </div>
        <div className="mb-3">
          <label htmlFor="text" className="form-label"  style={{fontFamily:'Gill Sans, sans-serif', fontSize: '18px'}}>Описание:</label>
          <input type="text" className="form-control" id="text" name="text" placeholder="Введите описание" />
        </div>
        <div className="mb-3">
          <label htmlFor="img" className="form-label"  style={{fontFamily:'Gill Sans, sans-serif', fontSize: '18px'}}>URL:</label>
          <input type="text" className="form-control" id="img" name="img" placeholder="Вставьте ссылку картинки" />
        </div>
        <button type="submit" className="btn btn-primary" style={{fontFamily:'Gill Sans, sans-serif', fontSize: '18px', backgroundColor: '#5fae32'}}>Добавить</button>
      </form>
    </Modal.Body>
    <Modal.Footer />
  </Modal>
  );
}
