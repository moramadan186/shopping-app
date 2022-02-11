/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {NavLink} from "react-router-dom";
const Navbar =props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Navbar</NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink exact to="/" className="nav-link" activeStyle={{color:"#61DAFB"}}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" activeStyle={{color:"#61DAFB"}}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" activeStyle={{color:"#61DAFB"}}>Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admin" className="nav-link" activeStyle={{color:"#61DAFB"}}>Admin</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/menu" className="nav-link" activeStyle={{color:"#61DAFB"}}>Menu</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link" activeStyle={{color:"#61DAFB"}}>ShoppingCart</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link" activeStyle={{color:"#61DAFB"}}>Login</NavLink>
            </li>
          </ul>
        </div>
        <span className="badge bg-primary">{props.productsLen}</span>
        <span className="badge bg-danger">{props.allLen}</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
