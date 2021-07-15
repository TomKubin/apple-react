import React from "react"

class Menu extends React.Component{
    render(){
        return(
      <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
        <div className='menu'>
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img src={process.env.PUBLIC_URL + "/img/apple-logo.png"} width="28" height="28" alt="logo"/>
            </a>
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
    
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a href="/macintosh" className="navbar-item">MacIntosh</a>

              <a href="/contact" className="navbar-item">
                Contact
              </a>
          
              <a href="/about" className="navbar-item">
                About
              </a>
          </div>
        </div>
      </div>
    </nav>
        );
    }
}

export default Menu