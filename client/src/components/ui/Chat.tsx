import React from 'react';
import { Button, InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export default function Chat(): JSX.Element {
  return (
    <div>
      <div style={{ height: '700px', width: '900px', marginLeft:'220px'}}>
        <div style={{display:'flex'}}>
          <div style={{ width: '445px', height: '345px', backgroundColor: 'red' }}>a</div>
          <div style={{ width: '445px', height: '345px', backgroundColor: 'gray' }}>b</div>
        </div>
        <InputGroup className="mb-3">
          <Form.Control
            name="text"
            placeholder="Ваше сообщение"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            ➤
          </Button>
        </InputGroup>
      </div>
    </div>
  );
}
