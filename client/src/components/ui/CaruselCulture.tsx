import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function CaruselCulture(): JSX.Element {
  return (
    
    <div id="carouselExampleCaptions" className="carousel slide" style={{marginTop: "50px", marginBottom: "70px"}}>
      
      <Carousel interval={5000} /* задаем интервал в миллисекундах */>
        <Carousel.Item style={{height: "600px"}}>
          <img style={{height: "600px", borderRadius:"20px"}} src="https://i8.photo.2gis.com/images/branch/32/4503599670740113_c16d.jpg" className="d-block w-100" alt="..." />
          {/* <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div> */}
        </Carousel.Item>
        <Carousel.Item style={{height: "600px"}}>
          <img style={{height: "600px", borderRadius:"20px"}} src="https://avatars.dzeninfra.ru/get-zen_doc/1349008/pub_5e9f63914b1b0c58c88db314_5e9f66c94f5630594cd74f21/scale_1200" className="d-block w-100" alt="..." />
          {/* <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div> */}
        </Carousel.Item>
        <Carousel.Item style={{height: "600px"}}>
          <img style={{height: "600px", borderRadius:"20px"}} src="https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663171062_53-mykaleidoscope-ru-p-sobor-vasiliya-blazhennogo-na-krasnoi-plos-61.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            {/* <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p> */}
          </div>
        </Carousel.Item>
      </Carousel>
      
    </div>
    
  );
}
