import React from "react"

import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
      <div className="catcheye">
        <figure>
          <img src="/thumb.jpg" alt="キャッチアイ画像の説明" srcset="" />
        </figure>
      </div>

      <article className="content">
        <div className="container">
          <h1>記事のタイトル</h1>
        </div>
      </article>
    </Layout>
  )
}
