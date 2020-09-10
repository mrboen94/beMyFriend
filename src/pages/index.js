import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/Card"
import Data from "../data/data.json"
import styled from "styled-components"
import { Link } from "gatsby"

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 200px;
  margin: 0 auto;
  color: white;
`

function RenderMail(data) {
  if (data.link !== "mailto:mrboen94@gmail.com") {
    return true
  }
}

const socialData = Data.social

const IndexPage = () => (
  <Layout>
    <SEO title="Add me" />
    <ImageWrapper>
      <Image />
    </ImageWrapper>
    <div style={{ maxWidth: `100%`, marginBottom: `1.45rem` }}>
      {socialData.map(data =>
        RenderMail(data) ? (
          <Link to={data.link} style={{ textDecoration: "none" }}>
            <Card
              title={data.title}
              link={data.link}
              icon={data.icon}
              color={data.backgroundColor}
              text={data.textColor}
            />
          </Link>
        ) : (
          <a href={data.link} style={{ textDecoration: "none" }}>
            <Card
              title={data.title}
              link={data.link}
              icon={data.icon}
              color={data.backgroundColor}
              text={data.textColor}
            />
          </a>
        )
      )}
    </div>
  </Layout>
)

export default IndexPage
