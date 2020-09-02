import React from "react"

import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faClock,
  faFolderOpen,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
// import { graphql } from "gatsby"

export default () => {
  return (
    <Layout>
      <div className="blog-container">
        <div class="eyecatch">
          <figure>
            <img src="thumb.jpg" alt="アイキャッチ画像の説明" />
          </figure>
        </div>

        <article class="content">
          <div class="container">
            <h1>記事のタイトル</h1>

            <aside class="info">
              <time datetime="XXXX-XX-XX">
                <FontAwesomeIcon icon={faClock} />
                XXXX年XX月XX日
              </time>

              <div class="cat">
                <FontAwesomeIcon icon={faFolderOpen} />
                <ul>
                  <li class="スラッグ">カテゴリーＡ</li>
                  <li class="スラッグ">カテゴリーＢ</li>
                </ul>
              </div>
            </aside>

            <div class="postbody">
              <h2>見出し２見出し２</h2>
              <h3>見出し３見出し３</h3>
              <h4>見出し４見出し４</h4>
              <p>
                記事の本文です。記事の本文です。記事の本文です。記事の本文です。記事の本文です。
                記事の本文です。記事の本文です。記事の本文です。記事の本文です。記事の本文です。
                記事の本文です。記事の本文です。記事の本文です。記事の本文です。記事の本文です。
              </p>
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

// export const query = graphql``
