import React from 'react'
import styled from '@emotion/styled';

import { Section, Constraint } from '../styles'
import Img from "gatsby-image"


export const Header = ({ children, img }) => {
  return (
    <Section>
      <Constraint>
        <Columns>
         <Column>
            {children}
         </Column>
         <Column>
            {/* <Img fluid={img}  /> */}
         </Column>
        </Columns>
      </Constraint>
    </Section>
  )
}

const Columns = styled.div`
  display: flex;
  flex-direction: row;
`
const Column = styled.div`
  width: 50%;
`
