import React, { useState, useEffect } from 'react'
import Card from './Card'
import Navbar from './Navbar'
import Modal from './Modal'

function App() {
  const [cart, updateCart] = useState({});
  const [catResponse, updateCatResponse] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/')
    .then(response => response.json())
    .then(data => {
      console.log('got data', data)
      updateCatResponse(data);
    });
  }, [])

  const updateCartClick = id => {
    const cartClone = Object.assign({}, cart);
    if (cartClone[id]) {
      delete cartClone[id];
      return updateCart(cartClone);
    }
    cartClone[id] = true;
    return updateCart(cartClone);
  };

  const renderCards = data => {
    if (!data?.length) return null;
    return data.map(el => {
      const inCart = !!cart[el.id];
      return (
        <Card key={el.id} {...el} inCart={inCart} onClick={() => updateCartClick(el.id)} />
      );
    });
  };

  return (
    <div>
      <Navbar />
      <Modal allCats={catResponse} cartObject={cart} />
      {
        renderCards(catResponse)
      }
    </div>
  );
}

export default App;
