import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaEye, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import { useCart } from '../context/CartContext';

const CardPizza = ({ pizza }) => {
  const { addToCart } = useCart();
  return (
    <Card style={{ width: '17rem', margin: '5px', alignItems: 'center', textTransform: 'capitalize'}}>
      <Card.Img variant="top" src={pizza.img} />
      <Card.Body style={{ padding: '8px' }}>
        <Card.Title>Pizza {pizza.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush" style={{ fontSize: 'small', alignItems: 'center' }}>
        <ListGroup.Item>
          <strong>Ingredientes:</strong>
          <br />
          <img
            src='https://web.whatsapp.com/emoji/v1/15/1/2/single/w/64/01f355.png'
            className='pizzaimg'
            alt='Pizza icon'
          />{' '}
          {pizza.ingredients.join(', ')}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body style={{ fontSize: '20px', alignItems: 'center' }}>
        <ListGroup.Item><strong>Precio: ${pizza.price}</strong></ListGroup.Item>
        <Link to={`/pizza/${pizza.id}`} state={{ pizza }}> 
          <Button variant="outline-dark" className="me-2" style={{ fontSize: 'small'}}>
            Ver más <FaEye style={{ marginLeft: '5px' }} />
          </Button>
        </Link>
        <Button variant="dark" className="text-white"  
        onClick={() => addToCart(pizza)}>Añadir<FaShoppingCart style={{ marginLeft: '5px', color:'#0D6EFD' }} />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
