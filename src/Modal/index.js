import React, { Fragment } from 'react';
import './Modal.css'

const Modal = ({
  cartObject,
  allCats
}) => {
  const getAllCatsInCart = () => {
    const cartArray = Object.keys(cartObject);
    const filteredCats = (cartArray.length && allCats.length) ? allCats.filter(cat => {
      return cartObject[cat.id]
    }) : [];
    if (!filteredCats.length) return (
      <h5 className="modal-subtitle">Your cart is empty</h5>
    );
    return filteredCats.map(cat => {
      return (<h5 key={cat.id} className="modal-subtitle">{cat.name} - ${cat.price}</h5>)
    })
  }

  const getTotal = () => {
    const cartArray = Object.keys(cartObject);
    const filteredCats = (cartArray.length && allCats.length) ? allCats.filter(cat => {
      return cartObject[cat.id]
    }) : [];
    const price = !filteredCats.length ? 0 : filteredCats.reduce((acc, cat) => {
      return acc + parseFloat(cat.price);
    }, 0)
    return (
      <h5>Total: ${price}</h5>
    )
  }
  // Open and closed state is handled using this checkbox status magically by Paper.css
  // It's a concession since I think the CSS library is cool 🤷‍♀️
  return (
    <Fragment>
      <input className="modal-state" id="modal-2" type="checkbox" />
      <div className="modal">
        <label className="modal-bg" htmlFor="modal-2"></label>
        <div className="modal-body">
          {
            getAllCatsInCart()
          }
          {
            getTotal()
          }
          <label htmlFor="modal-2" className="modal-link">Close</label>
        </div>
      </div>
    </Fragment>
  )
}

export default Modal