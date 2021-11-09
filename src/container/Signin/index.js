import React from 'react'; 
import Layout from '../../component/Layout';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { Input } from '../../component/UI/input';
import { login } from '../../actions';
import { useDispatch } from 'react-redux';
import {useState} from 'react' 

/**
* @author
* @function Signin
**/



export const Signin = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
   
  const dispatch = useDispatch();

  const userLogin = (e) => {
    
    e.preventDefault();

    const user = {
      email, password
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
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                label="Password"
                placeholder="Password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
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