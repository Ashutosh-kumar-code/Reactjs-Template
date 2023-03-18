import React from 'react';
import { Container, Row, Col,Button } from 'react-bootstrap';

const Pricing = () => {
  return (
    <div className='pricing'>
      <Container>
        <h1>PRICING</h1>
      <h4 className='span1' >_____</h4>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum 
            quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo 
    qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        <Row>
            <Col>
            <div className="free">
    <h4>Free</h4>
    <h2>$0 <span> /month</span></h2>
    
    <p>Aida dere </p>
    <p>Nec feugiat nisl</p>
    <p>Nulla at volutpat dola</p>
    <p>Pharetra massa</p>
    <p>Massa ultricies mi</p>
    <div className='btn-wrap'>
    <div className="button">Buy Now</div>
    </div>
            </div>
            </Col>
            <Col>
            <div className="paid">
    <h4 className='head-wrap'>Business</h4>
    <h2>$19 <span>/month</span></h2>
    <p>Aida dere </p>
    <p>Nec feugiat nisl</p>
    <p>Nulla at volutpat dola</p>
    <p>Pharetra massa</p>
    <p>Massa ultricies mi</p>
    <div className='btn-wrap'>
    <div className="button">Buy Now</div>
    </div>
            </div>
            </Col>
            <Col>
            <div className="free">
    <h4>Developer</h4>
    <h2>$29 <span>/month</span></h2>
    <p>Aida dere </p>
    <p>Nec feugiat nisl</p>
    <p>Nulla at volutpat dola</p>
    <p>Pharetra massa</p>
    <p>Massa ultricies mi</p>
    <div className='btn-wrap'>
    <div className="button">Buy Now</div>
    </div>
            </div>
            </Col>
            <Col>
            <div className="free">
    <h4>Business</h4>
    <h2>$49 <span>/month</span></h2>
    <p>Aida dere </p>
    <p>Nec feugiat nisl</p>
    <p>Nulla at volutpat dola</p>
    <p>Pharetra massa</p>
    <p>Massa ultricies mi</p>
    <div className='btn-wrap'>
    <div className="button">Buy Now</div>
    </div>
            </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Pricing;
