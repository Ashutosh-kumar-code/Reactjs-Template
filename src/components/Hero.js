import React from 'react'
import { Container, Row, Col,Button } from 'react-bootstrap'
const Hero = () => {
  return (
    <div className='hero-part'>
      <Container>
<Row>
    <Col>
    <div className="left">
    <h1>Better Digital Experience With Techie</h1>
    <p>We are team of talented designers making websites with Bootstrap</p>
    <Button variant="outline-light" type='lg' >Get Started</Button>
    </div>
    </Col>
 
    <Col>
    <div className="right">
    <img src="/images/hero-move.png" alt="" />

    </div>
    </Col>
</Row>
    </Container>
    </div>
  )
}

export default Hero;
