import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useAppSelector } from '../../redux/hooks';
import RecCard from '../ui/RecCard';
import EditCommentModal from '../ui/EditRecModal';

export default function Recomendation(): JSX.Element {
  const rec = useAppSelector((store) => store.recSlice.rocomendation);
  console.log('app', rec);
  return (
    <>
      <Row className="m-3">
        {rec.map((card) => (
          <RecCard key={card.id} card={card} />
        ))}
      </Row>
      <EditCommentModal />
    </>
  );
}
