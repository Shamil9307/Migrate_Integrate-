import React from 'react'
import { Accordion } from 'react-bootstrap'

export default function AccordionMain():JSX.Element {
  return (
    <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0">
      <Accordion.Header>Что мы предлагаем:</Accordion.Header>
      <Accordion.Body>
      <ul>
            <br />
            <li style={{ fontFamily: 'Courier New, Courier, monospace', fontWeight: 'bolder' }}>
              <span role="img" aria-label="globe" style={{ fontSize: '24px' }}>
                🌐
              </span>{' '}
              Уроки и Рекомендации: Откройте для себя увлекательные уроки и практические
              рекомендации по языку, культуре и повседневной жизни. Мы помогаем вам освоиться в
              новом окружении, предоставляя полезные советы и интересные учебные материалы.
            </li>
            <br />
            <li style={{ fontFamily: 'Courier New, Courier, monospace', fontWeight: 'bolder' }}>
              <span role="img" aria-label="newspaper" style={{ fontSize: '24px' }}>
                📰
              </span>{' '}
              Новости и Обновления: Будьте в курсе последних новостей и событий в вашей новой
              стране. Мы предоставляем актуальную информацию, которая поможет вам интегрироваться в
              общество и легко адаптироваться к изменениям.
            </li>
            <br />
            <li style={{ fontFamily: 'Courier New, Courier, monospace', fontWeight: 'bolder' }}>
              <span role="img" aria-label="handshake" style={{ fontSize: '24px' }}>
                🤝
              </span>{' '}
              Наставничество и Поддержка: Опытные наставники готовы стать вашими гидами в новой
              жизни. Получите персональную поддержку и консультации, чтобы преодолеть трудности
              адаптации.
            </li>
            <br />
            <li style={{ fontFamily: 'Courier New, Courier, monospace', fontWeight: 'bolder' }}>
              <span role="img" aria-label="book" style={{ fontSize: '24px' }}>
                📖
              </span>{' '}
              Правила Этикета и Культурные Особенности: Узнайте о местных обычаях и правилах
              этикета, чтобы чувствовать себя уверенно в любой ситуации. Раздел "Понимание Культуры"
              поможет вам успешно взаимодействовать с местными жителями.
            </li>
            <br />
            <li style={{ fontFamily: 'Courier New, Courier, monospace', fontWeight: 'bolder' }}>
              <span role="img" aria-label="briefcase" style={{ fontSize: '24px' }}>
                💼
              </span>{' '}
              Найм Наставника: Ищете персонального наставника? Мы соединяем вас с опытными
              специалистами, готовыми поделиться своим опытом и помочь вам на каждом этапе
              адаптации.
            </li>
          </ul>
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
  )
}
