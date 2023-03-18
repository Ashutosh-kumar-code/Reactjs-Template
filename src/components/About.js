import React from 'react';
import { Container, Row, Col,Button } from 'react-bootstrap';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const About = () => {
  return (
    <div className='about'>
      <Container>
        <Row>
            <Col>
            <div className="ableft">
                <h1>Voluptatem dignissimos provident quasi corporis</h1>
                <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                     eiusmod tempor incididunt ut labore et dolore magna aliqua. </i></p>
         <p><IoIosCheckmarkCircleOutline style={{color:'blue', fontSize:'26px'}} />
         &nbsp;Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
         <p><IoIosCheckmarkCircleOutline style={{color:'blue', fontSize:'26px'}} />
         &nbsp;Duis aute irure dolor in reprehenderit in voluptate velit.</p>
         <p><IoIosCheckmarkCircleOutline style={{color:'blue', fontSize:'26px'}} />
         &nbsp;Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
         in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</p>
<h5>Read More</h5>
            </div>
            </Col>
            <Col>
            <div className="abright">
                <img src="/images/about.jpg" alt="" />
            </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About;
