import React from 'react';
//Row and Col are used for the grid system
import {Container,Row,Col} from 'react-bootstrap';


const Footer = ()=>{


    return(
        <footer>
            <Container>
                    <Row>
                        {/* we customize the components by passing in props */}
                        <Col className='text-center py-3'>
                            Copyright &copy; Bits N Bytes
                            </Col>
                    </Row>
            </Container>
        </footer>
    )
}

export default Footer