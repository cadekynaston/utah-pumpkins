import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import pictureIcon from "../images/photo-camera.svg"
import { theme, media } from "../styles"

export const GalleryImage = ({ image, alt, title, count }) => {
  return (
    <Relative>
      <Img
        fluid={image.fluid}
        key={image.id}
        backgroundColor={theme.colors.dark}
        alt={`${alt}`}
      />
      <Info>{`${title} - ${count}`} <StyledImage src={pictureIcon} alt="Image Icon" /></Info>
    </Relative>
  )
}

const Relative = styled.div`
  position: relative;
  border-radius: 5px;
`

const StyledImage = styled.img`
  height: 20px;
  width: 20px;
  margin-left: 8px;

  ${media.small} {
    margin-left: 6px;
    height: 16px;
    width: 16px;
  }
`

const Info = styled.p`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  font-weight: 600;
  align-items: center;
  padding: 5px 8px;
  bottom: 0;
  background-color: ${theme.colors.purple};
  color: ${theme.colors.light};

  ${media.small} {
    line-height: 14px;
    font-size: 12px;
  }
`
