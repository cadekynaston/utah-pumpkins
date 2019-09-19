import React, { useState } from "react"
import styled from '@emotion/styled';
import Select from 'react-select';

import { Container } from '../components/container';
import { GalleryImage } from '../components/galleryImage';
import { media } from '../styles'

export const ImageCollection = ({ images }) => {

  const imagesJSX = []
  let imageTags = []

  const [filters, updateFilters] = useState([])

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
    if (! image.description.includes('hidden') && (!filters.length || checkFilters(image.description))) {
      imagesJSX.push(
        <ImageContainer key={image.id}>
          <GalleryImage image={image} />
        </ImageContainer>
      )
      image.description.split(',').forEach(tag => {
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
      <SelectContainer>
        <h4>Filter: </h4>
        <Select
          isMulti
          name="filters"
          options={selectOptions}
          className="pumpkin-select"
          classNamePrefix="pumpkin-select"
          onChange={handleChangeFilter}
          // menuIsOpen={true}
        />
      </SelectContainer>
      <ImageGrid>
        {imagesJSX}
      </ImageGrid>
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
  align-items: center;
  margin-bottom: 50px;
  /* width: 600px; */

  h4 {
    margin-right: 10px;
  }

`
