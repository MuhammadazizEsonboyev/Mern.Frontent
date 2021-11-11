import React, { useState } from 'react'
import Layout from '../../component/Layout'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import { Input } from '../../component/UI/input'
import { Redirect } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { signup } from './../../actions/user.actions';

/**
* @author
* @function Signup
**/

export const Signup = (props) => {



  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = useSelector(state => state.auth);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();


  const userSignup = (e) => {

    e.preventDefault()

    const user = {
      firstName, lastName, email, password
    }

    dispatch(signup(user));
  }

  if (auth.authenticate) {
    return <Redirect to={`/`} />
  };

  if(user.loading){
    return <p>loading...</p>;
  }

  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userSignup}>
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    placeholder="First Name"
                    value={firstName}
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="last Name"
                    placeholder="last Name"
                    value={lastName}
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Col>
              </Row>

              <Input
                label="Email"
                placeholder="Email"
                value={email}
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value)
                }
                }
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