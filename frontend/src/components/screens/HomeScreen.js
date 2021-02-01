import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Row,Col} from 'react-bootstrap';
import Product from '../screens/Product';
import {listProducts} from '../../actions/productActions';





const HomeScreen = ()=>{

    //the dispatch will be used to fetch the action we wish to use
    const dispatch = useDispatch();

    //the selector will be used to fetch the state you wish to use
    const productList = useSelector(state => state.productList)

    //destructure the piece of product list you wish to use

    const {loading, error,products} = productList;


    //when the component loads fire off these actions
    useEffect(()=>{

        //dispatch fires off list products
        dispatch(listProducts());

      
    },[dispatch])


    return(
        <>
            <h1>Latest products</h1>
            {loading ? <h2>Loading</h2> : error  ? <h3>{error}</h3> : <Row>
                {products.map((product) =>(

                    <Col sm={12} md={6} lg={4} xl={3} key={product._id}> 
                            <Product product={product}/>
                    </Col>
                ))}
            </Row>}
            

        </>
    )
}

export default HomeScreen;