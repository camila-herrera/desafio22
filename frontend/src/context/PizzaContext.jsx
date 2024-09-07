import React, { createContext, useState, useEffect, useContext } from 'react';

const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('https://backend-pizzas-qa4r.onrender.com/api/pizzas');
        if (!response.ok) {throw new Error('Error al obtener las pizzas');}
        const data = await response.json();
        setPizzas(data);} 
      catch (err) {setError(err.message);} 
      finally {setLoading(false);}
    };

    fetchPizzas();
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas, loading, error }}>
      {children}
    </PizzaContext.Provider>
  );
};

export const usePizza = () => useContext(PizzaContext);
