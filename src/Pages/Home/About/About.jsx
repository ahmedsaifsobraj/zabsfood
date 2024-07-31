import React from 'react';
import about1 from '../../../images/about1.png';
import about2 from '../../../images/about2.png';
import about3 from '../../../images/about3.png';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const About = () => {
    const cardDetails = [
        { img: about1, title: 'Fast Delivery', text: 'Experience the convenience of fast delivery with our food service. We prioritize speed and efficiency to ensure your meals arrive hot and fresh, right at your doorstep. Whether you’re craving a quick lunch or a late-night snack, our streamlined delivery process guarantees satisfaction every time. Enjoy a seamless ordering experience with real-time tracking and customizable delivery options. Your favorite dishes, delivered fast!' },
        { img: about2, title: 'A Good Auto Responder', text: 'We appreciate your business and are excited to prepare your meal. Your order has been received and is being processed. You can expect your delicious food to arrive shortly. In the meantime, feel free to track your order status through our website or app.' },
        { img: about3, title: 'Home Delivery', text: 'Craving delicious meals delivered straight to your door? Look no further! At [Your Food Delivery Service Name], we bring a variety of mouth-watering dishes from your favorite local restaurants right to your doorstep. Whether you’re in the mood for a quick snack or a gourmet feast, our easy-to-use platform ensures a seamless ordering experience.' }
    ];
    return (
        <div className='p-5'>
            <div>
                <h3>Discover Our Strengths</h3>
                <p><small>Discover our strengths and see why we're the leaders in our field. From exceptional service to innovative solutions, we’re committed to delivering unparalleled value to our clients</small></p>
            </div>
            <Row xs={1} md={3} className="g-4">
                {cardDetails.map((card, idx) => (
                    <Col key={idx}>
                        <Card className='border border-0'>
                            <Card.Img variant="top" src={card.img} />
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>
                                    {card.text}
                                </Card.Text>
                                <p className='text-warning fw-bold'>See More <FontAwesomeIcon icon={faArrowRightLong} /></p>
                            </Card.Body>
                            
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default About;
