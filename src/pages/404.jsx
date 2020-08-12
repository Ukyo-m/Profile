import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <Layout>
      <SEO />

      <div className="notfound">
        <h1>お探しのページが見つかりませんでした</h1>
      </div>

    </Layout>
  )
}

export const query = graphql`
query {
  file(relativePath: {eq: "profile.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 200) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

