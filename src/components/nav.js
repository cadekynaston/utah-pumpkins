import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import { Section, Constraint, theme, media } from "../styles"
import { MainLogo } from './logos/mainLogo'

export const Nav = ({ path }) => {
  return (
    <StyledNav>
      <Section bgColor={theme.colors.dark}>
        <StyledConstraint>
          <Link to="/">
            <MainLogo />
          </Link>
          <FlexContainer>
            <NavItems>
              <NavItem>
                <Link to="/blog/">Blog</Link>
              </NavItem>
              <NavItem>
                <Link to="/contact/">Contact</Link>
              </NavItem>
            </NavItems>
            <Link to="/gallery/">
              <GalleryButton>
                Gallery
              </GalleryButton>
            </Link>
          </FlexContainer>


        </StyledConstraint>
      </Section>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  margin-bottom: 10px;
`

const StyledConstraint = styled(Constraint)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px !important;
  padding-bottom: 5px !important;

  ${media.medium} {
    flex-direction: column;
  }
`

const NavItems = styled.ul`
  margin: 0;
  display: flex;
  list-style-type: none;

  ${media.medium} {
    margin-bottom: 15px;
  }
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
  }

`

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`

const GalleryButton = styled.button`
  margin-left: 20px;
`
