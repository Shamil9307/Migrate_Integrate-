import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function Carusel(): JSX.Element {
  return (
    
    <div id="carouselExampleCaptions" className="carousel slide" >
      {/* <div className="carousel-indicators" >
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
      </div> */}
      <Carousel interval={5000} /* задаем интервал в миллисекундах */>
        <Carousel.Item style={{height: "600px"}}>
          <img style={{height: "600px", borderRadius:"20px"}} src="../../public/главная.PNG" className="d-block w-100" alt="..." />
          {/* <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div> */}
        </Carousel.Item>
        {/* <Carousel.Item style={{height: "600px"}}>
          <img src="https://cs11.livemaster.ru/storage/topic/NxN/ef/03/b98e46e3f091b35f309a5cb45b617e94c148in.jpg?h=M5x71OeWBXLEiVUW7gxhiw" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </Carousel.Item> */}
        {/* <Carousel.Item style={{height: "600px"}}>
          <img style={{height: "600px", borderRadius:"20px"}} src="../../public/New_year.PNG" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block"> */}
            {/* <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p> */}
          {/* </div>
        </Carousel.Item> */}
      </Carousel>
      {/* <button
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
      </button> */}
    </div>
    
  );
}