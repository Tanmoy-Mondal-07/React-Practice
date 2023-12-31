import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">ab</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <button className="nav-link active" onClick={props.white} aria-current="page">white</button>
        </li>
        <li className="nav-item">
          <button className="nav-link"onClick={props.black}>Black</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

Navbar.propTypes = {title: PropTypes.string}

Navbar.defaultProps = {
    title: 'set title here'
}