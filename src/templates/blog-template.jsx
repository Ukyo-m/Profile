import React from "react"
import { graphql, Link } from 'gatsby';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"


import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data, location, pageContext }) => {

  console.log("pageContext.skip", pageContext.skip);
  console.log("pageContext.limit", pageContext.limit);

  return (
    <Layout>
      <SEO
        pagetitle="ブログ"
        pagedesc="mash!koのブログ"
        pagepath={location.pathname}
      />
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
                  <Link to={`/blog/post/${node.slug}`}>

                    <figure>
                      <img src={imgUrl} alt="" />
                    </figure>
                    <h3 className="post-title">{node.title}</h3>
                  </Link>
                </article>
              )
            })}
          </div>
          <ul className="pagenation">
            {!pageContext.isFirst && (
              <Link to={
                pageContext.currentPage === 2
                  ? `/blog/`
                  : `/blog/${pageContext.currentPage - 1}`
              }
                rel="prev"
              >
                前のページ
              </Link>
            )}
            <li className="prev">
              <FontAwesomeIcon icon={faChevronLeft} />
              <span>前のページ</span>
            </li>
            <li className="next">
              <FontAwesomeIcon icon={faChevronRight} />
              <span>次のページ</span>
            </li>
          </ul>

        </div>
      </div>
    </Layout>
  )
}


export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMicrocmsBlog(
      sort: {order: DESC, fields: publishDate},
      limit: $skip,
      skip: $limit
      ) {
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

