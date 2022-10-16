import React, { useState } from "react";
import { useLocation } from "react-router";
import { connect } from "react-redux";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBNavbarNav,
  MDBIcon,
} from "mdb-react-ui-kit";

import logo from "../../asset/logo.png";
import authActions from "../../redux/auth/actions";
import "./styles.scss";

const mapStateToProps = ({ dispatch }) => ({
  dispatch,
});

const Navbar = ({ dispatch }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { pathname } = useLocation();

  const getActive = (link) => {
    let isActive = false;
    if (pathname === link) {
      isActive = true;
    }
    return isActive;
  };

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const logout = (e) => {
    e.preventDefault();
    dispatch({
      type: authActions.LOGOUT,
      payload: {},
    });
  };

  return (
    <>
      <MDBNavbar expand="lg" className="primary-bg">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">
            <img src={logo} alt="logo" style={{ width: "100px" }} />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleCollapse}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={collapsed} style={{ height: "inherit" }}>
            <MDBNavbarNav
              className="mr-auto mb-2 mb-lg-0"
              id="navbar-navigation"
            >
              <MDBNavbarItem
                className="remove-nr-style"
                id="navbar-navigation-item"
              >
                <MDBNavbarLink
                  className="text-white"
                  active={getActive("/dashboard")}
                  aria-current="page"
                  href="/dashboard"
                >
                  Dashboard
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  active={getActive("/reports")}
                  className="text-white"
                  href="/reports"
                >
                  Reports
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  active={getActive("/feedback")}
                  className="text-white"
                  href="/feedback"
                >
                  Feedback
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <MDBDropdown>
              <MDBDropdownToggle className="text-light nav-link" tag="a">
                <MDBIcon fas icon="power-off" />
              </MDBDropdownToggle>
              <MDBDropdownMenu id="logout-menu">
                <MDBDropdownItem>
                  <MDBDropdownLink onClick={logout} className="text-danger">
                    Logout
                  </MDBDropdownLink>
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default connect(mapStateToProps)(Navbar);
