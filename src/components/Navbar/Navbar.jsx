import { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets.js';
import './Navbar.css';


const Navbar = ({setShowLogin}) => {
  const [menu,setMenu] = useState("");
  return (
    
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white  shadow-sm m-5">
        <div className="container-fluid px-4" style={{height:'150px'}}>

          {/* Logo */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src={assets.logo}
              alt="Logo"
              height="70"
              className="img-fluid"
            />
          </a>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarContent">
           <ul className="navbar-nav mx-auto mb-2 ms-3 mb-lg-0 gap-lg-4 text-center fs-5">

 <li>
  <Link
    to="/"
    className={menu === "home" ? "active" : ""}
    onClick={() => setMenu("home")}
  >
    home
  </Link>
</li>

<li>
  <a
    href="#explore-menu"
    className={menu === "menu" ? "active" : ""}
    onClick={() => setMenu("menu")}
  >
    menu
  </a>
</li>

<li>
  <a
    href="#footer"
    className={menu === "contacts" ? "active" : ""}
    onClick={() => setMenu("contacts")}
  >
    contacts
  </a>
</li>


</ul>



            {/* Right Section */}
            <div className="d-flex align-items-center gap-3 justify-content-center">
              <img
                src={assets.search_icon}
                alt="Search"
                
                width="33"
                className="cursor-pointer"
              />


              {/* Cart */}
              <div className="navbar-search-icon position-relative ms-5">
                <img
  src={assets.basket_icon}
  alt="Cart"
  width="33"
  className="ms-5"
/>
<div className="dot"></div>

              </div>
<button
  type="button"
  onClick={() => {
    console.log("SIGNUP CLICKED");
    setShowLogin(true);
  }}
  className="btn"
  style={{ position: "relative", zIndex: 10 ,fontSize:'40px'}}
>
  Sign In
</button>


            </div>
          </div>
        </div>
      </nav>

      {/* Spacer so content is not hidden */}
      <div className="mt-5 pt-5"></div>
    </>
  );
};

export default Navbar;
