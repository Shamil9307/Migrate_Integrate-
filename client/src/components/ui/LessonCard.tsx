import React from 'react';
import { Accordion, Button, Card, Col, Container } from 'react-bootstrap';
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
<div className="card mt-2 col-4 mx-auto" style={{ width: '30rem'}}>
    <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0" style={{ height: '27rem'}}>
      <Container >
        <img src={lesson.url} alt="" style={{ height: '21rem'}}/>
      </Container>
      <Button variant="danger" onClick={() => void dispatch(thunkDeleteLesson(lesson.id))}>Delete</Button>
       <Button variant="danger" onClick={() => dispatch(setSelectedLesson(lesson))}>edit</Button>
      <Accordion.Header>{lesson.title}</Accordion.Header>
      <Accordion.Body>
{lesson.text}
      </Accordion.Body>
    </Accordion.Item>
 
  </Accordion>
    </div>
    // <Col xs={3} className="p-2">
    //   <Card style={{ width: '18rem' }}>
    //     <Card.Img variant="top" src={lesson.url} />
    //     <Card.Body>
    //       <Card.Title>{lesson.title}</Card.Title>
    //       <Card.Text>{lesson.text}</Card.Text>
    //       <Card.Text>{lesson.url}</Card.Text>
    //       <Button variant="danger" onClick={() => void dispatch(thunkDeleteLesson(lesson.id))}>Delete</Button>
    //       <Button variant="danger" onClick={() => dispatch(setSelectedLesson(lesson))}>edit</Button>
    //     </Card.Body>
    //   </Card>
    // </Col>
    
  );
}
