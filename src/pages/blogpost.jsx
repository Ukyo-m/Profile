import React from "react"

import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faClock,
  faFolderOpen,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import { graphql } from "gatsby"
import Imgix from "react-imgix"
import unified from "unified"
import parse from "rehype-parse"
import rehypeReact from "rehype-react"

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
      <div className="blog-container">
        <div class="eyecatch">
          <figure>
            <Imgix
              src={data.microcmsBlog.eyecatch.url}
              sizes="(max-width: 1600px) 100vw 1600px"
            />
          </figure>
        </div>

        <article class="content">
          <div class="container">
            <h1>{data.microcmsBlog.title}</h1>

            <aside class="info">
              <time datetime={data.microcmsBlog.publishDate}>
                <FontAwesomeIcon icon={faClock} />
                {data.microcmsBlog.publishDateJP}
              </time>

              <div class="cat">
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

            <div class="postbody">
              {renderAst(htmlAst)}
              {/* <div
              class="postbody"
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

            <ul class="postlink">
              <li class="prev">
                <a href="base-blogpost.html" rel="prev">
                  <FontAwesomeIcon icon={faChevronLeft} />
                  <span>前の記事</span>
                </a>
              </li>
              <li class="next">
                <a href="base-blogpost.html" rel="next">
                  <span>次の記事</span>
                  <FontAwesomeIcon icon={faChevronRight} />
                </a>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    microcmsBlog {
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
