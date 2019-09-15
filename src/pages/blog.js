import React from "react"
import { Link, graphql } from "gatsby"
import styled from '@emotion/styled';

import { Section, Constraint } from '../styles'
// import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Header } from "../components/header"

class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allContentfulBlogPost.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Section>
          <Constraint>
            <Header>
            <h1>
              BLOG PAGE
            </h1>
          </Header>
          <SEO title="All posts" />
          {/* <Bio /> */}
          {posts.map(({ node }) => {
            const title = node.title || node.slug
            return (
              <article key={node.slug}>
                <header>
                  <h3>
                    <Link style={{ boxShadow: `none` }} to={node.slug}>
                      {title}
                    </Link>
                  </h3>
                  <small>{node.date}</small>
                </header>
                <section>
                  <p>{node.subtitle}</p>
                </section>
              </article>
            )
          })}
          </Constraint>
        </Section>
      </Layout>
    )
  }
}

export default BlogPage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost {
      edges {
        node {
          title
          slug
          subtitle
          author
          date
        }
      }
    }
  }
`
