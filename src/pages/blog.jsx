import React from "react"

import Layout from "../components/layout"

export default ({ location }) => {
  return (
    <Layout>
      <div className="notfound">
        <h1>
          ブログページはただいま工事中です。
          <br />
          今しばらくお待ちください。
        </h1>
      </div>
    </Layout>
  )
}
