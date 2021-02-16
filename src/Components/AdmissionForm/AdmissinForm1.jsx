import React from "react";
import { AdmissinForm2 } from "./AdmissinForm2";
import { Form, Col, Button, tr, Dropdown, Table } from "react-bootstrap";

export const AdmissinForm1 = () => {
  return (
    <div>
      <lable>
        Download Student Admission Form
        <Button href="StudentAdmissionForm.pdf">Download</Button>
      </lable>
      <Table responsive="xs" striped bordered hover variant="light">
        <tbody>
          <tr
            style={{
              textAlign: "center",
              backgroundColor: "lightpink",
            }}
          >
            <td colSpan="8">
              {" "}
              <h3>For Office Use Only </h3>
            </td>
          </tr>
          <tr>
            <td
              colSpan="8"
              style={{ textAlign: "center", backgroundColor: "lightpink" }}
            >
              <h3>For Payment Detais (details of DD/Pay order)</h3>
            </td>
            {/* <td lg={8}>
          <Form.Control size="sm" type="text" style={{ width: "70%" }} />
        </td> */}
          </tr>
          <tr>
            <td>1.DD.No.</td>
            <td>
              <Form.Control size="sm" type="text" />
            </td>
            <td>Amount</td>
            <td>
              <Form.Control size="sm" type="text" />
            </td>
            <td>Date</td>
            <td>
              <Form.Control size="sm" type="text" />
            </td>
            <td>Bank</td>
            <td>
              <Form.Control size="sm" type="text" />
            </td>
          </tr>

          <tr style={{ backgroundtdor: "lightgray" }}>
            <td>2.DD.No.</td>
            <td>
              <Form.Control size="sm" type="text" />
            </td>
            <td>Amount</td>
            <td>
              <Form.Control size="sm" type="text" />
            </td>
            <td>Date</td>
            <td>
              <Form.Control size="sm" type="text" />
            </td>
            <td>Bank</td>
            <td>
              <Form.Control size="sm" type="text" />
            </td>
          </tr>

          <tr>
            <td colSpan="2">NSAKCET Regd No</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
            <td colSpan="4">
              Signature <br />
              Office Incharge Of Admission Counter
            </td>
          </tr>

          <tr style={{ backgroundColor: "lightpink" }}>
            <th colSpan="8">Admission Details</th>
          </tr>

          <tr>
            <td colSpan="4">Hall Ticket No.</td>
            <td colSpan="4">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              Name Of The Candidate(Mr./Mrs. /Miss.)
              <br /> (IN BLOCK LETTERS AS PER SSC)
            </td>
            <td colSpan="4">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="2">Adhar ID (UID)</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
            <td colSpan="2">PAN Card (if any)</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              Name OF Father <br />
              (IN BLOCK LETTERS AS PER SSC)
            </td>
            <td colSpan="4">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              Name OF Mother <br />
              (IN BLOCK LETTERS AS PER SSC)
            </td>
            <td colSpan="4">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="2">Date Of Birth (AS PER SSC)</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" placeholder="(DD/MM/YY)" />
            </td>
            <td colSpan="2">select Gender</td>
            <td colSpan="2">
              <Form.Control as="select" defaultValue="Choose...">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
                ))}
              </Form.Control>
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <Form.Label>Type Of Admission</Form.Label>
            </td>
            <td colSpan="4">
              <Form.Control as="select" defaultValue="Choose...">
                <option>Management</option>
                <option>Convener</option>
                <option>Spot</option>
                ))}
              </Form.Control>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              Admission Category
              <br />
              (SC,OBS,ST,General,GOI etc.)
            </td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
            <td colSpan="2">Cast</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="2">Mother Tongue:</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
            <td colSpan="2">Blood Group: </td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="2">Email ID:</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
            <td colSpan="2">Identification Mark:</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="2">Father Occupation:</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
            <td colSpan="2">Phone no: </td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="2">Father Occupation:</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
            <td colSpan="2">Phone: </td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>

          <tr style={{ backgroundColor: "lightpink" }}>
            <th colSpan="8">Admission Details (SSC/CBSC/X/ICSE Std.Details)</th>
          </tr>
          <tr>
            <td colSpan="4">
              <Form.Label>Board Of Exam</Form.Label>
            </td>
            <td colSpan="4">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="4"> Name OF School :</td>
            <td colSpan="4">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="2"> Hall Ticket No. </td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
            <td colSpan="2">Total Marks Obtained :</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="2">Maximum Marks :</td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
            <td colSpan="2">Passing Month : </td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
          <tr>
            <td colSpan="1">Year : </td>
            <td colSpan="1">
              <Form.Control size="sm" type="text" />
            </td>
            <td colSpan="2">Percentage Marks Scored: </td>
            <td colSpan="2">
              <Form.Control size="sm" type="text" />
            </td>
            <td colSpan="1">Grade: </td>
            <td colSpan="">
              <Form.Control size="sm" type="text" />
            </td>
          </tr>
        </tbody>
      </Table>
      <tr>
        <td colSpan="8">
          (Note: Attach attested photocopy of 10th sts mark card)
        </td>
      </tr>

      <Button
        style={{ float: "right" }}
        href="/AdmissinForm2"
        onClick={AdmissinForm2}
      >
        Next
      </Button>
    </div>
  );
};
