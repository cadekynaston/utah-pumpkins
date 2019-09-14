import React from "react"

import { Nav } from "./nav"
import { GlobalStyles } from './globalStyles';

class Layout extends React.Component {

  render() {
    console.log('hi')
    const { location, title, children } = this.props
    return (
        <>
        <GlobalStyles />
        <Nav />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </>
    )
  }
}

export default Layout
