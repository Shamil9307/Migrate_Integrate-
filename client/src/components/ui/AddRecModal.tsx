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
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = Object.fromEntries(
              new FormData(e.currentTarget),
            ) as AddCommentFormData;
            void dispatch(thunkRecAdd(formData));
            handleClose();
          }}
        >
          <input type="text" name="title" placeholder="название" />
          <input type="text" name="text" placeholder="описание" />
          <input type="text" name="img" placeholder="картинка" />
          <button type="submit">Добавить</button>
        </form>
      </Modal.Body>
      <Modal.Footer />
    </Modal>
  );
}
