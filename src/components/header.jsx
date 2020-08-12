import React from "react"

export default () => {
  return (
    <header className="header">
      <ul className="header--list">
        <li className="header--list__item list__item--link">
          <a href className="home list__item--link-item">Home</a>
        </li>
        <li className="header--list__item list__item--link">
          <a href className="blog list__item--link-item">Blog</a>
        </li>
        <li className="header--list__item list__item--link">
          <a href className="github list__item--link-item">GitHub</a>
        </li>
        <li className="header--list__item list__item--link">
          <a href className="twitter list__item--link-item">Twitter</a>
        </li>
      </ul>
    </header>
  )
}
