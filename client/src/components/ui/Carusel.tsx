import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function Carusel(): JSX.Element {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        />
      </div>
      <Carousel interval={7000} /* задаем интервал в миллисекундах */>
        <Carousel.Item>
          <img src="https://img2.joyreactor.cc/pics/post/%D0%9F%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8B-%D0%B4%D0%BB%D1%8F-%D0%B4%D0%B0%D1%83%D0%BD%D0%BE%D0%B2-%D1%80%D0%B0%D0%B7%D0%BD%D0%BE%D0%B5-%D0%BA%D0%B0%D0%BF%D0%B8%D0%B1%D0%B0%D1%80%D1%8B-%D1%81%D0%BC%D0%B5%D1%88%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-7856280.jpeg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://cs11.livemaster.ru/storage/topic/NxN/ef/03/b98e46e3f091b35f309a5cb45b617e94c148in.jpg?h=M5x71OeWBXLEiVUW7gxhiw" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://avatars.dzeninfra.ru/get-zen_doc/3828082/pub_6064597b2b33936c169ec73b_60645ae7f57165397e450000/scale_1200" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </Carousel.Item>
      </Carousel>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}