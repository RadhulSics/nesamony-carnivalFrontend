import React, { useRef } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const menuRef = useRef(null);
  const profileActionRef = useRef(null);

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");
  const toggleProfileActions = () =>
    profileActionRef.current.classList.toggle("show__profileActions");
  return (
   
    <div>
      <div class="container-fluid bg-dark px-0">
        <div class="row gx-0">
        <div class="row py-3 px-lg-5">
             <div class="col-lg-4">
                 <a href="" class="navbar-brand d-none d-lg-block">
                     <h1 class="m-0 display-5 text-capitalize" style={{color:'white'}}><span class="text-primary">Car</span>nival</h1>
                 </a>
             </div>
           <div class="col-lg-8 text-center text-lg-right">

         </div>
        </div>
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0 px-lg-5">
              <a href="" class="navbar-brand d-block d-lg-none">
              <h1 class="m-0 display-5 text-capitalize" style={{color:'white'}}  ><span class="text-primary">Car</span>nival </h1>
              </a>

              <button
                type="button"
                class="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                 <div class="navbar-nav mr-auto py-0">
                     <Link to='/' class="nav-item nav-link ">Home</Link>
                     <Link to='/about' class="nav-item nav-link">About</Link>
                     <Link to='/student_login' class="nav-item nav-link">Students</Link>
                     <Link to='/coordinator_login' class="nav-item nav-link">Coordinator</Link>
                     <Link to='/volunteer_login' class="nav-item nav-link">Volunteer</Link>
                     <Link to='/audience_login' class="nav-item nav-link">Audience</Link>
              
                 </div>
             </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
