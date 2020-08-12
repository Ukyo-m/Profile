import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ location }) => {
  return (
    <Layout>
      <SEO
        pagetitle="ページが見つかりません"
        pagepath="location.pathname"
      />

      <div className="notfound">
        <h1>お探しのページが見つかりませんでした</h1>
      </div>

    </Layout>
  )
}
