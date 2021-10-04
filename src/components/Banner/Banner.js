import React from 'react';
import logo from '../../images/logo.jpg'
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className="header-container mt-1">
            <div className="container-fluid ">
            
            <div className="row d-flex justify-content-around align-items-center">
                <div className="col-md-5 mx-auto">
                  <h1 className="text-success">This is the Platform You all want</h1>
                  <p className="text-white-50">We are trying to create some best quality developers.Want to be a developer?Then why not learn from the best!</p>
                </div>
                <div className="col-md-5">
                <img src={logo} alt="" className=" w-75 img-fluid"/>
                </div>
            </div>
        </div>
            </div>
        </div>
    );
};

export default Banner;