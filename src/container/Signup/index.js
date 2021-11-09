import React from 'react'
import Layout from '../../component/Layout'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import { Input } from '../../component/UI/input'
// import { Signup } from './index';
/**
* @author
* @function Signup
**/

export const Signup = (props) => {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    placeholder="First Name"
                    value=""
                    type="text"
                    onChange={() => { }}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="last Name"
                    placeholder="last Name"
                    value=""
                    type="text"
                    onChange={() => { }}
                  />
                </Col>
              </Row>

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