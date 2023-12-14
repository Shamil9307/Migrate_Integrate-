import React from 'react';
import { Card } from 'react-bootstrap';
import { useAppSelector } from '../../redux/hooks';
import RecCard from '../ui/RecCard';

export default function Recomendation(): JSX.Element {
  const rec = useAppSelector((store) => store.recSlice.rocomendation);
  console.log('app', rec);
  return (
    <div>
      {rec.map((card) => (
        <RecCard key={card.id} card={card} />
      ))}
    </div>
  );
}
