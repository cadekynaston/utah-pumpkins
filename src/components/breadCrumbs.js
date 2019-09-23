import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import { Section, Constraint, theme } from "../styles"

export const BreadCrumbs = ({ path }) => {
  let pathArray = path.split("/")
  pathArray.shift()
  let url = "/"
  const breadCrumbsJSX = []
  pathArray.forEach((item, index) => {
    url += item + "/"
    // capitalize first letters
    item = item
      .toLowerCase()
      .split(/[- ]/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    breadCrumbsJSX.push(<p key={`${item}sep${index}`}> › </p>)
    if( index === pathArray.length - 1) {
      breadCrumbsJSX.push(<p key={`${item}p`}> {item}</p>)
    } else {
      breadCrumbsJSX.push(<Link key={`${item}link`} to={url}>{item}</Link>)
    }
  })

  return (
    <Section>
      <StyledConstraint>
      <Link key="home" to={url}>Home</Link>
      {breadCrumbsJSX}</StyledConstraint>
    </Section>
  )
}

const StyledConstraint = styled(Constraint)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 0;
  padding-bottom: 20px;

  > * {
    margin-right: 5px;
  }
`
