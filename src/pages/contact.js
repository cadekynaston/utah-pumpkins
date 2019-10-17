import React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import { Section, Constraint, theme, media } from "../styles"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { BreadCrumbs } from "../components/breadCrumbs"

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const heroData = data.allContentfulHero.edges[0].node

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Contact | Utah Pumpkins"
          description="Send us an email if you want to learn more about Utah Pumpkins."
        />
        <BreadCrumbs data={["Home -- /", "Contact"]} />
        <Section>
          <Constraint>
            <Columns>
              <Column className="vertical-center">
                <div className="margin-bottom-30">
                  <h1>Contact Us</h1>
                  <h4>
                    For any questions, comments, or concerns send us a message at:{" "}
                    <a href="mailto:utahpumpkins@gmail.com">
                      utahpumpkins@gmail.com
                    </a>
                  </h4>
                </div>
              </Column>
              <Column>
                <StyledImg
                  fluid={heroData.heroImage.fluid}
                  backgroundColor={theme.colors.dark}
                />
              </Column>
            </Columns>
          </Constraint>
        </Section>
      </Layout>
    )
  }
}

export default Index
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulHero(filter: { page: { eq: "index" } }) {
      edges {
        node {
          heroImage {
            fluid(toFormat: PNG, quality: 90, maxWidth: 700) {
              tracedSVG
              aspectRatio
              src
              srcSet
              sizes
            }
          }
          page
          title {
            title
          }
          subtitle {
            subtitle
          }
        }
      }
    }
  }
`

const StyledImg = styled(Img)``

const Columns = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Column = styled.div`
  width: 55%;
  padding-left: 10px;
  padding-right: 10px;

  &.vertical-center {
    display: flex;
    align-items: center;
  }

  &:nth-of-type(2) {
    width: 45%;
  }

  ${media.medium} {
    width: 100%;
    padding-left: 0;
    padding-right: 0;

    &:nth-of-type(2) {
      width: 100%;
    }
  }
`
