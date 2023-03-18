import React from "react";
import { Container, Row, Col, Tab,Nav } from "react-bootstrap";
import {IoMdAdd} from 'react-icons/io';
import {FiLink} from 'react-icons/fi';

const Portfolio = () => {
  return (
    <div className="portfoilo">
      <Container>
        <h1>PORTFOILO</h1>
        <h4 className='span1' >______</h4>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
             Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit
              alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      
        <Container>
            
          <Nav variant="pills" className="flex-column">
          <div className="port-top">
            <Nav.Item>
              <Nav.Link eventKey="first">ALL</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">APP</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">CARD</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">WEB</Nav.Link>
            </Nav.Item>
            </div>
          </Nav>
        </Container>

        
        <Col>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <div className="first-content">
                <div className="i1">
                    <img src="/images/portfolio-9.jpg" alt="" />
                    <div className="txt">
                        <h4> <b> App 1</b></h4>
                        <h6>APP</h6>
            <h2><IoMdAdd style={{fontSize:'31px'}}/>&nbsp;&nbsp;<FiLink style={{fontSize:'25px'}}/></h2>
                    </div>
                </div>
                <div className="i1">
                <img src="/images/portfolio-8.jpg" alt="" />
                <div className="txt">
                        <h4> <b> Card 2</b></h4>
                        <h6>CARD</h6>
            <h2><IoMdAdd style={{fontSize:'31px'}}/>&nbsp;&nbsp;<FiLink style={{fontSize:'25px'}}/></h2>
                    </div>
                </div>
                <div className="i1">
                <img src="/images/portfolio-7.jpg" alt="" />
                <div className="txt">
                        <h4> <b> Card 1</b></h4>
                        <h6>CARD</h6>
            <h2><IoMdAdd style={{fontSize:'31px'}}/>&nbsp;&nbsp;<FiLink style={{fontSize:'25px'}}/></h2>
                    </div>
                </div>
              </div>
              <div className="first-content">
                <div className="i1">
                    <img src="/images/portfolio-6.jpg" alt="" />
                    <div className="txt">
                        <h4> <b>Web 1</b></h4>
                        <h6>WEB</h6>
             <h2><IoMdAdd style={{fontSize:'31px'}}/>&nbsp;&nbsp;<FiLink style={{fontSize:'25px'}}/></h2>
                    </div>
                </div>
                <div className="i1">
                <img src="/images/portfolio-5.jpg" alt="" />
                <div className="txt">
                        <h4> <b> App 3</b></h4>
                        <h6>APP</h6>
            <h2><IoMdAdd style={{fontSize:'31px'}}/>&nbsp;&nbsp;<FiLink style={{fontSize:'25px'}}/></h2>
                    </div>
                </div>
                <div className="i1">
                <img src="/images/portfolio-3.jpg" alt="" />
                <div className="txt">
                        <h4> <b>Web 2</b></h4>
                        <h6>WEB</h6>
                   <h2><IoMdAdd style={{fontSize:'31px'}}/>&nbsp;&nbsp;<FiLink style={{fontSize:'25px'}}/></h2>
                    </div>
                </div>
              </div>
              <div className="first-content">
                <div className="i1">
                    <img src="/images/portfolio-1.jpg" alt="" />
                    <div className="txt">
                        <h4> <b> App 1</b></h4>
                        <h6>APP</h6>
    <h2><IoMdAdd style={{fontSize:'31px'}}/>&nbsp;&nbsp;<FiLink style={{fontSize:'25px'}}/></h2>
                    </div>
                </div>
                <div className="i1">
                <img src="/images/portfolio-4.jpg" alt="" />
                <div className="txt">
                        <h4> <b>Web 3</b></h4>
                        <h6>WEB</h6>
   <h2><IoMdAdd style={{fontSize:'31px'}}/>&nbsp;&nbsp;<FiLink style={{fontSize:'25px'}}/></h2>
                    </div>
                </div>
                <div className="i1">
                <img src="/images/portfolio-2.jpg" alt="" />
                <div className="txt">
                        <h4> <b>Card 3</b></h4>
                        <h6>CARD</h6>
             <h2><IoMdAdd style={{fontSize:'31px'}}/>&nbsp;&nbsp;<FiLink style={{fontSize:'25px'}}/></h2>
                    </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <div className="first-content">
                <div className="i1">
                    <img src="/images/portfolio-1.jpg" alt="" />
                    <div className="txt">
                        <h4> <b> App 2</b></h4>
                        <h6>APP</h6>
          <h2><IoMdAdd style={{fontSize:'31px'}}/>&nbsp;&nbsp;<FiLink style={{fontSize:'25px'}}/></h2>
                    </div>
                </div>
                <div className="i1">
                <img src="/images/portfolio-9.jpg" alt="" />
                <div className="txt">
                        <h4> <b> App 1</b></h4>
                        <h6>APP</h6>
            <h2><IoMdAdd style={{fontSize:'31px'}}/>&nbsp;&nbsp;<FiLink style={{fontSize:'25px'}}/></h2>
                    </div>
                </div>
                <div className="i1">
                <img src="/images/portfolio-5.jpg" alt="" />
                <div className="txt">
                        <h4> <b> App 3</b></h4>
                        <h6>APP</h6>
          <h2><IoMdAdd style={{fontSize:'31px'}}/>&nbsp;&nbsp;<FiLink style={{fontSize:'25px'}}/></h2>
                    </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
            <div className="first-content">
                <div className="i1">
                    <img src="/images/portfolio-7.jpg" alt="" />
                    <div className="txt">
                        <h4> <b> Card 1</b></h4>
                        <h6>CARD</h6>
       <h2><IoMdAdd style={{fontSize:'31px'}}/>&nbsp;&nbsp;<FiLink style={{fontSize:'25px'}}/></h2>
                    </div>
                </div>
                <div className="i1">
                <img src="/images/portfolio-8.jpg" alt="" />
                <div className="txt">
                        <h4> <b>Card 2</b></h4>
                        <h6>CARD</h6>
              <h2><IoMdAdd style={{fontSize:'31px'}}/>&nbsp;&nbsp;<FiLink style={{fontSize:'25px'}}/></h2>
                    </div>
                </div>
                <div className="i1">
                <img src="/images/portfolio-2.jpg" alt="" />
                <div className="txt">
                        <h4> <b> Card 3</b></h4>
                        <h6>CARD</h6>
              <h2><IoMdAdd style={{fontSize:'31px'}}/>&nbsp;&nbsp;<FiLink style={{fontSize:'25px'}}/></h2>
                    </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
            <div className="first-content">
                <div className="i1">
                    <img src="/images/portfolio-6.jpg" alt="" />
                    <div className="txt">
                        <h4> <b> Web 1</b></h4>
                        <h6>WEB</h6>
           <h2><IoMdAdd style={{fontSize:'31px'}}/>&nbsp;&nbsp;<FiLink style={{fontSize:'25px'}}/></h2>
                    </div>
                </div>
                <div className="i1">
                <img src="/images/portfolio-3.jpg" alt="" />
                <div className="txt">
                        <h4> <b> Web 2</b></h4>
                        <h6>WEB</h6>
            <h2><IoMdAdd style={{fontSize:'31px'}}/>&nbsp;&nbsp;<FiLink style={{fontSize:'25px'}}/></h2>
                    </div>
                </div>
                <div className="i1">
                <img src="/images/portfolio-4.jpg" alt="" />
                <div className="txt">
                        <h4> <b> Web 3</b></h4>
                        <h6>WEB</h6>
           <h2><IoMdAdd style={{fontSize:'31px'}}/>&nbsp;&nbsp;<FiLink style={{fontSize:'25px'}}/></h2>
                    </div>
                </div>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Col>
     
    </Tab.Container>
      </Container>
    </div>
  );
};

export default Portfolio;
