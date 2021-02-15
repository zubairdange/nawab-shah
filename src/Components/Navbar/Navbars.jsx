import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Navbar,
  Nav,
  FormControl,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AboutCourse } from "../LeftNav/UGCourses/BE(CSE)/AboutCourse";
import { UGCoursesDetails } from "../LeftNav/A-HomeAllCourses/UGCoursesDetails";
import { MYHome } from "../MYHome";
export const Navbars = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
        <Nav className="mr-auto">
          <Nav.Link href="/">HOME</Nav.Link>
          <Nav.Link href="#features">ABOUT US </Nav.Link>
          <Nav.Link href="/CSEBTECH">COURSES</Nav.Link>
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
      <Router>
        <Switch>
          <Route path="/CSEBTECH">
            <UGCoursesDetails />
          </Route>
          <Route path="/">
            <MYHome />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
