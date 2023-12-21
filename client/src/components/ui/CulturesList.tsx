import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useAppSelector } from '../../redux/hooks';
import CultureCard from './CultureCard';
import EditCultureModal from './EditCultureModal';

export default function CulturesList(): JSX.Element {
  const cultures = useAppSelector((state) => state.culturesSlice.cultures);

  return (
    <Container>
      <Row>
        {cultures.map((culture) => (
          <Col xs={2} key={culture.id}>
            <CultureCard culture={culture} />
          </Col>
        ))}
      </Row>
      <EditCultureModal />
    </Container>
  );
}
