import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import { Section, Constraint, theme, media } from "../styles"
import gatsbyIcon from "../images/gatsby-icon.png"

export const Nav = ({ path }) => {
  let currentPage = path.split('/')[1]
  return (
    <StyledNav>
      <Section bgColor={theme.colors.dark}>
        <StyledConstraint>
          <Link to="/">
            <Logo src={gatsbyIcon} />
          </Link>
          <NavItems>
            <NavItem className={currentPage === 'gallery' ? 'active' : ''}>
              <Link to="/gallery">Gallery</Link>
            </NavItem>
            <NavItem className={currentPage === 'blog' ? 'active' : ''}>
              <Link to="/blog">Blog</Link>
            </NavItem>
            <NavItem className={currentPage === 'contact' ? 'active' : ''}>
              <Link to="/contact">Contact</Link>
            </NavItem>
          </NavItems>
        </StyledConstraint>
      </Section>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  margin-bottom: 15px;
  border-bottom: 1px solid ${theme.colors.space};
`

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

  ${media.small} {
    margin-left: 0;
  }

  a {
    padding: 5px 15px;
    color: ${theme.colors.light};
    font-size: 20px;

    &:visited {
      color: ${theme.colors.light};
    }
  }

  &.active {
    a {
      background-color: ${theme.colors.gray};
      color: ${theme.colors.dark};

      &:visited {
        color: ${theme.colors.dark};
      }
    }
    /* border-bottom: 1px solid ${theme.colors.orange}; */
  }

`
