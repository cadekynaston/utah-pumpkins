import React, { useState, useEffect, useRef } from "react"
import styled from "@emotion/styled"
import Select from "react-select"
import { Link } from "gatsby"

import { GalleryImage } from "../components/galleryImage"
import { media, theme } from "../styles"

export const ImageCollection = ({ images }) => {

  const imagesJSX = []
  let imageTags = []

  const [filters, updateFilters] = useState([])
  const selectElement = useRef(null)

  useEffect(() => {
    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScroll = e => {
    let selectPosition = selectElement.current.offsetTop
    let scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop

    if (scrollPosition > selectPosition - 15) {
      selectElement.current.classList.add("fixed")
    }

    if (scrollPosition < selectPosition - 15) {
      selectElement.current.classList.remove("fixed")
    }
  }

  images.forEach(image => {

    if (!filters.length || image.node.tags.some(r => filters.includes(r))) {
      image.node.images.forEach(img => {
        imagesJSX.push(
          <ImageContainer key={img.id}>
            <Link to={`/gallery/${image.node.slug}`}>
              <GalleryImage alt={image.node.description.description} image={img} />
            </Link>
          </ImageContainer>
        )
      })
    }
    imageTags = imageTags.concat(image.node.tags)
  })

  imageTags = [...new Set(imageTags)]
  let selectOptions = imageTags.map(tag => {
    return { value: tag, label: tag }
  })

  const handleChangeFilter = tags => {
    let tagsArray = []
    if (tags) {
      for (let i = 0; i < tags.length; i++) {
        tagsArray.push(tags[i].value)
      }
    }
    updateFilters(tagsArray)
  }

  return (
    <>
      <SelectContainer ref={selectElement}>
        <Select
          isMulti
          name="filters"
          options={selectOptions}
          className="pumpkin-select"
          classNamePrefix="pumpkin-select"
          onChange={handleChangeFilter}
          placeholder="Filter..."
          // menuIsOpen={true}
        />
      </SelectContainer>
      <ImageGrid>{imagesJSX}</ImageGrid>
    </>
  )
}

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  ${media.medium} {
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
`

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  height: 50px;
  position: relative;

  .pumpkin-select {
    position: absolute;
    top: 20px;
    z-index: 20;
  }

  &.fixed {
    .pumpkin-select {
      position: fixed;
      top: 20px;
      z-index: 20;
      padding-left: .8rem;
      padding-right: .8rem;
    }

    &::before {
      content: " ";
      height: 90px;
      width: 100vw;
      background-color: ${theme.colors.dark};
      top: 0;
      position: fixed;
      top: 0;
      z-index: 20;
    }
  }
`
