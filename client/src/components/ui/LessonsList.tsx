import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useAppSelector } from '../../redux/hooks';
import LessonCard from './LessonCard';
import EditLessonModal from './EditLessonModal';


export default function LessonsList(): JSX.Element {
  const lessons = useAppSelector((store) => store.lessonsSlice.lessons);
  
  return (
    <Container>
      <Row>
        {lessons.map((lesson) => (
          <Col xs={2} key={lesson.id}>
            <LessonCard lesson={lesson} />
          </Col>
        ))}
      </Row>
      <EditLessonModal/>
    </Container>
  );
}
