import React from 'react'
import  {useHorizontalScroll}  from "./ScrollH";
import { Button, Col, Container, Row } from 'react-bootstrap';


const ScrollCard = () => {
    const scrollRef = useHorizontalScroll();
  return (
    <div>
        <Container>
          
          <Row ref={scrollRef}>
            <Col>
              <div className='testbox'>
                <div className='wave -one'></div>
                <div className='wave -two'></div>
                <div className='wave -three'></div>
                <div className='title'>test</div>
              </div>
            </Col>
            <Col>
              <div className='testbox'>
                <div className='wave -one'></div>
                <div className='wave -two'></div>
                <div className='wave -three'></div>
                <div className='title'>test1</div>
              </div>
          </Col>
          <Col>
              <div className='testbox'>
                <div className='wave -one'></div>
                <div className='wave -two'></div>
                <div className='wave -three'></div>
                <div className='title'>test2</div>
              </div>
          </Col>
          <Col>
              <div className='testbox'>
                <div className='wave -one'></div>
                <div className='wave -two'></div>
                <div className='wave -three'></div>
                <div className='title'>test3</div>
              </div>
          </Col>
          <Col>
              <div className='testbox'>
                <div className='wave -one'></div>
                <div className='wave -two'></div>
                <div className='wave -three'></div>
                <div className='title'>test4</div>
              </div>
          </Col>
        </Row>
        
      </Container>

    </div>
  )
}

export default ScrollCard