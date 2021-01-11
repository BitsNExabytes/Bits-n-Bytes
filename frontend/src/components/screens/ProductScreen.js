import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Row,Col,Image,ListGroup,Card,Button} from 'react-bootstrap';
import Rating from '../layout/Rating';
import products from '../../products';


/*
    match: allows us to have access to the properties in the url.
           We will use match to get access to the product id.


*/
const ProductScreen = ({match})=>{


    const product = products.find((product)=>(

        product._id === match.params.id
    ))






    return(

        <>
            <Link className = "btn btn-dark my-3" to='/'>
                To Home
            </Link>
            <Row>
                    <Col md = {6}>
                            <Image src= {product.image} alt={product.name} fluid/>
                    </Col>
                    <Col md = {3}>
                        {/* flush variant removes the white spaces */}
                        <ListGroup variant = 'flush'>
                            <ListGroup.Item>
                                    <h3>{product.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                    <Rating value = {product.rating} text={`${product.numReviews} reviews`}/>
                            </ListGroup.Item>
                         
                            <ListGroup.Item>
                                    Price: ${product.price}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                    Description: {product.description}
                            </ListGroup.Item>
                            </ListGroup>
                    </Col>
                    <Col md = {3}>
                        <Card>
                                <ListGroup variant = "flush">
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>
                                                Price:
                                            </Col>
                                            <Col>
                                                <strong>${product.price}</strong>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>
                                                Status:
                                            </Col>
                                            <Col>
                                                {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        
                                                <Button disabled={product.countInStock === 0} className = "btn-block" type = "button">Add to Cart</Button>
                                       
                                    </ListGroup.Item>

                                </ListGroup>
                        </Card>
                        </Col>
            </Row>
        </>
    )



}

ProductScreen.propTypes = {


}



export default ProductScreen