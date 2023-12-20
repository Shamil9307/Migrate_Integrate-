import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useAppSelector } from '../../redux/hooks';
import LegalCard from './LegalCard';
import EditLegalModal from './EditLegalModal';

export default function LegalsList(): JSX.Element {
  const legals = useAppSelector((state) => state.legalsSlice.legals);

  return (
    <Container>
      <Row>
        {legals.map((legal) => (
          <Col xs={6} key={legal.id}>
            <LegalCard legal={legal} />
          </Col>
        ))}
      </Row>
      <EditLegalModal />
    </Container>
  );
}
