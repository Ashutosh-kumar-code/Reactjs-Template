import React from 'react';
import { Container, Row, Col,Button,Form,InputGroup  } from 'react-bootstrap';
import {MdKeyboardArrowRight} from 'react-icons/md';
import {ImTwitter} from 'react-icons/im';
import {FaFacebookF} from 'react-icons/fa';
import {RxInstagramLogo} from 'react-icons/rx';
import {AiFillSkype} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <Row>
            <Col>
            <div className="one">
                <h2>TECHIE</h2>
                <br />
                <p>A108 Adam Street
    New York, NY 535022
    United States </p>
    <p><b>Phone:</b> +1 5589 55488 55</p>
    <p><b>Email:</b> info@example.com</p>
            </div>
            </Col>
            <Col>
            <div className="one">
                <h5>Useful Links</h5>
                <p> <b><MdKeyboardArrowRight style={{fontSize:'20px'}}/></b> Home</p>
                <p><b><MdKeyboardArrowRight style={{fontSize:'20px'}}/></b> About Us</p>
                <p><b><MdKeyboardArrowRight style={{fontSize:'20px'}}/></b> Services</p>
                <p><b><MdKeyboardArrowRight style={{fontSize:'20px'}}/></b> Terms of servces</p>
                <p><b><MdKeyboardArrowRight style={{fontSize:'20px'}}/></b> Privacy policy</p>
            </div>
            </Col>
            <Col>
            <div className="one">
                <h5>Our Services</h5>
                <p> <b><MdKeyboardArrowRight style={{fontSize:'20px'}}/></b> Web Design</p>
                <p><b><MdKeyboardArrowRight style={{fontSize:'20px'}}/></b> Web Development</p>
                <p><b><MdKeyboardArrowRight style={{fontSize:'20px'}}/></b> Product Management</p>
                <p><b><MdKeyboardArrowRight style={{fontSize:'20px'}}/></b> Marketing</p>
                <p><b><MdKeyboardArrowRight style={{fontSize:'20px'}}/></b> Graphic Design</p>
            </div>
            </Col>
            <Col>
            <div className="one">
                <h5>Join Our Newsletter</h5>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                <br />
                <InputGroup>
            <Form.Control
              id="inlineFormInputGroupUsername"
              size='lg'
              placeholder="Username"
            />
            <InputGroup.Text size='lg' className='subs'>Subscribe</InputGroup.Text>
          </InputGroup>
            </div>
            </Col>
        </Row>
        <hr />
        <div className="copyright">
            <p> © Copyright Techie. All Rights Reserved  <br />Designed by BootstrapMade</p>

<h1><ImTwitter style={{background:'blue',padding:'9px',borderRadius:'50%'}}/>&nbsp; 
<FaFacebookF style={{background:'blue',padding:'9px',borderRadius:'50%'}} />&nbsp;  
<RxInstagramLogo style={{background:'blue',padding:'9px',borderRadius:'50%'}} />&nbsp; 
<AiFillSkype style={{background:'blue',padding:'9px',borderRadius:'50%'}} />&nbsp; 
<FaLinkedinIn style={{background:'blue',padding:'9px',borderRadius:'50%'}} />&nbsp; 
</h1>
        </div>
      </Container>
    </div>
  )
}

export default Footer;
