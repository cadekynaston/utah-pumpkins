import React from 'react'

import { Section, Constraint } from '../styles'


export const Header = ({ children }) => {
  return (
    <Section>
      <Constraint>
        {children}
      </Constraint>
    </Section>
  )
}
