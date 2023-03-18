import React from 'react'
import { Container, Row, Col,Button } from 'react-bootstrap';
import {CiBasketball} from 'react-icons/ci';
import {BiBasketball} from 'react-icons/bi'
import {AiOutlineFileText} from 'react-icons/ai';
import {MdOutlineSpeed} from 'react-icons/md';
import {FaGraduationCap} from 'react-icons/fa';
import {RiComputerLine} from 'react-icons/ri';
import {FaArchway} from 'react-icons/fa';

const Services = () => {
  return (
    <div className='services' >
      <Container>
    <h1>SERVICES</h1>
    <h4 className='span1' > ______</h4>
    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid 
        fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate.
         Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
         <Row>
            <Col > <div className="serve-col">
               <h2 className='se-icon1'> <BiBasketball style={{fontSize:'38px',fontWeight:'800'}} /> </h2>
                <h3>Lorem Ipsum</h3>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                </div> </Col>
            <Col> 
            <div className="serve-col">
               <h2 className='se-icon2'> <AiOutlineFileText style={{fontSize:'38px',fontWeight:'800'}} /> </h2>
                <h3>Sed&nbsp;Perspiciatis</h3>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
            </Col>
            <Col> 
            <div className="serve-col">
               <h2  className="se-icon3"> <MdOutlineSpeed style={{fontSize:'38px',fontWeight:'800'}} /> </h2>
                <h3>Magni Dolores</h3>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
            </Col>
            <Col>
            <div className="serve-col">
            <h2 className="se-icon4"> <FaGraduationCap style={{fontSize:'38px',fontWeight:'800'}} /> </h2>
                <h3>Nemo Enim</h3>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
             </Col>
            <Col>
            <div className="serve-col">
           <h2 className="se-icon5"> <RiComputerLine style={{fontSize:'38px',fontWeight:'800'}} /> </h2>
                <h3>Dele Cardo</h3>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
             </Col>
            <Col>
            <div className="serve-col">
           <h2 className="se-icon6"> <FaArchway style={{fontSize:'38px',fontWeight:'800'}} /> </h2>
                <h3>Divera Don</h3>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
             </Col>
         </Row>
      </Container>
    </div>
  )
}

export default Services;
