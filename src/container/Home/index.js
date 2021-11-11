// import React, { useEffect } from 'react'
// import { isUserLoggedIn } from '../../actions'
import Layout from '../../component/Layout'
import { Row, Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import './style.css';
// import { Navbar, Container ,Nav } from 'react-bootstrap';




/**
* @author
* @function Home
**/

export const Home = (props) => {


  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col md={2} className="sidebar">Side bar</Col>
          <Col md={10} style={{marginLeft: 'auto'}}>Container</Col>
        </Row>
      </Container>


      {/* <h1 className='jumbotron'>Welcome to Admin Dashboard</h1>
      <p className='jumbotron2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p> */}
    </Layout>
  )

}

