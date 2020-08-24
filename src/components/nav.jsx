import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

export default () => {
  return (
    <nav id="pagination" className="pagination">
      <button id="pagination1" onClick={() => scrollTo("#section1")}>
        section 1
      </button>
      <button id="pagination1" onClick={() => scrollTo("#section2")}>
        section 2
      </button>
      <button id="pagination1" onClick={() => scrollTo("#section3")}>
        section 3
      </button>
      <button id="pagination1" onClick={() => scrollTo("#section4")}>
        section 4
      </button>
      <button id="pagination1" onClick={() => scrollTo("#section5")}>
        section 5
      </button>
    </nav>
  )
}
