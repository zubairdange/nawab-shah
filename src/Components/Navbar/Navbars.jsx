import React from "react";
import { Navbar, Nav, FormControl, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export const Navbars = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
        <Nav>
          <Nav.Link href="#home">HOME</Nav.Link>
          <Nav.Link href="#aboutus">ABOUT US </Nav.Link>
          <Nav.Link href="#courses">COURSES</Nav.Link>
          <Nav.Link href="#department">DEPARTMENT</Nav.Link>
          <Nav.Link href="#admissions">ADMISSIONS</Nav.Link>
          <Nav.Link href="#placement">PLACEMENTS</Nav.Link>
          <Nav.Link href="#features">FEATURES</Nav.Link>
          <Nav.Link href="#events">EVENTS</Nav.Link>
          <Nav.Link href="#pricing">GALLERY</Nav.Link>
          <Nav.Link href="#pricing">EXAMINATION CELL</Nav.Link>
          <Nav.Link href="#pricing">R & D CELL</Nav.Link>
          <Nav.Link href="#pricing">CONTACT US</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};
