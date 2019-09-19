import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"

import { theme, media } from "../styles"

export const GalleryImage = ({ image }) => {
  const tags = image.description.split(",")
  return (
    <ImageContainer>
      <Img
        fluid={image.fluid}
        key={image.id}
        backgroundColor={theme.colors.orange}
      />
      <ImageDescription>{image.description}</ImageDescription>
      {/* <ImageTags>
        {tags.map(tag => <ImageTag key={tag}>{tag}</ImageTag>)}
      </ImageTags> */}
    </ImageContainer>
  )
}

const ImageContainer = styled.div``

const ImageDescription = styled.p`
  ${media.small} {
    font-size: 12px;
  }
`

const ImageTags = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  list-style-type: none;
`

const ImageTag = styled.li`
  margin-right: 15px;
  font-size: 20px;
  padding: 5px;
  color: ${theme.colors.dark};
  border: 1px solid ${theme.colors.dark};
  border-radius: 4px;
`
