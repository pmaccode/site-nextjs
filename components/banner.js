import { Carousel } from 'react-bootstrap'

export default function Banner(){
    return(
      <Carousel  style={{ height: '300px' }}>
        <Carousel.Item style={{ height: '300px' }}>
          <img
            className="d-block w-100"
            src="https://www.melhoresdestinos.com.br/wp-content/uploads/2020/09/arraial-do-cabo-capa2019.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '300px' }}>
          <img
            className="d-block w-100"
            src="https://www.melhoresdestinos.com.br/wp-content/uploads/2020/09/arraial-do-cabo-capa2019.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '300px' }}>
          <img
            className="d-block w-100"
            src="https://www.melhoresdestinos.com.br/wp-content/uploads/2020/09/arraial-do-cabo-capa2019.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}