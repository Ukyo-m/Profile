import React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';

export default () => {
  return (
    <nav id="pagination" className="pagination">
      <a id="pagination1" onClick={() => scrollTo('#section1')}>section 1</a>
      <a id="pagination2" onClick={() => scrollTo('#section2')}>section 2</a>
      <a id="pagination3" onClick={() => scrollTo('#section3')}>section 3</a>
      <a id="pagination4" onClick={() => scrollTo('#section4')}>section 4</a>
      <a id="pagination5" onClick={() => scrollTo('#section5')}>section 5</a>
    </nav>
  )
}
