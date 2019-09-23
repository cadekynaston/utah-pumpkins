import React, { useState, useEffect, useRef } from "react"
import styled from "@emotion/styled"
import Select from "react-select"

import { Container } from "../components/container"
import { GalleryImage } from "../components/galleryImage"
import { media, theme } from "../styles"

export const ImageCollection = ({ images }) => {
  const imagesJSX = []
  let imageTags = []

  const [filters, updateFilters] = useState([])
  const selectElement = useRef(null);


  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = e => {

    let selectPosition = selectElement.current.offsetTop
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop

    if (scrollPosition > selectPosition - 15) {
      selectElement.current.classList.add('fixed')
    }

    if (scrollPosition < selectPosition - 15) {
      selectElement.current.classList.remove('fixed')
    }
  }

  const checkFilters = description => {
    let included = true
    filters.forEach(filter => {
      if (!description.includes(filter)) {
        included = false
      }
    })
    return included
  }

  images.forEach(image => {
    // don't show hidden images or images that aren't in the filter
    if (
      !image.description.includes("hidden") &&
      (!filters.length || checkFilters(image.description))
    ) {
      imagesJSX.push(
        <ImageContainer key={image.id}>
          <GalleryImage image={image} />
        </ImageContainer>
      )
      image.description.split(",").forEach(tag => {
        imageTags.push(tag.trim())
      })
    }
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
    <Container>
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
    </Container>
  )
}

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px 20px;

  ${media.medium} {
    grid-template-columns: 1fr 1fr;
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

    }

    &::before {
      content: ' ';
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
