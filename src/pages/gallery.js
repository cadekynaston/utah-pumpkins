import React from "react"
import { Link, graphql } from "gatsby"
import styled from '@emotion/styled';

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Header } from "../components/header"
import { Container } from '../components/container';
import { GalleryImage } from '../components/galleryImage';
import { media, theme } from "../styles";

const GalleryPage = props => {

  const { data }  = props
  const images = data.allContentfulAsset.nodes
  const siteTitle = data.site.siteMetadata.title

  let imageYears = new Set()
  images.forEach(image => {
    let year = image.description.split(',').filter(tag => tag.includes('year'))[0].split(':')[1].trim()
    imageYears.add(year)
  })

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="All posts" />
      <Header>
        <h1>
          Check out our gallery if you need some inspiration for your own pumpkin carving fun!
        </h1>
      </Header>
      <Container>
        <h2>check out images by year:</h2>
        <YearLinks>
          {[...imageYears].map(year =>
            <Link to={`/gallery/${year}`} >
              <YearLink>{year}</YearLink>
            </Link>)
          }
        </YearLinks>

        <ImageContainer>
          {
            images.map(image =>
              <GalleryImage image={image} key={image.id} />
            )
          }
        </ImageContainer>
      </Container>
    </Layout>

  )

}

export default GalleryPage
export const pageQuery = graphql`
  query MyQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulAsset {
      nodes {
        id
        title
        description
        fluid(quality: 100, maxWidth: 800) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px 30px;

  ${media.medium} {
    grid-template-columns: 1fr;
  }
`

const YearLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 50px;

`

const YearLink = styled.p`
  padding: 30px 40px;
  font-size: 30px;
  border: 1px solid ${theme.colors.purple};
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
`
