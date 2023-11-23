import React, { useState } from "react";
import "./navbar.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2></h2>
        </div>

        <ul>
          <h1>
           
            Design <span className="Agency">AGENCY</span>
          </h1>

          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/team">Team</NavLink>
          </li>
          <li>
            <NavLink to="/service">Service</NavLink>
          </li>
          <li>
            <NavLink to="/project">Project</NavLink>
          </li>
          <li>
            <NavLink to="/testimonial">Testimonials</NavLink>
          </li>
          <button className="Login">Login</button>
          <button className="Register">Register</button>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
