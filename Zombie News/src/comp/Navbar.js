import React from 'react'

const Navbar = (props) => {


  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href=" /">ZombieNews</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href=" /" className="nav-link active" aria-current="page">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Country
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">India</a></li>
                  <li><button className="dropdown-item" onClick={props.us}>United States</button></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href=" /" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">General</a></li>
                  <li><a className="dropdown-item" href="/business">Business</a></li>
                  <li><a className="dropdown-item" href="/entertainment">Entertainment</a></li>
                  <li><a className="dropdown-item" href="/health">Health</a></li>
                  <li><a className="dropdown-item" href="/science">Science</a></li>
                  <li><a className="dropdown-item" href="/sports">Sports</a></li>
                  <li><a className="dropdown-item" href="/technology">Technology</a></li>

                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <a className="btn btn-outline-success" href="/search" type="submit">Search</a>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
