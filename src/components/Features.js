import React from 'react';
import { Container, Row, Col,Button } from 'react-bootstrap';
import {BiCubeAlt} from 'react-icons/bi';
import {RiPagesLine} from 'react-icons/ri';
import {RiGalleryLine} from 'react-icons/ri';
import { BiShieldAlt2} from 'react-icons/bi';

const Features = () => {
  return (
    <div className='features'>
      <Container>
        <h1>FEATURES</h1>
        <h4 className='span1' > ______</h4>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. 
    Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
     Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
     <Row>
        <Col>
        <div className="feature-txt">
        <h4> <RiPagesLine style={{fontSize:'50px',color:'blue'}} /> Est labore ad</h4>
        <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
    <br />
        <h4> <BiCubeAlt style={{fontSize:'50px',color:'blue'}} /> Harum esse qui</h4>
        <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
    <br />
         <h4> <RiGalleryLine style={{fontSize:'50px',color:'blue'}} /> Harum esse qui</h4>
        <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
    <br />
        <h4> <BiShieldAlt2 style={{fontSize:'50px',color:'blue'}} /> Harum esse qui</h4>
        <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
        </div>
        </Col>
        <Col>
        <div className="feature-img">
            <img src="/images/features.svg" alt="" />
        </div>
        </Col>
     </Row>
      </Container>
    </div>
  )
}

export default Features;
