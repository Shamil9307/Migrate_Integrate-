import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { Button, Col, Container, Row } from 'react-bootstrap';
import CultureCard from './CultureCard';

export default function CulturesList(): JSX.Element {
  const cultures = useAppSelector((state) => state.culturesSlice.cultures);
console.log(cultures)
  return (
    <Container>
      <Row>
        {cultures.map((culture) => (
          <Col xs={2} key={culture.id}>
            <CultureCard culture={culture} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
