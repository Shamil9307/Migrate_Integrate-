import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import type { LessonType } from '../../types/lesson';
import { useAppDispatch } from '../../redux/hooks';
import { thunkDeleteLesson } from '../../redux/slices/lessons/createAsyncThunks';
import { setSelectedLesson } from '../../redux/slices/lessons';

type LessonCardProps = {
  lesson: LessonType;
};
export default function LessonCard({ lesson }: LessonCardProps): JSX.Element {

  const dispatch = useAppDispatch()
  return (
    <Col xs={3} className="p-2">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={lesson.img} />
        <Card.Body>
          <Card.Title>{lesson.title}</Card.Title>
          <Card.Text>{lesson.text}</Card.Text>
          <Card.Text>{lesson.url}</Card.Text>
          <Button variant="danger" onClick={() => void dispatch(thunkDeleteLesson(lesson.id))}>Delete</Button>
          <Button variant="danger" onClick={() => dispatch(setSelectedLesson(lesson))}>edit</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
