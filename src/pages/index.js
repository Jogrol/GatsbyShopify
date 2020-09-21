import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'
import '../style/index.css'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div
      className="px-4 py-3 my-2 border-t-4 rounded-b shadow-md bg-teal-lightest border-teal text-teal-darkest"
      role="alert"
    >
      <div className="flex">
        <svg
          className="w-6 h-6 mr-4 text-teal"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
        </svg>
        <div>
          <p className="font-bold">He Sjors,</p>
          <p className="text-sm">Gatsby, Shopify en Netlify &hearts;</p>
          <p className="text-sm">Groetjes Joey!</p>
        </div>
      </div>
    </div>
    <h1>Hi people</h1>
    <p>Welcome to your new Shop powered by Gatsby and Shopify.</p>
    <ProductGrid />
    <Link to="/page-2/">Go to page 2</Link>
  </>
)

export default IndexPage
