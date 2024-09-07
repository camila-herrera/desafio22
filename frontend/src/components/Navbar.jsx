import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useCart();
  const token = false;
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <nav className='Barra'>
      <div className="btn-group me-2" role="group" aria-label="First group">
        <h3 style={{ cursor: 'pointer' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Pizzería Mamma Mia!</Link>
        </h3>
      </div>
      <div className="d-inline-flex gap-1">
        <Link to="/" className="btn active" role="button" style={{ fontSize: 'small' }}>
          <img src='https://web.whatsapp.com/emoji/v1/15/1/2/single/w/64/01f355.png' className='pizzaimg' alt="Home" />Home
        </Link>
        {token ? (
          <>
            <Link to="/profile" className="btn active" role="button" style={{ fontSize: 'small' }}>
              <img src='candado.png' className='pizzaimg' alt="Profile" />Profile
            </Link>
            <Link to="/logout" className="btn active" role="button" style={{ fontSize: 'small' }}>
              <img src='candado.png' className='pizzaimg' alt="Logout" />Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" className="btn active" role="button" style={{ fontSize: 'small' }}>
              <img src='./public/candado(1).png' className='pizzaimg' alt="Login" />Login
            </Link>
            <Link to="/register" className="btn active" role="button" style={{ fontSize: 'small' }}>
              <img src='./public/candado.png' className='pizzaimg' alt="Register" />Register
            </Link>
          </>
        )}
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Link to="/cart" className="btn btn-outline-primary" role="button" style={{ fontSize: 'small' }}>
          <img src='./public/carrito-de-compras.png' className='pizzaimg' alt="Cart" /> Total: ${total}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

