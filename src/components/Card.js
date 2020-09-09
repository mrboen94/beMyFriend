import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledDiv = styled.div`
  background-color: #2e2e2e;
  border-radius: 8px;
  width: 100%;
  height: 100px;
  margin: 0 auto;
  margin-top: 10px;
  text-align: center;
`

const StyledIcon = styled.div`
  height: 100%;
  width 100px;
  padding: .5em;
  margin: 0 auto;
`

export default function Card({ title, link, icon, color, text }) {
  return (
    <StyledDiv style={{ backgroundColor: color }}>
      <StyledIcon>
        <img src={icon} alt="icon" />
      </StyledIcon>
      <Link to={link} style={{ color: text, textDecoration: "none" }}>
        <h1>{title}</h1>
      </Link>
    </StyledDiv>
  )
}
