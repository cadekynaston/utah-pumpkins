import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import { Section, Constraint } from "../styles"

export const BreadCrumbs = ({ data }) => {
  const BreadCrumbsJSX = []
  data.forEach((item, i) => {
    let items = item.split(" -- ")
    if (items.length > 1) {
      BreadCrumbsJSX.push(<Link key={`link${i}`} to={items[1]}>{items[0]}</Link>)
      BreadCrumbsJSX.push(<p key={`p${i}`}> › </p>)
    } else {
      BreadCrumbsJSX.push(<p key={i}> {item} </p>)
    }
  })

  return (
    <Section>
      <StyledConstraint>{BreadCrumbsJSX}</StyledConstraint>
    </Section>
  )
}

const StyledConstraint = styled(Constraint)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 0 !important;
  padding-bottom: 20px !important;

  > * {
    margin-right: 5px;
  }
`
