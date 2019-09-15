import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"


class ImageGalleryTemplate extends React.Component {
  render() {
    const data = this.props.pageContext
    return (
      <Layout location={this.props.location} title={'hi'}>
        <h1>{data.year} gallery</h1>
      </Layout>
    )
  }
}

export default ImageGalleryTemplate
