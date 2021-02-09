import React, { useState } from "react";
import { Card, Row, Col, Button, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../LeftNav/LeftNav.css";
import { AboutCourse } from "./UGCourses/BE(CSE)/AboutCourse";
import { VisionMision } from "./UGCourses/BE(CSE)/VisionMision";
import { SourceOutcome } from "./UGCourses/BE(CSE)/SourceOutcome";
import { PEO } from "./UGCourses/BE(CSE)/PEO";
import { AboutCourseIT } from "./UGCourses/BE(IT)/AboutCourseIT";
import { VisionMisionIT } from "./UGCourses/BE(IT)/VisionMisionIT";
import { SourceOutcomeIT } from "./UGCourses/BE(IT)/SourceOutcomeIT";
import { PEOIT } from "./UGCourses/BE(IT)/PEOIT";
export const UGCoursesDetails = () => {
  const [isshowCse, setIsShowCse] = useState(false);
  const handleshow = () => {
    setIsShowCse(true);
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <Row>
        <Col lg="3">
          <Card>
            <Button>UG Courses</Button>
            <Button className="mybutton" onClick={handleshow}>
              BE (CSE)
            </Button>
            {isshowCse && (
              <Nav className="navmainclass">
                <Nav.Link className="navlinkclass" href="/CSEBTECH">
                  About Course
                </Nav.Link>

                <Nav.Link className="navlinkclass" href="/B-CSE-VisionMission">
                  Vision & Mission
                </Nav.Link>

                <Nav.Link className="navlinkclass" href="/B-CSE-POSPSOS">
                  PEO's & PSO's
                </Nav.Link>

                <Nav.Link className="navlinkclass" href="/B-CSE-CourseOutcomes">
                  Course OutCome
                </Nav.Link>
              </Nav>
            )}
            <Button>BE (IT)</Button>
            <Nav className="navmainclass">
              <Nav.Link className="navlinkclass" href="/ITBTECH">
                About Course
              </Nav.Link>

              <Nav.Link className="navlinkclass" href="/B-IT-VisionMission">
                Vision & Mision
              </Nav.Link>

              <Nav.Link className="navlinkclass" href="/B-IT-POSPSOS">
                PEO's & PSO's
              </Nav.Link>

              <Nav.Link className="navlinkclass" href="/B-IT-CourseOutcomes">
                Course OutCome
              </Nav.Link>
            </Nav>
            <Button>BE (DS)</Button>
            <Nav className="navmainclass">
              <Nav.Link className="navlinkclass">About Course</Nav.Link>

              <Nav.Link className="navlinkclass">Vision & Mision</Nav.Link>

              <Nav.Link className="navlinkclass">PEO's & PSO's</Nav.Link>

              <Nav.Link className="navlinkclass">Course OutCome</Nav.Link>
            </Nav>
            <Button>BE (AI & ML)</Button>
            <Nav className="navmainclass">
              <Nav.Link className="navlinkclass">About Course</Nav.Link>

              <Nav.Link className="navlinkclass">Vision & Mision</Nav.Link>

              <Nav.Link className="navlinkclass">PEO's & PSO's</Nav.Link>

              <Nav.Link className="navlinkclass">Course OutCome</Nav.Link>
            </Nav>
            <Button>BE (IOT,CYBER SECURITY,BLOCK CHAIN)</Button>
            <Nav className="navmainclass">
              <Nav.Link className="navlinkclass">About Course</Nav.Link>

              <Nav.Link className="navlinkclass">Vision & Mision</Nav.Link>

              <Nav.Link className="navlinkclass">PEO's & PSO's</Nav.Link>

              <Nav.Link className="navlinkclass">Course OutCome</Nav.Link>
            </Nav>
            <Button>BE (CIVIL)</Button>
            <Nav className="navmainclass">
              <Nav.Link className="navlinkclass">About Course</Nav.Link>

              <Nav.Link className="navlinkclass">Vision & Mision</Nav.Link>

              <Nav.Link className="navlinkclass">PEO's & PSO's</Nav.Link>

              <Nav.Link className="navlinkclass">Course OutCome</Nav.Link>
            </Nav>
            <Button>BE (MECH)</Button>
            <Nav className="navmainclass">
              <Nav.Link className="navlinkclass">About Course</Nav.Link>

              <Nav.Link className="navlinkclass">Vision & Mision</Nav.Link>

              <Nav.Link className="navlinkclass">PEO's & PSO's</Nav.Link>

              <Nav.Link className="navlinkclass">Course OutCome</Nav.Link>
            </Nav>
            <Button>BE (ECE)</Button>
            <Nav className="navmainclass">
              <Nav.Link className="navlinkclass">About Course</Nav.Link>

              <Nav.Link className="navlinkclass">Vision & Mision</Nav.Link>

              <Nav.Link className="navlinkclass">PEO's & PSO's</Nav.Link>

              <Nav.Link className="navlinkclass">Course OutCome</Nav.Link>
            </Nav>
            <Button>BE (EEE)</Button>
            <Nav className="navmainclass">
              <Nav.Link className="navlinkclass">About Course</Nav.Link>

              <Nav.Link className="navlinkclass">Vision & Mision</Nav.Link>

              <Nav.Link className="navlinkclass">PEO's & PSO's</Nav.Link>

              <Nav.Link className="navlinkclass">Course OutCome</Nav.Link>
            </Nav>
            <Button>PG Courses</Button>
            <Nav className="navmainclass">
              <Nav.Link className="navlinkclass">ME (CSE)</Nav.Link>

              <Nav.Link className="navlinkclass">ME (CIVIL STRUCTURE)</Nav.Link>

              <Nav.Link className="navlinkclass">ME (MECH-HVAC)</Nav.Link>

              <Nav.Link className="navlinkclass">ME (ECE-ES)</Nav.Link>
            </Nav>
            <Button>DIPLOMA COURSES</Button>
            <Nav className="navmainclass">
              <Nav.Link className="navlinkclass">POLYTECHNIC (CIVIL)</Nav.Link>

              <Nav.Link className="navlinkclass">POLYTECHNIC (ME)</Nav.Link>

              <Nav.Link className="navlinkclass">POLYTECHNIC (ECE)</Nav.Link>

              <Nav.Link className="navlinkclass">POLYTECHNIC (EEE)</Nav.Link>
            </Nav>
            <Button>HUMAN VALUES & PROFESSIONAL ETHICS</Button>
            <Nav className="navmainclass">
              <Nav.Link className="navlinkclass">
                Human Values & Professional Ethics
              </Nav.Link>
            </Nav>
            <Button>CISCO NETWORKING ACADEMY</Button>
            <Nav className="navmainclass">
              <Nav.Link className="navlinkclass">
                Cisco Networking Academy
              </Nav.Link>
            </Nav>
            <Button>CAMBRIDGE ENGLISH</Button>
            <Nav className="navmainclass">
              <Nav.Link className="navlinkclass">Cambridge English</Nav.Link>
            </Nav>
            <Button>TASK</Button>
            <Nav className="navmainclass">
              <Nav.Link className="navlinkclass">
                TS Academy For Skill & Knowledge
              </Nav.Link>
            </Nav>
          </Card>
        </Col>
        <Col lg="9">
          {/* <h2>hiiiiii</h2> */}
          <Router>
            <Switch>
              <Route path="/CSEBTECH">
                <AboutCourse />
              </Route>
              <Route path="/B-CSE-VisionMission">
                <VisionMision />
              </Route>
              <Route path="/B-CSE-POSPSOS">
                <PEO />
              </Route>
              <Route path="/B-CSE-CourseOutcomes">
                <SourceOutcome />
              </Route>
              <Route path="/ITBTECH">
                <AboutCourseIT />
              </Route>
              <Route path="/B-IT-VisionMission">
                <VisionMisionIT />
              </Route>
              <Route path="/B-IT-POSPSOS">
                <PEOIT />
              </Route>
              <Route path="/B-IT-CourseOutcomes">
                <SourceOutcomeIT />
              </Route>
            </Switch>
          </Router>
        </Col>
      </Row>
    </div>
  );
};
