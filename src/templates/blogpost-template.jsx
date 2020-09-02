import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faClock,
  faFolderOpen,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import { graphql, Link } from "gatsby"
import Imgix from "react-imgix"
import unified from "unified"
import parse from "rehype-parse"
import rehypeReact from "rehype-react"
import htmlToText from "html-to-text"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  Fragment: React.Fragment,
  components: {
    img: props => {
      return (
        <Imgix
          src={props.src}
          sizes="(max-width: 800px) 100vw 800px"
          htmlAttributes={{
            alt: props.alt,
          }}
        />
      )
    },
  },
}).Compiler

export default ({ data, pageContext, location }) => {
  const htmlAst = unified()
    .use(parse, { fragment: true })
    .parse(data.microcmsBlog.content)

  return (
    <Layout>
      <SEO
        pagetitle={data.microcmsBlog.title}
        pagedesc={`${htmlToText
          .fromString(data.microcmsBlog.content, {
            ignoreImage: true,
            ignoreHref: true,
          })
          .slice(0, 70)}...`}
        pagepath={location.pathname}
        imgurl={data.microcmsBlog.eyecatch.url}
      />
      <div className="blog-container">
        <div className="eyecatch">
          <figure>
            <Imgix
              src={data.microcmsBlog.eyecatch.url}
              sizes="(max-width: 1600px) 100vw 1600px"
            />
          </figure>
        </div>

        <article className="content">
          <div className="container">
            <h1>{data.microcmsBlog.title}</h1>

            <aside className="info">
              <time datetime={data.microcmsBlog.publishDate}>
                <FontAwesomeIcon icon={faClock} />
                {data.microcmsBlog.publishDateJP}
              </time>

              <div className="cat">
                <FontAwesomeIcon icon={faFolderOpen} />
                <ul>
                  {data.microcmsBlog.category.map(cat => (
                    <li className={cat.categorySlug} key={cat.id}>
                      {cat.category}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="postbody">
              {renderAst(htmlAst)}
              {/* <div
              className="postbody"
              dangerouslySetInnerHTML={{ __html: data.microcmsBlog.content }}
            > */}
              {/* <h2>見出し２見出し２</h2>
              <h3>見出し３見出し３</h3>
              <h4>見出し４見出し４</h4>
              <p>
                記事の本文です。記事の本文です。記事の本文です。記事の本文です。記事の本文です。
                記事の本文です。記事の本文です。記事の本文です。記事の本文です。記事の本文です。
                記事の本文です。記事の本文です。記事の本文です。記事の本文です。記事の本文です。
              </p> */}
            </div>

            <ul className="postlink">
              {pageContext.next && (
                <li className="prev">
                  <Link to={`/blog/post/${pageContext.next.slug}`} rel="prev">
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <span>{pageContext.next.title}</span>
                  </Link>
                </li>
              )}
              {pageContext.previous && (
                <li className="next">
                  <Link
                    to={`/blog/post/${pageContext.previous.slug}`}
                    rel="next"
                  >
                    <FontAwesomeIcon icon={faChevronRight} />
                    <span>{pageContext.previous.title}</span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    microcmsBlog(id: { eq: $id }) {
      title
      publishDateJP: publishDate(formatString: "YYYY年MM月DD日")
      publishDate
      category {
        category
        categorySlug
        id
      }
      eyecatch {
        url
      }
      content
    }
  }
`
