import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { Col, Container, Row } from 'react-bootstrap';
import NovostCard from './NovostCard';
import EditNovostModal from './EditNovostModal';

export default function NovostiList(): JSX.Element {
  const novosti = useAppSelector((state) => state.novostiSlice.novosti);

  return (
    <Container className='rows'>
      <Row>
        {novosti.map((novost) => (
          <Col xs={2} key={novost.id}>
            <NovostCard novost={novost} />
          </Col>
        ))}
      </Row>
      <EditNovostModal />
    </Container>
  );
}
