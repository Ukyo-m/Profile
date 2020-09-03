import React from "react"
import { graphql, Link } from 'gatsby';

import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
      <div className="blog-page">

        <div className="content">
          <h1>最近の投稿</h1>
          <div className="posts">
            {data.allMicrocmsBlog.edges.map(function ({ node }) {
              let imgUrl = ""

              // アイキャッチがあるかの判断
              if (!node.eyecatch) {
                imgUrl = "/thumb.jpg"

              } else {
                imgUrl = node.eyecatch.url
              }

              return (
                <article className="post" key={node.id}>
                  <Link to={`blog/post/${node.slug}`}>

                    <figure>
                      <img src={imgUrl} alt="" />
                    </figure>
                    <h3 className="post-title">{node.title}</h3>
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}


export const query = graphql`
  query {
    allMicrocmsBlog(sort: {order: DESC, fields: publishDate}, limit: 5, skip: 0) {
      edges {
        node {
          title
          id
          slug
          eyecatch{
            url
          }
        }
      }
    }
  }
`

