import React from "react"

export default () => {
  var date = new Date()
  var year = date.getFullYear()

  return (
    <footer>
      <p>
        Copyright © {year} <a href>mash!ko</a> All Rights Reserved.
      </p>
    </footer>
  )
}
