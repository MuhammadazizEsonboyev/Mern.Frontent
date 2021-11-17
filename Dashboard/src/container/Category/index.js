import React from 'react'
import Layout from '../../component/Layout'
import { useEffect, useState, } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory, addCategory } from './../../actions';
import { Input } from './../../component/UI/input/index';
import NewModal from './../../component/UI/input/Modal/index';




/**
* @author 
* @function Category
**/

export const Category = (props) => {

    const category = useSelector(state => state.category);
    const [categoryName, setCategoryName] = useState('');
    const [parentCategoryId, setParentCategoryId] = useState('');
    const [categoryImage, setCategoryImageId] = useState('');
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();




    const handleClose = () => {

        const form = new FormData();

        form.append('name', categoryName);
        form.append('parentId', parentCategoryId);
        form.append('categoryImage', categoryImage);
        dispatch(addCategory(form));
        setCategoryName('');
        setParentCategoryId('');

        // const cat = {
        //     categoryName,
        //     parentCategoryId,
        //     categoryImage
        // }

        // console.log(cat)

        setShow(false);
    }

    const handleShow = () => setShow(true);
    // MANASHUYER XATO

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

    const createCategoryList = (categories, options = []) => {

        for (let category of categories) {
            options.push({ value: category._id, name: category.name });
            if (category.children.length > 0) {
                createCategoryList(category.children.options)
            }
        }
        return options;
    }

    const handleCategoryImage = (e) => {
        setCategoryImageId(e.target.files[0]);
    }

    return (
        <Layout sidebar>
            <Container>
                <Row>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: "space-between" }}>
                            <h3>Category</h3>
                            <button onClick={handleShow}>Add</button>
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

            <Modal
                show={show}
                handleClose={handleClose}
                modalTitle={'Add new Category'}
            >
                <Input
                    value={categoryName}
                    placeholder={'Category name'}
                    onChange={(e) => setCategoryName(e.target.value)}
                />
                <select
                    className="form-control"
                    value={parentCategoryId}
                    onChange={(e) => parentCategoryId(e.target.value)}>
                    <option>Select Category</option>
                    {
                        createCategoryList(category.categories).map(option =>
                            <option key={option.value} value={option.value}>{option.name}</option>)
                    }
                </select>
                <input type="file" name="categoryImage" onChange={handleCategoryImage} />

            </Modal>

        </Layout>
    )

}