import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import Nav from "../components/nav"

export default ({ children }) => {
  return (
    <div className="container">
      <Nav />

      {children}

      <Header />
      <Footer />
    </div>
  )
}
