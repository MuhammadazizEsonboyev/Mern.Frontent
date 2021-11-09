import React from 'react'
import Layout from '../../component/Layout'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import { Input } from '../../component/UI/input'
/**
* @author
* @function Signin
**/

export const Signin = (props) => {
  return (
    <Layout>
      <Container>
        <Row style={{marginTop: '50px'}}>
          <Col md={{span: 6, offset: 3}}>
            <Form>
              
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