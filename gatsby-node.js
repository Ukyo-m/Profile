const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  /**
   * GraphQLでmicroCMSから記事の呼び出し
   */
  const blogresult = await graphql(`
    query {
      allMicrocmsBlog(sort: { fields: publishDate, order: DESC }) {
        edges {
          node {
            id
            slug
            title
          }
          next {
            title
            slug
          }
          previous {
            title
            slug
          }
        }
      }
    }
  `)

  /**
   * 通信がうまくいかなかったときのエラー処理
   */
  if (blogresult.errors) {
    reporter.panicOnBuild(`GraphQL のクエリでエラーが発生しました。`)
    return
  }

  /**
   * 記事ページの作成
   */
  blogresult.data.allMicrocmsBlog.edges.forEach(({ node, next, previous }) => {
    createPage({
      path: `/blog/post/${node.slug}`,
      component: path.resolve(`./src/templates/blogpost-template.jsx`),
      context: {
        id: node.id,
        next,
        previous,
      },
    })
  })

  /**
   * 記事一覧の設定
  */
  const blogPostsPerPage = 6 // １ページに表示する記事の数
  const blogPosts = blogresult.data.allMicrocmsBlog.edges.length // 記事の総数
  const blogPages = Math.ceil(blogPosts / blogPostsPerPage) // 記事一覧ページの総数

  Array.from({ length: blogPages }).forEach((_, i) => {
    console.log("ブログページ", i);

    createPage({
      path: i === 0 ? `/blog/` : `/blog/${i + 1}/`,
      component: path.resolve("./src/templates/blog-template.jsx"),
      context: {
        skip: blogPostsPerPage * i,
        limit: blogPostsPerPage,
        currentPage: i + 1, // 現在のページ番号
        isFirst: i + 1 === 1, // 最初のページ
        isLast: i + 1 === blogPages, // 最後のページ
      },
    })
  })
}
