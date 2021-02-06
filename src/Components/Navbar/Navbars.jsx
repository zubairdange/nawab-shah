import React from "react";
import { Navbar, Nav, FormControl, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export const Navbars = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">HOME</Nav.Link>
          <Nav.Link href="#features">ABOUT US </Nav.Link>
          <Nav.Link href="#courses">COURSES</Nav.Link>
          <Nav.Link href="#department">DEPARTMENT</Nav.Link>
          <Nav.Link href="#pricing">ADMISSIONS</Nav.Link>
          <Nav.Link href="#pricing">PLACEMENTS</Nav.Link>
          <Nav.Link href="#pricing">FEATURES</Nav.Link>
          <Nav.Link href="#pricing">EVENTS</Nav.Link>
          <Nav.Link href="#pricing">GALLERY</Nav.Link>
          <Nav.Link href="#pricing">EXAMINATION CELL</Nav.Link>
          <Nav.Link href="#pricing">R & D CELL</Nav.Link>
          <Nav.Link href="#pricing">CONTACT US</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};
