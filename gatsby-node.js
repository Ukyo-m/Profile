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
   * GraphQLとの通信がうまくいかなかったときのエラー処理
   */
  if (blogresult.errors) {
    reporter.panicOnBuild(`GraphQL のクエリでエラーが発生しました。`)
    return
  }

  /**
   * ページの作成
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
}
