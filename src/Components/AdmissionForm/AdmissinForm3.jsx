import React from "react";
import { Form, Button, Table } from "react-bootstrap";
import { AdmissinForm2 } from "./AdmissinForm2";
import { AdmissinForm4 } from "./AdmissinForm4";

export const AdmissinForm3 = () => {
  return (
    <div>
      <lable>
        Download Student Admission Form
        <Button href="StudentAdmissionForm.pdf">Download</Button>
      </lable>
      <Table striped bordered hover variant="light">
        <tbody>
          {/* <tr style={{ backgroundColor: "lightpink" }}>
            <th colSpan="8">Address Details :(Local Guardian Address)</th>
          </tr>

          <tr>
            <th>Guardian Name:</th>

            <th>
              <Form.Control size="sm" type="text" />
            </th>
            <th>Guardian Occupation:</th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
            <th>Relation With Guardian :</th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
            <th>Guardian E-mail ID :</th>
            <th>
              <Form.Control size="sm" type="text" />
            </th>
          </tr>

          <tbody>
            <tr>
              <td colSpan="4"> Reimbusment</td>
              <td colSpan="4">Due Amount</td>
            </tr> */}

          <tr style={{ backgroundColor: "lightpink" }}>
            <th colSpan="8">Address Details :(Local Guardian Address)</th>
          </tr>
          <tr>
            <td>Guardian Name:</td>
            <td>
              <Form.Control size="sm" type="text" />
            </td>
            <td>Guardian Occupation:</td>
            <td>
              <Form.Control size="sm" type="text" />
            </td>
            <td>Relation With Guardian :</td>
            <td>
              <Form.Control size="sm" type="text" />
            </td>
            <td>Guardian E-mail ID :</td>
            <td>
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="2">Address</td>
            <td colSpan="6">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td>Pin:</td>
            <td>
              <Form.Control size="sm" type="text" />
            </td>
            <td>Landline No.:</td>
            <td>
              <Form.Control size="sm" type="text" />
            </td>
            <td>Mobile No. :</td>
            <td>
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr style={{ backgroundColor: "lightpink" }}>
            <th colSpan="8"> Last Qualifying Examination Details :</th>
          </tr>
          <tr>
            <td colSpan="2">Last Exam Name:</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
            <td colSpan="2">Exam Year:</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="2">Board or Univ. Name :</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
            <td colSpan="2">Duration Of Year :</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="2">Total Marks Obtained:</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
            <td colSpan="2">Total Max. Marks :</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="2">Percentage Of Marks :</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
            <td colSpan="2">Class:</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr style={{ backgroundColor: "lightpink" }}>
            <th colSpan="8">Eamcet /ECET /PGcet Score Details :</th>
          </tr>
          <tr>
            <td colSpan="2">Eamcet /ECET /PGcet /Other Marks:</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
            <td colSpan="2"> Eamcet /ECET /PGcet Rank:</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="2">Hall Ticket No.:</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
            <td colSpan="2">Year Of Exam :</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr style={{ backgroundColor: "lightpink" }}>
            <th colSpan="4">Subject</th>
            <th colSpan="2">Marks Obtained</th>
            <th colSpan="2">Maximum Marks</th>
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
            <td colSpan="4"> Mathematics</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <Form.Control size="sm" type="text" />
            </td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
        </tbody>
      </Table>
      <br />

      <tr>
        <th>* For Direct Second Year Admission</th>
      </tr>
      <tr>
        <td>
          I hereby declare the perticulars furnished above are true,complite and
          correct to the best of my knowledge and belief.
        </td>
      </tr>

      <h4>
        Date:
        <br />
        Place:
      </h4>
      <h4 style={{ float: "right" }}>Signature of Student</h4>
      <br />
      <ol>
        <li>
          10<sup>th</sup> / SSC std and 12<sup>th</sup> / Inter std attested
          photocopy of marks sheet to be attached with this form.
        </li>
        <li>
          The photocopy of admit card to be attached with this registration
          form.
        </li>
        <li>
          Affix passport size colour photograph at the space provided in the
          form.
        </li>
        <li>
          Additional sheet can be attached to provide diploma/degree level exam
          details.
        </li>
        <li>
          Candidate changing branches/courses/ in the subsequent admission round
          are require to compulsorily submit this form along with REGISTRATION
          SSLIP issued by the college during the first time registration.
        </li>
        <li>
          Candidates changing college/cancelling admissions should compulsorily
          submit letter of intimation to college failing which the fees and
          certificates will be withheld till the clearance from the admission
          authority.
        </li>
        <li>
          Candidate should submit notarized copy of Annexture I (affidavit by
          the student) and Annexure II (affidavit by parent/guardian) at the
          time of registration at college.
        </li>
      </ol>

      <Button
        style={{ float: "right" }}
        href="/AdmissinForm4"
        onclick={AdmissinForm4}
      >
        Next
      </Button>
      <Button
        style={{ float: "right" }}
        href="/AdmissinForm2"
        onClick={AdmissinForm2}
      >
        Previous
      </Button>
    </div>
  );
};
