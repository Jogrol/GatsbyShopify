import React, { useContext } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import StoreContext from '~/context/StoreContext'
import { Grid, Product, Title, PriceTag } from './styles'
import { Img } from '~/utils/styles'

const ProductGrid = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query {
        allShopifyProduct(sort: { fields: [createdAt], order: DESC }) {
          edges {
            node {
              id
              title
              handle
              createdAt
              images {
                id
                originalSrc
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 910) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
              variants {
                price
              }
            }
          }
        }
      }
    `
  )

  const getPrice = price =>
    Intl.NumberFormat(undefined, {
      currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
      minimumFractionDigits: 2,
      style: 'currency',
    }).format(parseFloat(price ? price : 0))

  return (
    <div className="container">
      <h2 className="text-4xl">Product gridje</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-8 ">
        {allShopifyProduct.edges ? (
          allShopifyProduct.edges.map(
            ({
              node: {
                id,
                handle,
                title,
                images: [firstImage],
                variants: [firstVariant],
              },
            }) => (
                < div key={id} >
                  <Link to={`/product/${handle}/`}>
                    {firstImage && firstImage.localFile && (
                      <Img
                        fluid={firstImage.localFile.childImageSharp.fluid}
                        alt={handle}
                      />
                    )}
                  </Link>
                  <Title>{title}</Title>
                  <PriceTag>{getPrice(firstVariant.price)}</PriceTag>
                </div>
              )
          )
        ) : (
            <p>No Products found!</p>
          )}
      </div >
    </div>
  )
}

export default ProductGrid
