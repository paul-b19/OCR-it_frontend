import React from 'react'

const NavBar  = (props) => {

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <img className="logo navbar-brand" src={process.env.PUBLIC_URL + '/logo.png'} alt='Logo'/>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search by title"
                 value={props.searchValue}
                 onChange={props.handleSearch} />
        </form>
      </div>
    </nav>
  )
}

export default NavBar