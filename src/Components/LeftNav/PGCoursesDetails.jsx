import React from "react";
import { Nav, Button } from "react-bootstrap";
export const PGCoursesDetails = () => {
  return (
    <div>
      <Button>PG Courses</Button>
      <Nav.Link style={{ fontSize: "16px", textAlign: "left" }}>
        ME (CSE)
      </Nav.Link>

      <Nav.Link style={{ fontSize: "16px", textAlign: "left" }}>
        ME (CIVIL STRUCTURE)
      </Nav.Link>

      <Nav.Link style={{ fontSize: "16px", textAlign: "left" }}>
        ME (MECH-HVAC)
      </Nav.Link>

      <Nav.Link style={{ fontSize: "16px", textAlign: "left" }}>
        ME (ECE-ES)
      </Nav.Link>
    </div>
  );
};
