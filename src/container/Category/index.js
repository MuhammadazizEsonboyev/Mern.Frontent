import React from 'react'
import Layout from '../../component/Layout'
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from './../../actions';
import { useEffect } from 'react';
// import { render } from '@testing-library/react';
/**
* @author
* @function Category
**/

export const Category = (props) => {
    const category = useSelector(state => state.category);
    const dispatch = useDispatch();


    useEffect(() => {
        console.log(`Category.js`);

        dispatch(getAllCategory())

    }, []);

    const renderCategories = (categories) => {
        let myCategories = [];
        for (let category of categories) {
            myCategories.push(
                <li key={category.name}>
                    {category.name}
                    {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null}
                </li>


            );
        }


        return myCategories;
    }

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
                <Row>
                    <Col md={12}>
                        <ul>
                            {renderCategories(category.categories)}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )

}