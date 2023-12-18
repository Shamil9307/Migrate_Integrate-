import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { Col, Container, Row } from 'react-bootstrap';
import LegalCard from './LegalCard';
import EditLegalModal from './EditLegalModal';

export default function LegalsList(): JSX.Element {
  const legals = useAppSelector((state) => state.legalsSlice.legals);

  return (
    <Container>
      <Row>
        {legals.map((legal) => (
          <Col xs={2} key={legal.id}>
            <LegalCard legal={legal} />
          </Col>
        ))}
      </Row>
      <EditLegalModal />
    </Container>
  );
}