import React, { useState } from "react";
import { Card, Row, Col, Button, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "..//A-HomeUGCourses/LeftNav.css";
import { AboutCourse } from "../BE(CSE)/AboutCourse";
import { VisionMision } from "../BE(CSE)/VisionMision";
import { SourceOutcome } from "../BE(CSE)/SourceOutcome";
import { PEO } from "../BE(CSE)/PEO";
import { AboutCourseIT } from "../BE(IT)/AboutCourseIT";
import { VisionMisionIT } from "../BE(IT)/VisionMisionIT";
import { SourceOutcomeIT } from "../BE(IT)/SourceOutcomeIT";
import { PEOIT } from "../BE(IT)/PEOIT";
import { AboutCourseCivil } from "../BE(CIVIL)/AboutCourseCivil";
import { VisionMisionCivil } from "../BE(CIVIL)/VisionMisionCivil";
import { SourceOutcomeCivil } from "../BE(CIVIL)/SourceOutcomeCivil";
import { PEOCivil } from "../BE(CIVIL)/PEOCivil";
import { AboutCourseMech } from "../BE(MECH)/AboutCourseMech";
import { VisionMisionMech } from "../BE(MECH)/VisionMisionMech";
import { SourceOutcomeMech } from "../BE(MECH)/SourceOutcomeMech";
import { PEOMech } from "../BE(MECH)/PEOMech";
import { AboutCourseECE } from "../BE(ECE)/AboutCourseECE";
import { VisionMisionECE } from "../BE(ECE)/VisionMisionECE";
import { SourceOutcomeECE } from "../BE(ECE)/SourceOutcomeECE";
import { PEOECE } from "../BE(ECE)/PEOECE";
import { AboutCourseEEE } from "../BE(EEE)/AboutCourseEEE";
import { VisionMisionEEE } from "../BE(EEE)/VisionMisionEEE";
import { SourceOutcomeEEE } from "../BE(EEE)/SourceOutcomeEEE";
import { PEOEEE } from "../BE(EEE)/PEOEEE";
export const UGCoursesDetails = () => {
  const [isshowCse, setIsShowCse] = useState(false);
  const [isShowIT, setISShowIT] = useState(false);
  const [isShowDS, setISShowDS] = useState(false);
  const [isShowAIML, setISShowAIML] = useState(false);
  const [isShowCyber, setISShowCyber] = useState(false);
  const [isShowCivil, setISShowCivil] = useState(false);
  const [isShowMech, setISShowMech] = useState(false);
  const [isShowECE, setISShowECE] = useState(false);
  const [isShowEEE, setISShowEEE] = useState(false);
  // const handleshow = () => {
  //   setIsShowCse(!isshowCse);
  // };
  return (
    <div style={{ marginTop: "20px" }}>
      <Row>
        <Col lg="3">
          <Card>
            <Button>UG Courses</Button>
            <Button
              className="mybutton"
              onClick={() => setIsShowCse(!isshowCse)}
            >
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
            <Button onClick={() => setISShowIT(!isShowIT)}>BE (IT)</Button>
            {isShowIT && (
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
            )}
            <Button onClick={() => setISShowDS(!isShowDS)}>BE (DS)</Button>
            {isShowDS && (
              <Nav className="navmainclass">
                <Nav.Link className="navlinkclass">About Course</Nav.Link>

                <Nav.Link className="navlinkclass">Vision & Mision</Nav.Link>

                <Nav.Link className="navlinkclass">PEO's & PSO's</Nav.Link>

                <Nav.Link className="navlinkclass">Course OutCome</Nav.Link>
              </Nav>
            )}
            <Button onClick={() => setISShowAIML(!isShowAIML)}>
              BE (AI & ML)
            </Button>
            {isShowAIML && (
              <Nav className="navmainclass">
                <Nav.Link className="navlinkclass">About Course</Nav.Link>

                <Nav.Link className="navlinkclass">Vision & Mision</Nav.Link>

                <Nav.Link className="navlinkclass">PEO's & PSO's</Nav.Link>

                <Nav.Link className="navlinkclass">Course OutCome</Nav.Link>
              </Nav>
            )}
            <Button onClick={() => setISShowCyber(!isShowCyber)}>
              BE (IOT,CYBER SECURITY,BLOCK CHAIN)
            </Button>
            {isShowCyber && (
              <Nav className="navmainclass">
                <Nav.Link className="navlinkclass">About Course</Nav.Link>

                <Nav.Link className="navlinkclass">Vision & Mision</Nav.Link>

                <Nav.Link className="navlinkclass">PEO's & PSO's</Nav.Link>

                <Nav.Link className="navlinkclass">Course OutCome</Nav.Link>
              </Nav>
            )}
            <Button onClick={() => setISShowCivil(!isShowCivil)}>
              BE (CIVIL)
            </Button>
            {isShowCivil && (
              <Nav className="navmainclass">
                <Nav.Link className="navlinkclass" href="/CIVILBTECH">
                  About Course
                </Nav.Link>

                <Nav.Link
                  className="navlinkclass"
                  href="/B-CIVIL-VisionMission"
                >
                  Vision & Mision
                </Nav.Link>

                <Nav.Link className="navlinkclass" href="/B-CIVIL-POSPSOS">
                  PEO's & PSO's
                </Nav.Link>

                <Nav.Link
                  className="navlinkclass"
                  href="/B-CIVIL-CourseOutcomes"
                >
                  Course OutCome
                </Nav.Link>
              </Nav>
            )}
            <Button onClick={() => setISShowMech(!isShowMech)}>
              BE (MECH)
            </Button>
            {isShowMech && (
              <Nav className="navmainclass">
                <Nav.Link className="navlinkclass" href="/MECHBTECH">
                  About Course
                </Nav.Link>

                <Nav.Link className="navlinkclass" href="/B-MECH-VisionMission">
                  Vision & Mision
                </Nav.Link>

                <Nav.Link className="navlinkclass" href="/B-MECH-POSPSOS">
                  PEO's & PSO's
                </Nav.Link>

                <Nav.Link
                  className="navlinkclass"
                  href="/B-MECH-CourseOutcomes"
                >
                  Course OutCome
                </Nav.Link>
              </Nav>
            )}
            <Button onClick={() => setISShowECE(!isShowECE)}>BE (ECE)</Button>
            {isShowECE && (
              <Nav className="navmainclass">
                <Nav.Link className="navlinkclass" href="/ECEBTECH">
                  About Course
                </Nav.Link>

                <Nav.Link className="navlinkclass" href="/B-ECE-VisionMission">
                  Vision & Mision
                </Nav.Link>

                <Nav.Link className="navlinkclass" href="/B-ECE-POSPSOS">
                  PEO's & PSO's
                </Nav.Link>

                <Nav.Link className="navlinkclass" href="/B-ECE-CourseOutcomes">
                  Course OutCome
                </Nav.Link>
              </Nav>
            )}
            <Button onClick={() => setISShowEEE(!isShowEEE)}>BE (EEE)</Button>
            {isShowEEE && (
              <Nav className="navmainclass">
                <Nav.Link className="navlinkclass" href="/EEEBTECH">
                  {" "}
                  About Course
                </Nav.Link>

                <Nav.Link className="navlinkclass" href="/B-EEE-VisionMission">
                  Vision & Mision
                </Nav.Link>

                <Nav.Link className="navlinkclass" href="/B-EEE-POSPSOS">
                  PEO's & PSO's
                </Nav.Link>

                <Nav.Link className="navlinkclass" href="/B-ECE-CourseOutcomes">
                  Course OutCome
                </Nav.Link>
              </Nav>
            )}
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
              <Route path="/CIVILBTECH">
                <AboutCourseCivil />
              </Route>
              <Route path="/B-CIVIL-VisionMission">
                <VisionMisionCivil />
              </Route>
              <Route path="/B-CIVIL-POSPSOS">
                <PEOCivil />
              </Route>
              <Route path="/B-CIVIL-CourseOutcomes">
                <SourceOutcomeCivil />
              </Route>
              <Route path="/MECHBTECH">
                <AboutCourseMech />
              </Route>
              <Route path="/B-MECH-VisionMission">
                <VisionMisionMech />
              </Route>
              <Route path="/B-MECH-POSPSOS">
                <PEOMech />
              </Route>
              <Route path="/B-MECH-CourseOutcomes">
                <SourceOutcomeMech />
              </Route>
              <Route path="/ECEBTECH">
                <AboutCourseECE />
              </Route>
              <Route path="/B-ECE-VisionMission">
                <VisionMisionECE />
              </Route>
              <Route path="/B-ECE-POSPSOS">
                <PEOECE />
              </Route>
              <Route path="/B-ECE-CourseOutcomes">
                <SourceOutcomeECE />
              </Route>
              <Route path="/EEEBTECH">
                <AboutCourseEEE />
              </Route>
              <Route path="/B-EEE-VisionMission">
                <VisionMisionEEE />
              </Route>
              <Route path="/B-EEE-POSPSOS">
                <PEOEEE />
              </Route>
              <Route path="/B-EEE-CourseOutcomes">
                <SourceOutcomeEEE />
              </Route>
            </Switch>
          </Router>
        </Col>
      </Row>
    </div>
  );
};
