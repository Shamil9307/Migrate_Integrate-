import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Carusel from '../ui/Carusel';
import AccordionMain from '../ui/AccordionMain';

export default function MainPage(): JSX.Element {
  return (
    <>
      <div>
        <Carusel />
      </div>
      <Container style={{ border: '2px solid #ddd', padding: '20px', borderRadius: '10px' }}>
        {/* <div>
          <h2
            style={{
              fontSize: '35px',
              fontFamily: 'Courier New, Courier, monospace',
              fontWeight: 'bolder',
            }}
          >
            Добро пожаловать на Migrate Integrate: Ваш путеводитель в новой жизни!
          </h2>
          <p style={{ fontFamily: 'Courier New, Courier, monospace', fontWeight: 'bolder' }}>
            Вы начинаете увлекательное путешествие в новую страну, и Migrate Integrate здесь, чтобы
            сделать ваш переезд максимально комфортным и успешным.
          </p>
        </div> */}

        <div>
          <AccordionMain/>
        </div>

        {/* <div>
          <h3
            style={{
              fontSize: '35px',
              fontFamily: 'Courier New, Courier, monospace',
              fontWeight: 'bolder',
            }}
          >
            Присоединяйтесь к Migrate Integrate и сделайте свой переезд невероятным приключением!
          </h3>
          <p style={{ fontFamily: 'Courier New, Courier, monospace', fontWeight: 'bolder' }}>
            Не упустите возможность сделать свою адаптацию легкой, увлекательной и успешной. Давайте
            вместе создадим вашу новую историю успеха!
          </p>
        </div> */}
      </Container>
    </>
  );
}
