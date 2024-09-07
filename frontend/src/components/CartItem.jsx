import React from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const CartItem = ({ item, onIncrease, onDecrease }) => {
  return (
    <ListGroup.Item className="d-flex align-items-center justify-content-between" style={{ padding: '10px' }}>
      <div className="d-flex align-items-center">
        <img src={item.img} alt={item.titulo} style={{ width: '80px', height:'80px', marginRight: '15px' }} />
        <div>
          <h6>Pizza {item.name}</h6>
          <p>Precio: ${item.price}</p>
          <p>
            <Button variant="outline-primary" size="sm" onClick={() => onIncrease(item.id)} style={{ marginRight: '10px' }}>+</Button>
            {item.quantity > 0 && (
              <>
                <Button variant="outline-danger" size="sm" onClick={() => onDecrease(item.id)}>-</Button>
                <span style={{ marginLeft: '10px' }}>Cantidad: {item.quantity}</span>
              </>
            )}
          </p>
        </div>
      </div>
      <div>
        <p>Total: ${item.price * item.quantity}</p>
      </div>
    </ListGroup.Item>
  );
};

export default CartItem;