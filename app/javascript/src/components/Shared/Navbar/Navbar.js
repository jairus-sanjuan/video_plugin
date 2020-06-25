import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

import './Navbar.css'

const Shared_Navbar = () => {
  const [collapsed, setCollapsed] = useState(true)
  const history = useHistory()
  const toggleNavbar = () => setCollapsed(!collapsed)

  return (
    <Navbar color="faded" light expand="xs" className="mb-3">
      <NavbarBrand className="mr-auto" onClick={() => history.push('/')}>
        <img
          src="https://www.jway.com/wp-content/uploads/2015/12/Logo-JWay.svg"
          width="200"
          height="auto"
          alt=""
          className="my-1"
        />
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} className="mr-2" />
      <Collapse isOpen={!collapsed} navbar>
        <Nav className="ml-auto text-uppercase font-weight-normal" navbar>
          <Link className="nav-item navbar--links active" to="/upload">
            Upload <span className="sr-only">(current)</span>
          </Link>
          <li className="nav-item my-auto font-weight-bolder navbar--divider">
            <div className="my-auto">|</div>
          </li>
          <Link className="nav-item navbar--links" to="/browse">
            Videos
          </Link>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Shared_Navbar
