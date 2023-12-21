import React, { useEffect, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { thunkLoadChat, thunkMesAdd } from '../../redux/slices/user/createAsyncThunks';
import type { AddFormText } from '../../types/auth';

export default function Chat(): JSX.Element {
  const dispatch = useAppDispatch();
  const chat = useAppSelector((store) => store.userSlice.chat);
  const [text, setText] = useState<string>(''); // Change to string for input value
  const [messages, setMessages] = useState(chat);

  useEffect(() => {
    // Set messages when chat updates
    setMessages(chat);
  }, [chat]);

  useEffect(() => {
    // Initial load
    void dispatch(thunkLoadChat());

    // Periodically fetch updates every 5 seconds (changed from 1.5 seconds)
    const intervalId = setInterval(() => {
      void dispatch(thunkLoadChat());
    }, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [dispatch]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = { text }; // Use text directly, no need for FormData
    void dispatch(thunkMesAdd(formData));
    setText(''); // Clear input after submitting
  };

  return (
    <div style={{ marginLeft: '50px' }}>
      <div
        style={{ height: '500px', width: '1200px', backgroundColor: 'white', overflowY: 'scroll' }}
      >
        {messages.map((el) => (
          <p key={el.id} style={{ color: 'black' }}>
            {el.text}
          </p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <Form.Control
            type="text" // Set input type to text
            placeholder="Введите сообщение"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            name="text"
            value={text} // Controlled input value
            onChange={(e) => setText(e.target.value)} // Handle input changes
          />
          <Button type="submit" variant="outline-secondary" id="button-addon2">
            отправить
          </Button>
        </InputGroup>
      </form>
    </div>
  );
}
