import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function CustomNavbar() {
  return (
    <Navbar
      bg="#221f1f"
      variant="dark"
      expand="lg"
      style={{ backgroundColor: "#221f1f ! important" }}
    >
      <div className="container-fluid">
        <Navbar.Brand href="#">
          <img
            className="rounded-circle"
            src="/Mlogo.png"
            style={{ width: "50px", height: "40px" }}
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Link to="/" className="nav-link fw-bold text-white">
              Home
            </Link>

            <Nav.Link className="fw-bold text-white" href="#">
              Recently Added
            </Nav.Link>

            <NavDropdown
              title="More"
              id="basic-nav-dropdown"
              className="fw-bold"
            >
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="d-flex align-items-center">
            <i className="bi bi-search icons"></i>
            <div id="balde" className="fw-bold">
              Balde
            </div>
            <i className="bi bi-bell icons"></i>
            <i className="bi bi-person-circle icons"></i>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default CustomNavbar;
