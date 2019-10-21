import React, { useState } from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Section, Constraint, theme, media } from "../styles"
import { BreadCrumbs } from "../components/breadCrumbs"

const IndividualImageTemplate = props => {
  const { data } = props
  const [showMoreRelatedImages, updateShowMoreRelatedImages] = useState(false)

  const mainImage = data.MainImages
  const relatedImages = data.RelatedImages.edges

  // const images = data.allContentfulGallery.edges[0].node.galleryImages
  // const siteTitle = data.site.siteMetadata.title
  // const heroData = data.allContentfulHero.edges[0].node



  return (
    <Layout location={props.location} title={"hi"}>
      <BreadCrumbs
        data={["Home -- /", "Gallery -- /gallery", mainImage.title]}
      />
      <SEO
        title={`${mainImage.description.description} | Utah Pumpkins`}
        description={`${mainImage.description.description}. Utah Pumpkins is your go-to place for pumpkin carving ideas and inspiration.`}
        ogImagePath={`${mainImage.images[0].fluid.src}`} />
      <Section>
        <Constraint>
          <StyledH2>{mainImage.description.description}</StyledH2>
          {mainImage.images.map(image => (
            <FeaturedImage
              key={image.id}
              fluid={image.fluid}
              backgroundColor={theme.colors.dark}
            />
          ))}
          {relatedImages.length > 0 && (
            <>
              <h3>Related Images</h3>
              <RelatedImagesContainer>
                {relatedImages.map((image, i) => {
                  if (!showMoreRelatedImages && i > 4) {
                    return null
                  }
                  return (
                    <Link
                      key={`${image.node.id}${i}`}
                      to={`/gallery/${image.node.slug}/`}
                    >
                      <RelatedImage
                        fluid={image.node.images[0].fluid}
                        backgroundColor={theme.colors.dark}
                      />
                    </Link>
                  )
                })}
              </RelatedImagesContainer>
              {relatedImages.length > 5 && (
                <ViewMoreButton
                  onClick={() =>
                    updateShowMoreRelatedImages(prevState => !prevState)
                  }
                >
                  {showMoreRelatedImages ? "View Less" : "View More"}
                </ViewMoreButton>
              )}
            </>
          )}
        </Constraint>
      </Section>
    </Layout>
  )
}

export default IndividualImageTemplate
export const IndividualImageTemplateQuery = graphql`
  query IndividualImageTemplateQuery(
    $pumpkinsId: String!
    $relatedImageTags: [String]!
  ) {
    MainImages: contentfulPumpkinImage(id: { eq: $pumpkinsId }) {
      id
      title
      description {
        description
      }
      images {
        id
        fluid(maxWidth: 900, quality: 100) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
    RelatedImages: allContentfulPumpkinImage(
      filter: { tags: { in: $relatedImageTags }, id: { ne: $pumpkinsId } }
    ) {
      edges {
        node {
          tags
          slug
          title
          images {
            fluid(maxWidth: 250, quality: 90) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const StyledH2 = styled.h2`
  margin-bottom: 50px;
  text-align: center;

  ${media.small} {
    text-align: left;
  }
`

const FeaturedImage = styled(Img)`
  max-width: 900px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
`

const RelatedImage = styled(Img)``

const RelatedImagesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 20px;

  ${media.medium} {
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
`

const ViewMoreButton = styled.button`
  margin-top: 15px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`
