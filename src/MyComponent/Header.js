import React from 'react'

export default function Header(props) {
   return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">{props.htitle}</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                  <a className="nav-link" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                  </li>
               </ul>
            </div>
         </nav>
      </div>
   )
}
