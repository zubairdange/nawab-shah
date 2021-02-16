import React from "react";
import { Button, Table, Form } from "react-bootstrap";
import { AdmissinForm1 } from "./AdmissinForm1";
import { AdmissinForm3 } from "./AdmissinForm3";
export const AdmissinForm2 = () => {
  return (
    <div>
      <lable>
        Download Student Admission Form
        <Button href="StudentAdmissionForm.pdf">Download</Button>
      </lable>
      <Table striped bordered hover variant="light">
        <tbody>
          <tr style={{ backgroundColor: "lightpink" }}>
            <th colSpan="8">Admission Details (Intr /12th Std.Details)</th>
          </tr>
          <tr>
            <td colSpan="4">Name Of Exam</td>
            <td colSpan="4">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="4">Board Of Exam</td>
            <td colSpan="4">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="4"> Name OF School /Collage :</td>
            <td colSpan="4">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td>Hall Ticket No. </td>
            <td>
              <Form.Control size="sm" type="text" />
            </td>
            <td>Total Marks Obtained :</td>
            <td>
              <Form.Control size="sm" type="text" />
            </td>
            <td>Maximum Marks :</td>
            <td>
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr style={{ backgroundtdor: "lightgray" }}>
            <td>Passing Month : </td>
            <td>
              <Form.Control size="sm" type="text" />
            </td>
            <td>Year : </td>
            <td>
              <Form.Control size="sm" type="text" />
            </td>
            <td>Percentage Marks Scored: </td>
            <td>
              <Form.Control size="sm" type="text" />
            </td>
            <td>Grade: </td>
            <td>
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="8">
              (Note: Attach attested photocopy of 10th sts mark card)
            </td>
          </tr>
          <td colSpan="8">
            <h4>
              Candidate should fill the details of marks obtained in each
              indiual subject at inter /12th/Diploma std.examination in the
              following table /candidte seeking direct year admission can write
              diploma / degree subjects and marks in the table.
            </h4>
          </td>
          <tr style={{ backgroundColor: "lightpink" }}>
            <th colSpan="4">Subject</th>
            <th colSpan="2">Marks Obtained</th>
            <th colSpan="2">Maximum Marks</th>
          </tr>
          <tr>
            <td colSpan="4">English</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="4">Physics</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="4">Chemistry</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="4">Biology</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="4"> Mathametics</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="4">Computer Scince</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="4">Other</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="4">Other</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="4">Other</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr style={{ backgroundColor: "lightpink" }}>
            <th colSpan="8">Address Details :(Local Address)</th>
          </tr>
          <tr>
            <td colSpan="1">Address</td>
            <td colSpan="7">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>

          <tr>
            <td>City:</td>
            <td>
              <Form.Control size="sm" type="text" />
            </td>
            <td>Pin:</td>
            <td>
              <Form.Control size="sm" type="text" />
            </td>
            <td>Dist :</td>
            <td>
              <Form.Control size="sm" type="text" />
            </td>
            <td>State :</td>
            <td>
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="2">Parents landline No.:</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
            <td colSpan="2">Parents Phone No. :</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="2">Candidate Mobile No.:</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
            <td colSpan="2">E-mail ID :</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="2">Nearest Bus Station.:</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
            <td colSpan="2">Railway Station:</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr style={{ backgroundColor: "lightpink" }}>
            <th colSpan="8">Address Details :(Permanent Address)</th>
          </tr>
          <tr>
            <td colSpan="1">Address</td>
            <td colSpan="7">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td>City:</td>
            <td>
              <Form.Control size="sm" type="text" />
            </td>
            <td>Pin:</td>
            <td>
              <Form.Control size="sm" type="text" />
            </td>
            <td>Dist :</td>
            <td>
              <Form.Control size="sm" type="text" />
            </td>
            <td>State :</td>
            <td>
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="2">Parents landline No.:</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
            <td colSpan="2">Parents Phone No. :</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="2">Candidate Mobile No.:</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
            <td colSpan="2">E-mail ID :</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="2">Nearest Bus Station.:</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
            <td colSpan="2">Railway Station:</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
        </tbody>
      </Table>

      <Button
        style={{ float: "right" }}
        href="/AdmissinForm3"
        onclick={AdmissinForm3}
      >
        Next
      </Button>
      <Button
        style={{ float: "right" }}
        href="/AdmissinForm1"
        onClick={AdmissinForm1}
      >
        Previous
      </Button>
    </div>
  );
};
