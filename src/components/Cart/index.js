import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'

const Cart = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const lineItems = checkout.lineItems.map(item => (
    <LineItem key={item.id.toString()} item={item} />
  ))

  return (
    <div className="grid grid-cols-2">
      <div>
        {lineItems}
      </div>
      <div>
        <h2 className="text-3xl">Subtotal</h2>
        <p>$ {checkout.subtotalPrice}</p>
        <br />
        <h2>Taxes</h2>
        <p>$ {checkout.totalTax}</p>
        <br />
        <h2>Total</h2>
        <p>$ {checkout.totalPrice}</p>
        <br />
        <button
          onClick={handleCheckout}
          disabled={checkout.lineItems.length === 0}
        >
          Check out
      </button>
      </div>
    </div>
  )
}

export default Cart
