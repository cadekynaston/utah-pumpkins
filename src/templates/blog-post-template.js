import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "@emotion/styled"

import { Section, Constraint } from "../styles"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { BreadCrumbs } from '../components/breadCrumbs';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulBlogPost
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.title} description={post.subtitle} />
        <BreadCrumbs data={["Home -- /", "Blog -- /blog/", post.title]} />

        <Section>
          <BlogConstraint>
            <article>
              <StyledHeader>
                <h1>{post.title}</h1>
                <h4>{post.subtitle}</h4>
                <p>Written by Tina Manning | {post.date}</p>
              </StyledHeader>
              <StyledImg fluid={post.headerImage.fluid} />
              <BlogContentStyles>
                {documentToReactComponents(JSON.parse(post.content.content))}
              </BlogContentStyles>
              <Hr />
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
          </BlogConstraint>
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
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      author
      subtitle
      date(formatString: "MMMM DD, YYYY")
      content {
        content
      }
      headerImage {
        fluid(maxWidth: 700, quality: 90) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

const BlogConstraint = styled(Constraint)`
  max-width: 700px;
`

const StyledHeader = styled.header`
  h1 {
    margin-bottom: 30px;
  }

  p {
    font-size: 12px;
    margin-bottom: 20px;
  }

`

const StyledImg = styled(Img)`
  margin-bottom: 30px;
`

const Hr = styled.hr`
  margin-top: 30px;
`

const BlogContentStyles = styled.div`
  p,
  h4 {
    margin-bottom: 15px;
  }
`
