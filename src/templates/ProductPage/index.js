import React from 'react'
import { graphql } from 'gatsby'

import SEO from '~/components/seo'
import ProductForm from '~/components/ProductForm'
import {
  Img
} from '~/utils/styles'
import { ProductTitle, ProductDescription } from './styles'

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct
  return (
    <>
      <SEO title={product.title} description={product.description} />
      <article className="container grid grid-cols-1 sm:grid-cols-2 gap-8 ">
        <div className="flex flex-wrap flex-col justify-center p-8 ">
          <div className="bg-gray-300 p-8">
            <h1 className="text-5xl mb-4 leading-none">{product.title}</h1>
            <div className="" dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}>
            </div>
            <ProductForm product={product} />
          </div>
        </div>
        {product.images.map(image => (
          <Img
            fluid={image.localFile.childImageSharp.fluid}
            key={image.id}
            alt={product.title}
          />
        ))}
      </article>
    </>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ProductPage
