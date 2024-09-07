import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePizza } from '../context/PizzaContext';
import { useCart } from '../context/CartContext';

const PizzaPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { pizzas } = usePizza(); 
  const { addToCart } = useCart();
  
  const pizza = pizzas.find(p => p.id === id);

  if (!pizza) return <p>No se encontró la pizza</p>;

  return (
    <div className='carta'>
      <h2 style={{ textTransform: 'uppercase', fontSize: '40px' }}>{pizza.name}</h2>
      <img 
        style={{ width: '22rem', margin: '5px', alignItems: 'center', borderRadius: '5%' }} 
        src={pizza.img} 
        alt={pizza.name} 
      />
      <p>{pizza.desc}</p>
      <p><strong>Ingredientes:</strong> {pizza.ingredients.join(', ')}</p>
      <p style={{ fontSize: '30px' }}><strong>Precio: ${pizza.price}</strong></p>
      <button style={{ background: '#0D6EFD', color: 'white' }} onClick={() => addToCart(pizza)}>Añadir al Carrito </button>
      <button onClick={() => navigate(-1)}>Volver</button>
    </div>
  );
};

export default PizzaPage;


