import React, { useEffect, useState, useRef } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { thunkLoadChat, thunkMesAdd } from '../../redux/slices/user/createAsyncThunks';

export default function Chat(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.authSlice.user);
  const chat = useAppSelector((store) => store.userSlice.chat);
  const [text, setText] = useState<string>('');
  const [messages, setMessages] = useState(chat);
  const [displayedMessages, setDisplayedMessages] = useState(20);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages(chat);
  }, [chat]);

  useEffect(() => {
    void dispatch(thunkLoadChat());

    const intervalId = setInterval(() => {
      void dispatch(thunkLoadChat());
    }, 1500);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = { text, userId: user.id };
    void dispatch(thunkMesAdd(formData));
    setText('');
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const displayedMessagesSlice = messages
    .slice(Math.max(messages.length - displayedMessages, 0), messages.length)
    .map((el) => (
      // <div key={el.id} style={{el.User.id === user.id? backgroundcolor:'blue'| white display: 'flex' }}>
      <div key={el.id} style={{ display: 'flex' }}>
        <div>
          <img
            src={el?.User?.img}
            alt="photo"
            style={{
              width: '40px',
              height: '40px',
              objectFit: 'cover',
              marginRight: '20px',
              borderRadius: '50%',
            }}
          />
        </div>
        <div >
          {el.User?.name}:{' '}
        </div>
        <div >
          {el?.text}
        </div>
      </div>
    ));

  return (
    <div style={{ marginLeft: '50px' }}>
      <div
        style={{
          width: '1200px',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          maxHeight: '800px',
        }}
      >
        {displayedMessagesSlice}
        <div ref={messagesEndRef} />
        <form onSubmit={handleSubmit}>
          <InputGroup className="mb-3" style={{ width: '1200px' }}>
            <Form.Control
              type="text"
              placeholder="Введите сообщение"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              name="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button type="submit" variant="outline-secondary" id="button-addon2">
              ➤
            </Button>
          </InputGroup>
        </form>
      </div>
    </div>
  );
}
