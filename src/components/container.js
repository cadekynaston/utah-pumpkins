import React from 'react'

import { Section, Constraint } from '../styles'


export const Container = ({ children }) => {
  return (
    <Section>
      <Constraint>
        {children}
      </Constraint>
    </Section>
  )
}
