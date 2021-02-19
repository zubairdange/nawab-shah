import React from "react";
import { UGCoursesDetails } from "../Components/LeftNav/A-HomeAllCourses/UGCoursesDetails";
import { MyRoute } from "./MyRoute";
import { Row, Col, Button } from "react-bootstrap";

export const Courses = () => {
  return (
    <div>
      <Row>
        {/* <Col lg="3">
          <UGCoursesDetails />
        </Col> */}
        <Col lg="9">
          <MyRoute />
          <Button>btn</Button>
        </Col>
      </Row>
    </div>
  );
};
