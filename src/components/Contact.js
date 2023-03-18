import React from 'react';
import { Container, Row, Col,Button,Form } from 'react-bootstrap';
import {HiOutlineMail} from 'react-icons/hi';
import {FiPhoneCall} from 'react-icons/fi';
import {IoLocationOutline} from 'react-icons/io5';

const Contact = () => {
  return (
    <div className='contact'>
      <Container>
        <h1>CONTACT</h1>
        <h4 className='span1' >_____</h4>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid 
            fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et
         nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
         <br />
         <Row>
            <Col>
            <div className="adress">
                <h1><IoLocationOutline style={{color:'#1150e6'}}/></h1>
              <h3>Our Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
            </div>
            <Row>
                <Col>
                <div className="adress">
                    <h1><HiOutlineMail style={{color:'#1150e6'}} /></h1>
                <h3>Email Us</h3>
                <p>contact@example.com</p>
            </div>
                </Col>
                <Col>
                <div className="adress">
                    <h1><FiPhoneCall style={{color:'#1150e6'}} /></h1>
                <h3>Call Us</h3>
                <p>+1 5589 55488 55</p>
            </div>
                </Col>
            </Row>
            </Col>
            <Col>
            <div className="form">
            <Form>      
      <Form.Group className="mb-3" >
        <Row>
      <Col>
      <Form.Control size='lg' type="text" placeholder="Your Name" />
      </Col>
      <Col>
        <Form.Control size='lg' type="email" placeholder="Your Email" />
        </Col>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3" >
      <Form.Control size='lg' type="text" placeholder="Subject" />
      </Form.Group>
      <Form.Group className="mb-3" >
      <Form.Control as="textarea" rows={4} />
      </Form.Group>
      <Button size='lg' variant="primary" type="button"> Send Message</Button>

    </Form>
            </div>
            </Col>
         </Row>
      </Container>
    </div>
  )
}

export default Contact;
