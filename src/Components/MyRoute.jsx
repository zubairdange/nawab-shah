import React from "react";
import { Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutCourse } from "./LeftNav/UGCourses/BE(CSE)/AboutCourse";
import { VisionMision } from "./LeftNav/UGCourses/BE(CSE)/VisionMision";
import { SourceOutcome } from "./LeftNav/UGCourses/BE(CSE)/SourceOutcome";
import { PEO } from "./LeftNav/UGCourses/BE(CSE)/PEO";
import { AboutCourseIT } from "./LeftNav/UGCourses/BE(IT)/AboutCourseIT";
import { VisionMisionIT } from "./LeftNav/UGCourses/BE(IT)/VisionMisionIT";
import { SourceOutcomeIT } from "./LeftNav/UGCourses/BE(IT)/SourceOutcomeIT";
import { PEOIT } from "./LeftNav/UGCourses/BE(IT)/PEOIT";
import { AboutCourseCivil } from "./LeftNav/UGCourses/BE(CIVIL)/AboutCourseCivil";
import { VisionMisionCivil } from "./LeftNav/UGCourses/BE(CIVIL)/VisionMisionCivil";
import { SourceOutcomeCivil } from "./LeftNav/UGCourses/BE(CIVIL)/SourceOutcomeCivil";
import { PEOCivil } from "./LeftNav/UGCourses/BE(CIVIL)/PEOCivil";
import { AboutCourseMech } from "./LeftNav/UGCourses/BE(MECH)/AboutCourseMech";
import { VisionMisionMech } from "./LeftNav/UGCourses/BE(MECH)/VisionMisionMech";
import { SourceOutcomeMech } from "./LeftNav/UGCourses/BE(MECH)/SourceOutcomeMech";
import { PEOMech } from "./LeftNav/UGCourses/BE(MECH)/PEOMech";
import { AboutCourseECE } from "./LeftNav/UGCourses/BE(ECE)/AboutCourseECE";
import { VisionMisionECE } from "./LeftNav/UGCourses/BE(ECE)/VisionMisionECE";
import { SourceOutcomeECE } from "./LeftNav/UGCourses/BE(ECE)/SourceOutcomeECE";
import { PEOECE } from "./LeftNav/UGCourses/BE(ECE)/PEOECE";
import { AboutCourseEEE } from "./LeftNav/UGCourses/BE(EEE)/AboutCourseEEE";
import { VisionMisionEEE } from "./LeftNav/UGCourses/BE(EEE)/VisionMisionEEE";
import { SourceOutcomeEEE } from "./LeftNav/UGCourses/BE(EEE)/SourceOutcomeEEE";
import { PEOEEE } from "./LeftNav/UGCourses/BE(EEE)/PEOEEE";
import { MEMech } from "./LeftNav/PGCourses/ME(Mech-Hvac)/MEMech";
import { MEECE } from "./LeftNav/PGCourses/ME(ECE-ES)/MEECE";
import { MECivil } from "./LeftNav/PGCourses/ME(Civil-Struct)/MECivil";
import { MECse } from "./LeftNav/PGCourses/ME(CSE)/MECse";
import { PolyEEE } from "./LeftNav/DiplomaCourses/POLY(EEE)/PolyEEE";
import { PolyECE } from "./LeftNav/DiplomaCourses/POLY(ECE)/PolyECE";
import { PolyMech } from "./LeftNav/DiplomaCourses/POLY(ME)/PolyMech";
import { PolyCivil } from "./LeftNav/DiplomaCourses/POLY(CIVIL)/PolyCivil";
import { CiscoNetworking } from "./LeftNav/CiscoNW/CiscoNetworking";
import { TSAcademy } from "./LeftNav/Task/TSAcademy";
// import { CambridgeEnglish } from "../Components/LeftNav/CambridgeEnglish";
import { HumanValues } from "./LeftNav/HumanValues/HumanValues";

export const MyRoute = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/CSEBTECH">
            <AboutCourse />
          </Route>
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
          <Route path="/CSE-MTECH">
            <MECse />
          </Route>
          <Route path="/CIVIL-MTECH">
            <MECivil />
          </Route>
          <Route path="/MECH-MTECH">
            <MEMech />
          </Route>
          <Route path="/ECE-MTECH">
            <MEECE />
          </Route>
          <Route path="/POLYCIVIL">
            <PolyCivil />
          </Route>
          <Route path="/POLYMECH">
            <PolyMech />
          </Route>
          <Route path="/PolyECE">
            <PolyECE />
          </Route>
          <Route path="/PolyEEE">
            <PolyEEE />
          </Route>
          <Route path="/HVPE">
            <HumanValues />
          </Route>
          <Route path="/CISCONetworkingAcademy">
            <CiscoNetworking />
          </Route>
          {/* <Route path="/BusinessEnglishCertificate">
            <CambridgeEnglish />
          </Route> */}
          <Route path="/Task">
            <TSAcademy />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
