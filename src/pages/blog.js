import React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"

import { Section, Constraint, theme } from "../styles"
// import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Header } from "../components/header"
import { BreadCrumbs } from "../components/breadCrumbs"

class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allContentfulBlogPost.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <BreadCrumbs data={["Home -- /", "Blog"]} />
        <Section>
          <Constraint>
            <SEO
              title="Blog | Utah Pumpkins"
              description="Utah Pumpkins blog featured helpful pumpkin carving tips and tricks as well as halloween inspiration."
            />
            {posts.map(({ node }) => {
              const title = node.title || node.slug
              return (
                <Article key={node.slug}>
                  <header>
                    <h3>
                      <Link
                        style={{ boxShadow: `none` }}
                        to={`/blog/${node.slug}`}
                      >
                        {title}
                      </Link>
                    </h3>
                  </header>
                  <section>
                    <p>{node.subtitle}</p>
                    <small>{node.date}</small>
                  </section>
                </Article>
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
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`

const Article = styled.article`
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.colors.gray};
  padding: 20px 30px;
  border-radius: 5px;
`
