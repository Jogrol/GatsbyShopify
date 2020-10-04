import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'

import StoreContext from '~/context/StoreContext'
import { CartCounter, Container, MenuLink, Wrapper } from './styles'
import { Link } from "gatsby"

const useQuantity = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}

const Navigation = ({ siteTitle }) => {
  const [hasItems, quantity] = useQuantity()

  return (
    <div className='bg-gray-200 p-4 rounded-lg max-w-2xl mx-auto'>
      <div className="flex">
        <Link className="w-full pr-4" to="/">{siteTitle}</Link>
        <Link className="text-grey" to="/cart">Cart<CartCounter>{quantity}</CartCounter></Link>
      </div>
    </div>

  )
}

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
