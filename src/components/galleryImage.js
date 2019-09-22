import React from "react"
import Img from "gatsby-image"

import { theme } from "../styles"

export const GalleryImage = ({ image }) => {
  return (
    <div>
      <Img
        fluid={image.fluid}
        key={image.id}
        backgroundColor={theme.colors.dark}
      />
    </div>
  )
}


