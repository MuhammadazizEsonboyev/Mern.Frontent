import React from 'react'
// import { Container } from 'react-bootstrap';
// import { Layout } from './../../components/layout/index';
import { Header } from '../Header';


/**
* @author
* @function Layout
**/

 const Layout = (props) => {
  return (
    <>
      <Header />
        {props.children}
  
    </>
  )

}

export default  Layout; 