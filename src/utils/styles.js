import React from 'react'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'

export const breakpoints = {
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
}

export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
      body {
        margin: 0;
      }
      html {
        font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }
    `}
  />
)

export const Img = styled(Image)`

`

export const Container = () => {
  return <div className='w-screen h-screen bg-gray-300'>
    <h1>Container</h1>
  </div>
}



export const TwoColumnGrid = styled.div`

`

export const GridLeft = styled.div`

`

export const GridRight = styled.div`

`

export const MainContent = styled.main`
  

`


