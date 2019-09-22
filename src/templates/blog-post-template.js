import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import { Section, Constraint } from "../styles"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

class BlogPostTemplate extends React.Component {

  render() {
    const post = this.props.data.contentfulBlogPost
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.title}
          description={post.subtitle}
        />
        <Section>
          <Constraint>
          <article>
          <header>
            <h1
            >
              {post.title}
            </h1>
            <p

            >
              {post.date}
            </p>
          </header>
          <Img fluid={post.headerImage.fluid} />
          {documentToReactComponents(JSON.parse(post.content.content))}
          <hr />
          <footer>
          </footer>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.slug} rel="prev">
                  ← {previous.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.slug} rel="next">
                  {next.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
          </Constraint>
        </Section>

      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulBlogPost( slug: { eq: $slug }) {
      title
      author
      subtitle
      date
      content {
        content
      }
      headerImage {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`
