import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "@emotion/styled"

export const GalleryLinks = () => {
  const data = useStaticQuery(graphql`
    query GalleryButtonsQuery {
      allContentfulGallery {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `)
  const galleries = data.allContentfulGallery.edges
  return (
    <PopularGalleries>
      {galleries.map((gallery, i) => (
        <Link key={i} to={`/gallery/${gallery.node.slug}`}>
          <button>{gallery.node.title}&nbsp;›</button>
        </Link>
      ))}
    </PopularGalleries>
  )

}

const PopularGalleries = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;

  a,
  button {
    width: 100%;
  }
`
