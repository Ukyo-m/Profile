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

          <aside className="info">
            <time datetime="XXXX-XX-XX">XXXX年XX月XX日</time>
            <div className="cat">
              <ul>
                <li className="slug">カテゴリーA</li>
                <li className="slug">カテゴリーB</li>
              </ul>
            </div>
          </aside>

          <div className="postbody">
            <p>
              記事の本文テキスト。記事の本文テキスト。記事の本文テキスト。記事の本文テキスト。記事の本文テキスト。記事の本文テキスト。記事の本文テキスト。記事の本文テキスト。記事の本文テキスト。記事の本文テキスト。記事の本文テキスト。記事の本文テキスト。記事の本文テキスト。記事の本文テキスト。記事の本文テキスト。記事の本文テキスト。記事の本文テキスト。記事の本文テキスト。記事の本文テキスト。記事の本文テキスト。記事の本文テキスト。記事の本文テキスト。記事の本文テキスト。記事の本文テキスト。記事の本文テキスト。記事の本文テキスト。記事の本文テキスト。記事の本文テキスト。記事の本文テキスト。記事の本文テキスト。記事の本文テキスト。記事の本文テキスト。記事の本文テキスト。記事の本文テキスト。記事の本文テキスト。
            </p>
          </div>
        </div>

        <ul className="postlink">
          <li className="prev">
            <a href="">
              <span>前の記事</span>
            </a>
          </li>
          <li className="next">
            <a href="">
              <span>次の記事</span>
            </a>
          </li>
        </ul>
      </article>
    </Layout>
  )
}
