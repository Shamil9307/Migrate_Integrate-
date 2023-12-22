import React from 'react';
import { Modal } from 'react-bootstrap';
import { useAppDispatch } from '../../redux/hooks';
import type { AddLegalFormData } from '../../types/legals';
import { thunkPostLegal } from '../../redux/slices/legals/createAsyncThunks';

type AddRecModalProps = {
  showLegal: boolean;
  handleCloseLegal: () => void;
};

export default function AddLegalModal({
  showLegal,
  handleCloseLegal,
}: AddRecModalProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <Modal show={showLegal} onHide={handleCloseLegal}>
    <Modal.Header closeButton>
      <Modal.Title style={{fontFamily:'Gill Sans, sans-serif', fontSize: '30px'}}>Добавление "Правовой информации"</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = Object.fromEntries(new FormData(e.currentTarget)) as AddLegalFormData;
          void dispatch(thunkPostLegal(formData));
          handleCloseLegal();
        }}
      >
        <div className="mb-3">
          <label htmlFor="img" className="form-label" style={{fontFamily:'Gill Sans, sans-serif', fontSize: '18px'}}>Фото:</label>
          <input type="text" className="form-control" id="img" name="img" placeholder="Добавьте фото" />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label" style={{fontFamily:'Gill Sans, sans-serif', fontSize: '18px'}}>Название:</label>
          <input type="text" className="form-control" id="title" name="title" placeholder="Введите название" />
        </div>
        <div className="mb-3">
          <label htmlFor="text" className="form-label" style={{fontFamily:'Gill Sans, sans-serif', fontSize: '18px'}}>Текст:</label>
          <input type="text" className="form-control" id="text" name="text" placeholder="Введите текст" />
        </div>
        <div className="mb-3">
          <label htmlFor="url" className="form-label" style={{fontFamily:'Gill Sans, sans-serif', fontSize: '18px'}}>Url:</label>
          <input type="text" className="form-control" id="url" name="url" placeholder="Добавьте ссылку на сайт" />
        </div>
        <button type="submit" style={{fontFamily:'Gill Sans, sans-serif', fontSize: '18px', backgroundColor: '#5fae32'}}className="btn btn-primary">Добавить</button>
      </form>
    </Modal.Body>
    <Modal.Footer />
  </Modal>
  );
}
