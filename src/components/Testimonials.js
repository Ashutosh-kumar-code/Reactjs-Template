import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container} from 'react-bootstrap';
import {ImQuotesLeft} from 'react-icons/im';
import {ImQuotesRight} from 'react-icons/im';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <Container>
        <h1>TESTIMONIALS</h1>
        <h4 className='span1' >_______</h4>
      <p> Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
         Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit 
         alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>

<Carousel responsive={responsive}
 swipeable={true}
 draggable={true}
   showDots={true}
   removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
    infinite={true}
   autoPlay={"desktop"}
  autoPlaySpeed={4000}
  //  keyBoardControl={true}
   itemClass="carousel-item-padding-40-px" >
  <div className='card'>
  <i><ImQuotesLeft style={{color:'#b6b0f5',fontSize:'25px',marginTop:'-12px'}} />&nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis omnis, repellendus
       laudantium reprehenderit pariatur accusamus assumenda maiores rerum sequi totam quibusdam 
       vero a consectetur, nulla veniam nemo illo.&nbsp; <ImQuotesRight style={{color:'#b6b0f5',fontSize:'25px',marginBottom:'-5px'}} /> </i> 
    <img src="/images/testim-2.jpg" alt="" />
    <h5>Sara Wilsson</h5>
    <p>Designer</p>
  
  </div>
  <div className='card'>
  <i><ImQuotesLeft style={{color:'#b6b0f5',fontSize:'25px',marginTop:'-12px'}} />&nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis omnis, repellendus
       laudantium reprehenderit pariatur accusamus assumenda maiores rerum sequi totam quibusdam 
       vero a consectetur, nulla veniam nemo illo.&nbsp; <ImQuotesRight style={{color:'#b6b0f5',fontSize:'25px',marginBottom:'-5px'}} /> </i> 
    <img src="/images/testim-3.jpg" alt="" />
    <h5>Jena Karlis</h5>
    <p>Store Owner</p>
  
    </div>
  <div className='card'>
  <i><ImQuotesLeft style={{color:'#b6b0f5',fontSize:'25px',marginTop:'-12px'}} />&nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis omnis, repellendus
       laudantium reprehenderit pariatur accusamus assumenda maiores rerum sequi totam quibusdam 
       vero a consectetur, nulla veniam nemo illo.&nbsp; <ImQuotesRight style={{color:'#b6b0f5',fontSize:'25px',marginBottom:'-5px'}} /> </i> 
    <img src="/images/testim-4.jpg" alt="" />
    <h5>Matt Brandon</h5>
    <p>Freelancer</p>
  
    </div>
  <div className='card'>
  <i><ImQuotesLeft style={{color:'#b6b0f5',fontSize:'25px',marginTop:'-12px'}} />&nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis omnis, repellendus
       laudantium reprehenderit pariatur accusamus assumenda maiores rerum sequi totam quibusdam 
       vero a consectetur, nulla veniam nemo illo.&nbsp; <ImQuotesRight style={{color:'#b6b0f5',fontSize:'25px',marginBottom:'-5px'}} /> </i> 
    <img src="/images/testim-1.jpg" alt="" />
    <h5>Saul Goodman</h5>
    <p>Ceo & Founder</p>
  
    </div>
  <div className='card'>
  <i><ImQuotesLeft style={{color:'#b6b0f5',fontSize:'25px',marginTop:'-12px'}} />&nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis omnis, repellendus
       laudantium reprehenderit pariatur accusamus assumenda maiores rerum sequi totam quibusdam 
       vero a consectetur, nulla veniam nemo illo.&nbsp; <ImQuotesRight style={{color:'#b6b0f5',fontSize:'25px',marginBottom:'-5px'}} /> </i> 
    <img src="/images/testim-5.jpg" alt="" />
    <h5>John Larson</h5>
    <p>Entrepreneur</p>
  
    </div>
</Carousel>
</Container>

    </div>
  )
}

export default Testimonials;
