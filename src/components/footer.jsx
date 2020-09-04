import React from "react"
import { Link } from "gatsby"

export default () => {
  var date = new Date()
  var year = date.getFullYear()

  return (
    <footer>
      <p>
        Copyright © {year} <Link to="/">mash!ko</Link> All Rights Reserved.
      </p>
    </footer>
  )
}
