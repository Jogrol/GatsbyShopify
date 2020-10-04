import React from 'react'
import { Link } from 'gatsby'
import SEO from '~/components/seo'
import Banner from '../components/Banner'
import ProductGrid from '../components/ProductGrid/ProductGrid'
import '../style/index.css'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Banner />
    <ProductGrid />
    <div className="container text-center">
      <Link to="/page-2/">Go to page 2</Link>
    </div>

  </>
)

export default IndexPage
