import React from "react"
import { Link } from "gatsby"

export default () => {
  return (
    <header className="header">
      <ul className="header--list">
        <li className="header--list__item list__item--link">
          <Link className="home list__item--link-item" to="/">
            Home
          </Link>
        </li>
        <li className="header--list__item list__item--link">
          <Link className="blog list__item--link-item" to="/blog">
            Blog
          </Link>
        </li>
        <li className="header--list__item list__item--link">
          <a
            href="https://github.com/Ukyo-m/"
            target="_blank"
            rel="noopener noreferrer"
            className="github list__item--link-item"
          >
            GitHub
          </a>
        </li>
        {/* <li className="header--list__item list__item--link">
          <a href className="twitter list__item--link-item">
            Twitter
          </a>
        </li> */}
      </ul>
    </header>
  )
}
