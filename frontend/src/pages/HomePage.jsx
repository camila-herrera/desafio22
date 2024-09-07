import React from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { usePizza } from '../context/PizzaContext';

function HomePage() { 
  const { pizzas, loading, error } = usePizza();

  if (loading) return <p>Cargando pizzas...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='Home'>
      <Header />
      <div className="card-container">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            pizza={pizza}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
