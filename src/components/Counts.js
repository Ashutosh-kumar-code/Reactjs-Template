import React from 'react';
import { Container, Row, Col,Button } from 'react-bootstrap';

const Counts = () => {
  return (
    <div className='count'>
        <Container>
            <Row>
      <Col>
        <h1>236</h1>
        <p>Clients</p>
      </Col>
      <Col>
        <h1>566</h1>
        <p>Projects</p>
      </Col>
      <Col>
        <h1>1236</h1>
        <p>Hours Of Support</p>
      </Col>
      <Col>
        <h1>15</h1>
        <p>Hard Workers</p>
      </Col>
      </Row>
      </Container>
    </div>
  )
}

export default Counts;
