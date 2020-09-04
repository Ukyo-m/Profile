import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

export default ({ children }) => {
  return (
    <div className="container">
      <Header />

      <main className="main">
        {children}
      </main>

      <Footer />
    </div>
  )
}
