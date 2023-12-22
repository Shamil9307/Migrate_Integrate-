import React from 'react'
import { Modal } from 'react-bootstrap';
import { useAppDispatch } from '../../redux/hooks';
import type { AddCultureFormData } from '../../types/cultures';
import { thunkPostCulture } from '../../redux/slices/cultures/createAsyncThunks';

type AddRecModalProps = {
  showCulture: boolean;
  handleCloseCulture: () => void;
};

export default function AddCultureModal({showCulture, handleCloseCulture}:AddRecModalProps):JSX.Element {
    const dispatch = useAppDispatch();
    return (
      <Modal show={showCulture} onHide={handleCloseCulture}>
      <div>
        <Modal.Header closeButton>
          <Modal.Title style={{fontFamily:'Gill Sans, sans-serif', fontSize: '30px'}}>Добавление "Культура и Досуг"</Modal.Title>
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
            <div className="mb-3">
              <label htmlFor="img" className="form-label"  style={{fontFamily:'Gill Sans, sans-serif', fontSize: '18px'}}>Фото:</label>
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
              <label htmlFor="url" className="form-label" style={{fontFamily:'Gill Sans, sans-serif', fontSize: '18px'}}>URL:</label>
              <input type="text" className="form-control" id="url" name="url" placeholder="Добавить ссылку на сайт" />
            </div>
            <button type="submit" className="btn btn-primary" style={{fontFamily:'Gill Sans, sans-serif', fontSize: '18px', backgroundColor: '#5fae32'}}>Добавить</button>
          </form>
        </Modal.Body>
        <Modal.Footer />
      </div>
    </Modal>
    );
}
