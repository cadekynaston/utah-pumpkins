import React from "react"
import styled from '@emotion/styled';
import Img from "gatsby-image"

import { theme, media, Section, Constraint } from '../styles'

export const Footer = () => {

  return (
    <Section>
      <StyledConstraint>
        <StyledFooter>
          © {new Date().getFullYear()}, Built by <a href="https://cade.codes"> Cade Kynaston </a> using
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          {` + `}
          <a href="https://www.contentful.com/">Contentful</a>
        </StyledFooter>
      </StyledConstraint>
    </Section>
  )
}

const StyledFooter = styled.footer`

`

const StyledConstraint = styled(Constraint)`
  padding-top: 30px;
  padding-bottom: 30px;
`
