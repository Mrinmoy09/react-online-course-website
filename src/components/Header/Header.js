import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import navlogo from '../../images/navlogo.png'

const Header = () => {
    return (
        <div>
        <div className="container-fluid nav-container">
        <div className="row">
          <div className="col-md-2">
            <div className="d-flex m-1">
              <img src={navlogo} alt="" className="img-fluid w-25"/>
              <h1 className="text-white">E-School</h1>
            </div>
          </div>
          <div className="col-md-10">
            <div className="menu-container ">
              <ul className="d-flex justify-content-end me-5">
                <Link to="/home" className="items">
                  <li>Home</li>
                </Link>
                <Link to="/services" className="items">
                  <li>Services</li>
                </Link>
                <Link to="/about" className="items">
                  <li>About us</li>
                </Link>
                <Link to="/instructor" className="items">
                  <li>Instructors</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
     </div>
    );
};

export default Header;