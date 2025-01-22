import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router'

function Header(props) {
  const navigate = useNavigate()
  const [username, setUsername] = useState()
  function handleLogout(){
    localStorage.clear()
    navigate('/')
  }
  useEffect(()=>{
    let userType = localStorage.getItem('userType')
    let user = localStorage.getItem('user')
    if(userType==='admin'){
      setUsername(user)
    }
  },[])
  return (
    <>
      <header id="header" class="header fixed-top d-flex align-items-center">

        <div class="d-flex align-items-center justify-content-between">
          <a href="index.html" class="logo d-flex align-items-center">
            <img src="assets/img/logo.png" alt="" />
            <span class="d-none d-lg-block">NiceAdmin</span>
          </a>
          <i class="bi bi-list toggle-sidebar-btn"></i>
          {/* <i class="bi bi-list toggle-sidebar-btn" onClick={props.handleSidebar}></i> */}
        </div>

        <div class="search-bar">
          <form class="search-form d-flex align-items-center" method="POST" action="#">
            <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
            <button type="submit" title="Search"><i class="bi bi-search"></i></button>
          </form>
        </div>

        <nav class="header-nav ms-auto">
          <ul class="d-flex align-items-center">

            <li class="nav-item d-block d-lg-none">
              <a class="nav-link nav-icon search-bar-toggle " href="#">
                <i class="bi bi-search"></i>
              </a>
            </li>

            <li class="nav-item dropdown pe-3">

              <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                <img src="assets/img/profile-img.jpg" alt="Profile" class="rounded-circle" />
                <span class="d-none d-md-block dropdown-toggle ps-2">{username}</span>
              </a>

              <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li class="dropdown-header">
                  <h6></h6>
                  <span>Web Designer</span>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>

                <li>
                  <Link to={"/admin/user-profile"} class="dropdown-item d-flex align-items-center" href="users-profile.html">
                    <i class="bi bi-person"></i>
                    <span>My Profile</span>
                  </Link>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>

                <li>
                  <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                    <i class="bi bi-gear"></i>
                    <span>Account Settings</span>
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>

                <li>
                  <a class="dropdown-item d-flex align-items-center" href="pages-faq.html">
                    <i class="bi bi-question-circle"></i>
                    <span>Need Help?</span>
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>

                <li>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <i class="bi bi-box-arrow-right"></i>
                    <span onClick={handleLogout}>Sign Out</span>
                  </a>
                </li>

              </ul>
            </li>

          </ul>
        </nav>

      </header>

    </>
  )
}

export default Header