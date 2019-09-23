import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ImageCollection } from "../components/imageCollection"
import { GalleryLinks } from "../components/galleryLinks"
import { Section, Constraint, theme, media } from "../styles"

const SingleImageTemplate = props => {
  const { data } = props

  const mainImage = data.MainImage
  // const relatedImages = data.RelatedImages.edges
  // const images = data.allContentfulGallery.edges[0].node.galleryImages
  // const siteTitle = data.site.siteMetadata.title
  // const heroData = data.allContentfulHero.edges[0].node

  return (
    <Layout location={props.location} title={"hi"}>
      <SEO title="All posts" />
      <Section>
        <Constraint>
          <h1>{`${mainImage.title} Pumpkin`}</h1>
          <Img fluid={mainImage.fluid} backgroundColor={theme.colors.dark} />
          {relatedImages.map(image => {
            return (
              <Img
                fluid={image.node.fluid}
                backgroundColor={theme.colors.dark}
              />
            )
          })}
        </Constraint>
      </Section>
    </Layout>
  )
}

export default SingleImageTemplate
export const SingleImageTemplateQuery = graphql`
  query SingleImageTemplateQuery(
    $imageID: String!
    # $relatedImagesRegex: String!
  ) {
    MainImage: contentfulAsset(id: { eq: $imageID }) {
      id
      title
      description
      fluid(maxWidth: 900, quality: 100, toFormat: WEBP) {
        ...GatsbyContentfulFluid_tracedSVG
      }
    }
    # RelatedImages: allContentfulAsset(
    #   limit: 20
    #   filter: { description: { regex: $relatedImagesRegex } }
    # ) {
    #   edges {
    #     node {
    #       id
    #       title
    #       description
    #       fluid(maxWidth: 300, quality: 100) {
    #         ...GatsbyContentfulFluid_tracedSVG
    #       }
    #     }
    #   }
    # }
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
