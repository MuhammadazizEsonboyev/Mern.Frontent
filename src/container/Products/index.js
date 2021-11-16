import React from 'react'
import Layout from '../../component/Layout';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { Input } from './../../component/UI/input/index';
import { useDispatch, useSelector } from 'react-redux';
import { useState, setShow } from 'react';
import { addProduct } from './../../actions/product.action';
import { Modal } from 'react-bootstrap';
import { productConstants } from './../../actions/constants';



/**
* @author
* @function Products
**/

export const Products = (props) => {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [productPictures, setProductPictures] = useState('');
    const [show, setShow] = useState(false);
    const [productDetailModal, setProductDetailModal] = useState(false)
    const [productDetails, setProductDetails] = useState(null)
    const category = useSelector(state => state.category);
    const product = useSelector(state => state.product);
    const dispatch = useDispatch();



    const handleClose = () => {
        const form = new FormData();
        form.append('name', name);
        form.append('quantity', quantity);
        form.append('price', price);
        form.append('description', description);
        form.append('category', categoryId);

        for (let pic of productPictures) {
            form.append('productPicture', pic);
        }

        dispatch(addProduct(form));
        setShow(false);
    }
    const handleShow = () => setShow(true);

    const createCategoryList = (categories, options = []) => {

        for (let category of categories) {
            options.push({ value: category._id, name: category.name });
            if (category.children.length > 0) {
                createCategoryList(category.children, options)
            }
        }
        return options;
    }

    const handleProductPictures = (e) => {
        setProductPictures([
            ...productPictures,
            e.target.files[0]
        ]);
    }

    const renderProducts = () => {
        return (
            <Table style={{fontSize: 12}} responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.products.length > 0 ?
                            product.products.map(product =>
                                <tr onClick={() => showProductDetailsModal(product)} key={product._id}>
                                    <td>2</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>--</td>
                                </tr>
                            ) : null
                    }

                </tbody>
            </Table>
        );
    }

    const renderAddProductModal = () => {
        return (
            <Modal
                show={show}
                handleClose={handleClose}
                modalTitle={'Add New Product'}
            >
                <Input
                    label="Name"
                    value={name}
                    placeholder={'Product name'}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    label="Quantity"
                    value={quantity}
                    placeholder={'Quantity name'}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <Input
                    label="Price"
                    value={price}
                    placeholder={'Price'}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <Input
                    label="Description"
                    value={description}
                    placeholder={'Description'}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <select
                    className="form-control"
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}>
                    <option>Select Category</option>
                    {
                        createCategoryList(category.categories).map(option =>
                            <option key={option.value} value={option.value}>{option.name}</option>)
                    }
                </select>

                {
                    productPictures.length > 0 ?
                        productPictures.map((pic, index) => <div key={index}>{pic.name}</div >) : null
                }

                <input type="file" name="productPicture" onChange={handleProductPictures} />
            </Modal>
        );
    }

    const handleCloseProductDetailsModal = () => {
        setProductDetailModal(false);
    }

    const showProductDetailsModal = (product) =>{
        setProductDetails(product);
        setProductDetailModal(true);
    }

    const renderProductDetailsModal = () => {

        if(!productDetails){
            return null;
        }

        return (
            <Modal
                show={productDetailModal}
                handleClose={handleCloseProductDetailsModal}
                modalTitle={'Product Details'}
                size="lg"
            >
                <Row>
                    <Col md="6">
                    <label>Name</label>
                    <p>{productDetails.name}</p>
                    </Col>
                </Row>

            </Modal>
        );
    }

    return (
        <Layout sidebar>
            <Container>
                <Row>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: "space-between" }}>
                            <h3>Products</h3>
                            <button onClick={handleShow}>Add</button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {renderProducts()}
                    </Col>
                </Row>
            </Container>
            {renderAddProductModal()}
            {renderProductDetailsModal()}

        </Layout>
    )

}