import React from "react"
import styled from "@emotion/styled"

import { media, Section, Constraint } from "../styles"

export const Footer = () => {
  return (
    <Section>
      <StyledConstraint>
        <StyledFooter>
          <div>
            © {new Date().getFullYear()}, Built by{" "}
            <a href="https://cade.codes"> Cade Kynaston </a> using
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
            {` + `}
            <a href="https://www.contentful.com/">Contentful</a>
          </div>
          <Shoutout>
            Logo provided by <a href="https://mwhstudios.com/">MWH STUDIOS</a>
          </Shoutout>
        </StyledFooter>
      </StyledConstraint>
    </Section>
  )
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  font-size: 14px;

  ${media.medium} {
    flex-direction: column;
  }
`

const Shoutout = styled.div`
  ${media.medium} {
    margin-top: 15px;
  }
`

const StyledConstraint = styled(Constraint)`
  padding-top: 30px !important;
  padding-bottom: 30px !important;
`
