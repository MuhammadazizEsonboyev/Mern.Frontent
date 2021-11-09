import React from 'react';
import Layout from '../../component/Layout';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { Input } from '../../component/UI/input';
import { login } from '../../actions';
import {useDispatch} from 'react-redux';

/**
* @author
* @function Signin
**/



export const Signin = (props) => {

  const dispatch = useDispatch(); 

    const userLogin = (e) => {
      e.preventDefault();
      
      const user = {
        email: 'faxriddinovichazeez@gmail.com',
        password: '12345'
      }
    
      dispatch(login(user));
    }


  
  return (

    <Layout>
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>

              <Input
                label="Email"
                placeholder="Email"
                value=""
                type="email"
                onChange={() => { }}
              />

              <Input
                label="Password"
                placeholder="Password"
                value=""
                type="password"
                onChange={() => { }}
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>

      </Container>
    </Layout>
  )

}