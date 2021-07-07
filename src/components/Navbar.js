import React, { Component } from 'react';
import logo from '../images/photos.svg';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';
// import pic from '../images/logo.svg';
import {NavLink} from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <>
<div className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
  <div className="container-fluid">
      <NavLink exact className="navbar-brand bgc" to="/" >Resort
      {/* <img src={pic}/> */}
      </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
        </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
         <li className="nav-item">
            <NavLink exact className="nav-link active bgc " activeClassName="menu_active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink exact className="nav-link bgc" activeClassName="menu_active"  to="/rooms">Rooms</NavLink>
        </li>
      </ul>
    </div>
  </div>
</div>
            </>
        )
    }
}
