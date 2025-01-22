import React from 'react'
import { Link, NavLink, Outlet } from 'react-router'

function Sidebar() {
    return (
        <>
            <aside id="sidebar" class="sidebar">

                <ul class="sidebar-nav" id="sidebar-nav">

                    <li class="nav-item">
                        <NavLink to={'/admin'} className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>
                            <i class="bi bi-grid"></i>
                            <span>Dashboard</span>
                        </NavLink>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                            <i class="bi bi-menu-button-wide"></i><span>Masters</span><i class="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li >
                                <NavLink to={"/admin/master/employees"} className={({ isActive }) => (isActive ? 'active' : '')}>
                                    <i class="bi bi-circle"></i><span>Employees</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/admin/master/clients"} className={({ isActive }) => (isActive ? 'active' : '')}>
                                    <i class="bi bi-circle"></i><span>Clients</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/admin/master/newspapers"} className={({ isActive }) => (isActive ? 'active' : '')}>
                                    <i class="bi bi-circle"></i><span>Newpapers</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/admin/master/radios"} className={({ isActive }) => (isActive ? 'active' : '')}>
                                    <i class="bi bi-circle"></i><span>Radios</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/admin/master/holidays"} className={({ isActive }) => (isActive ? 'active' : '')}>
                                    <i class="bi bi-circle"></i><span>Holidays</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/admin/master/tax_plannings"}>
                                    <i class="bi bi-circle"></i><span>Tax Plannings</span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item active">
                        <Link to={'/admin/p-media/ro-list'} className='nav-link'>
                            <i className='bi bi-file-break'></i>
                            <span >P-Media</span>
                        </Link>
                    </li>
                </ul>

            </aside>
        </>
    )
}

export default Sidebar