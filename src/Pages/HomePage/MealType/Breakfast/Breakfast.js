import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import img from '../../../../images/breakfast/breakfast1.png';
import './Breakfast.css';

const Breakfast = () => {
    const navigate = useNavigate();

    const imgPath = '../../../../images/breakfast/';
    const dishes = [
        { id: 1, imgName: imgPath + 'breakfast1.png' },
        { id: 2, imgName: imgPath + 'breakfast2.png' },
        { id: 3, imgName: imgPath + 'breakfast3.png' },
        { id: 4, imgName: imgPath + 'breakfast4.png' },
        { id: 5, imgName: imgPath + 'breakfast5.png' },
        { id: 6, imgName: imgPath + 'breakfast6.png' }
    ]

    const goToCheckout = () => {
        navigate('/checkout');
    }


    return (
        <div className='use-grid ' >
            {
                dishes.map(dish =>

                    <Card>
                        <Card.Img variant="top" style={{ height: '300px' }} src={dish.imgName} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button onClick={goToCheckout} variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>


                )
            }
        </div>
    );
};

export default Breakfast;