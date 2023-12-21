import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useAppSelector } from '../../redux/hooks';
import LessonCard from './LessonCard';
import EditLessonModal from './EditLessonModal';

export default function LessonsList(): JSX.Element {
  const lessons = useAppSelector((store) => store.lessonsSlice.lessons);
  const [accordionOpen, setAccordionOpen] = useState<number | null>(null);

  const handleAccordionToggle = (lessonId: number) => {
    setAccordionOpen((prevId) => (prevId === lessonId ? null : lessonId));
  };

  return (
    <Container style={{ marginLeft: 'auto', transition: 'height 0.3s ease-in-out' }}>
      <Row>
        {lessons.map((lesson) => (
          <Col xs={6} key={lesson.id}>
            <LessonCard
              lesson={lesson}
              isOpen={accordionOpen === lesson.id}
              onToggle={() => handleAccordionToggle(lesson.id)}
            />
          </Col>
        ))}
      </Row>
      <EditLessonModal />
    </Container>
  );
}
