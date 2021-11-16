import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
// import { Layout } from './../../components/layout/index';
import { Header } from '../Header';
import { NavLink } from 'react-router-dom'; 
// import { Category } from './../../container/Category/index';
import './style.css'


/**
* @author
* @function Layout
**/

 const Layout = (props) => {
  return (
    <>
      <Header />
      {
        props.sidebar ?//shu yerda hatolik bor ekan
        <Container fluid>
        <Row>
          <Col md={2} className="sidebar">
            <ul>
              <li><NavLink to={`/`}>Home</NavLink></li>
              <li><NavLink to={`/category`}>Category</NavLink></li>
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