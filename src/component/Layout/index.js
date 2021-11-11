import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
// import { Layout } from './../../components/layout/index';
import { Header } from '../Header';
import { NavLink } from 'react-router-dom'; 


/**
* @author
* @function Layout
**/

 const Layout = (props) => {
  return (
    <>
      <Header />
      {
        props.slidebar ?
        <Container fluid>
        <Row>
          <Col md={2} className="sidebar">
            <ul>
              <li><NavLink to={`/`}>Home</NavLink></li>
              <li><NavLink to={`/products`}>Products</NavLink></li>
              <li><NavLink to={`/orders`}>Orders</NavLink></li>
            </ul>
          </Col>
          <Col md={10} style={{marginLeft: 'auto'}}> {props.children}</Col>
        </Row>
      </Container>
      :
      props.children
      }
       
  
    </>
  )

}

export default  Layout; 