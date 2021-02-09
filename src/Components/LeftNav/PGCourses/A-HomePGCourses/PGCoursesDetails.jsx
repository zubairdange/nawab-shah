import React from "react";
import { Nav, Button, Col, Row } from "react-bootstrap";
import "../../UGCourses/A-HomeUGCourses/LeftNav.css";
export const PGCoursesDetails = () => {
  return (
    <div>
      <Button style={{ width: "272px" }}>PG Courses</Button>

      <Nav className="navmainclass">
        <Nav.Link className="navlinkclass">ME (CSE)</Nav.Link>

        <Nav.Link className="navlinkclass">ME (CIVIL STRUCTURE)</Nav.Link>

        <Nav.Link className="navlinkclass">ME (MECH-HVAC)</Nav.Link>

        <Nav.Link className="navlinkclass">ME (ECE-ES)</Nav.Link>
      </Nav>
    </div>
  );
};
