import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setSelectedLegal } from '../../redux/slices/legals';
import { thunkDeleteLegal } from '../../redux/slices/legals/createAsyncThunks';
import type { LegalType } from '../../types/legals';

type LegalCardProps = {
  legal: LegalType;
};

const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  }
  const truncatedText = text.substr(0, maxLength);
  return `${truncatedText}...`;
};

export default function LegalCard({ legal }: LegalCardProps): JSX.Element {
  const [showFullText, setShowFullText] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.authSlice.user);

  return (
    <div>
      <Card
        style={{ width: '30rem', marginTop: '60px', marginBottom: '100px' }}
        className="mb-4 d-flex justify-content-center"
      >
        <Card.Img
          variant="top"
          src={legal.img}
          style={{
            objectFit: 'cover',
            height: '300px', // Замените на желаемую высоту
            width: '100%', // Автоматически подстраивается по ширине
          }}
        />
        <Card.Body className="text-center">
          <Card.Title>{legal.title}</Card.Title>
          <Card.Text>
            {showFullText ? legal.text : truncateText(legal.text, 50)}
          </Card.Text>
          {legal.text.length > 50 && (
            <Button
              variant="link"
              onClick={() => setShowFullText(!showFullText)}
            >
              {showFullText ? 'Свернуть' : 'Читать далее...'}
            </Button>
          )}
          <div className="d-flex justify-content-center gap-3">
            {user.id === 1 && (
              <>
                <Button
                  variant="secondary"
                  style={{
                    fontFamily: 'Gill Sans, sans-serif',
                    fontSize: '18px',
                    backgroundColor: '#5fae32',
                    width: '150px',
                  }}
                  onClick={() => void dispatch(setSelectedLegal(legal))}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  style={{
                    fontFamily: 'Gill Sans, sans-serif',
                    fontSize: '18px',
                    backgroundColor: 'red',
                    width: '150px',
                  }}
                  onClick={() => dispatch(thunkDeleteLegal(legal.id))}
                >
                  Delete
                </Button>
              </>
            )}
            <Button
              variant="secondary"
              style={{
                fontFamily: 'Gill Sans, sans-serif',
                fontSize: '18px',
                backgroundColor: '#5fae32',
                width: '150px',
              }}
              onClick={() => (window.location.href = legal.url)}
            >
              Перейти на сайт
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
