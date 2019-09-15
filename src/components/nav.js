import React from 'react'
import styled from '@emotion/styled';
import { Link } from "gatsby"

import { Section, Constraint, theme } from '../styles'
import gatsbyIcon from '../images/gatsby-icon.png'

export const Nav = props => {
  return (
    <nav>
      <Section>
        <StyledConstraint>
          <Link
            style={{ boxShadow: `none` }}
            to='/'
          >
            <Logo src={gatsbyIcon} />
          </Link>
          <NavItems>
            <NavItem>
              <Link to='/gallery'>
                Gallery
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/blog'>
                Blog
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/contact'>
                Contact
              </Link>
            </NavItem>
          </NavItems>
        </StyledConstraint>
      </Section>
    </nav>
  )
}

const StyledConstraint = styled(Constraint)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`

const Logo = styled.img`
  height: 40px;
  width: 40px;
`

const NavItems = styled.ul`
  margin: 0;
  display: flex;
  list-style-type: none;

`

const NavItem = styled.li`
  margin-bottom: 0;
  margin-left: 20px;

  a {
    font-size: 20px;
  }
`
