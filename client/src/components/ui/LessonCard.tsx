import React from 'react';
import { Accordion, Button, Card, Col, Container } from 'react-bootstrap';
import type { LessonType } from '../../types/lesson';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { thunkDeleteLesson } from '../../redux/slices/lessons/createAsyncThunks';
import { setSelectedLesson } from '../../redux/slices/lessons';
import type { UserType } from '../../types/auth';

type LessonCardProps = {
  lesson: LessonType;
};
export default function LessonCard({ lesson }: LessonCardProps): JSX.Element {
  const user = useAppSelector((state) => state.authSlice.user) as UserType;

  const dispatch = useAppDispatch();
  return (
    <div className="card mt-2 col-4 mx-auto" style={{ width: '35rem', marginBottom: '800px' }}>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0" style={{ height: '27rem' }}>
          <Container>
            <img src={lesson.url} alt="" style={{ height: '20rem' }} />
          </Container>
          {user.id ===1 &&
          <>
          <Button variant="danger" onClick={() => void dispatch(thunkDeleteLesson(lesson.id))}>
            Удалить
          </Button>
          <Button variant="danger" onClick={() => dispatch(setSelectedLesson(lesson))}>
            Редактировать
          </Button>
          </>}
          <Accordion.Header>{lesson.title}</Accordion.Header>
          <Accordion.Body style={{ backgroundColor: 'white', marginBottom: '150px' }}>
            {lesson.text}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
