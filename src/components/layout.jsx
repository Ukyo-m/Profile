import React from "react"

import Header from "./header"
import Nav from "./nav"


export default ({ children }) => {
  return (
    <div className="container">
      <Header />

      {children}

      <Nav />
    </div>
  )
};

