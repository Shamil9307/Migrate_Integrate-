import React from 'react'
import { CultureType } from '../../types/cultures';
import { Button, Card } from 'react-bootstrap';

type CultureCardProps = {
    culture: CultureType;
  };

export default function CultureCard({culture}: CultureCardProps):JSX.Element {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={culture.img} />
      <Card.Body>
        <Card.Title>{culture.title}</Card.Title>
        <Card.Text>
          {culture.text}
        </Card.Text>
        <Card.Text>
          {culture.url}
        </Card.Text>
        <Button variant="secondary">Edit</Button>
        <Button variant="danger">Delete</Button>
      </Card.Body>
    </Card>
  )
}
