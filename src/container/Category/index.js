import React from 'react'
import Layout from '../../component/Layout'
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getAllCategory } from './../../actions';
import { useEffect } from 'react';
/**
* @author
* @function Category
**/

export const Category = (props) => {
    const dispatch = useDispatch();


    useEffect(() => {
        console.log(`Category.js`);

        dispatch(getAllCategory())

    }, []);

    return (

        <Layout slidebar>
            <Container>
                <Row>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: "space-between" }}>
                            <h3>Category</h3>
                            <button>Add</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )

}