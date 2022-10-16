import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTypography,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";

import LoginForm from "../../components/forms/login";
import stcLogo from "../../asset/stc-logo.png";
import kietLogo from "../../asset/kiet-logo.png";
import about from "../../asset/about.svg";
import objectives from "../../asset/objective.svg";
import "./styles.scss";

const Login = () => {
  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm="12" md="3" className="primary-bg form-container">
          <LoginForm />
          <div className="login-form-footer">
            <hr className="login-form-footer-divider" />
            <div className="login-form-footer-inner">
              <div className="login-form-footer-info">Visits: 1000</div>
              <div className="login-form-footer-info">Likes: 10</div>
            </div>
          </div>
        </MDBCol>
        <MDBCol md="9" className="info-section primary-text bg-light">
          <div className="info-container">
            <div className="brand-logo">
              <img src={stcLogo} alt="stc-logo" />
              <MDBTypography className="fs-5 fw-bolder">
                CONNECTX | Student Training Coordinator
              </MDBTypography>
              <img src={kietLogo} alt="kiet-logo" />
            </div>
            <hr className="info-container-divider" />
            <div className="info-child">
              <div className="info-child-description">
                <div className="info-child-about">
                  <p>
                    STC is a unique initiative by the students of the KIET Group
                    of Institutions under the guidance of the department of
                    Humanities & Social Sciences & Corporate Relations &
                    Placement Cell. It gives first hand information about the
                    various companies that recurit from KIET and enhances the
                    understanding of the placement process. The portal is based
                    on the experience of placed students and the guidance of
                    Soft Skills Faculty members.
                  </p>
                  <p>
                    The students appearing for placement drives often get
                    confused about what to prepare, how much to prepare and how
                    to prepare for a particular company. Thus, in order to
                    provide them one platform for the same on the basis of the
                    experience of their placed seniors, the Department of
                    Humanities & Social Sciences has come out with this unique
                    initiative of the CONNECTX Portal developed by STCs (Student
                    Training Co-ordinators) wherein the STCs will collect the
                    experience of placed students and convert it into proper
                    company wise reports by uploading it on the CONNECTX Portal.
                    The forthcoming batches can access this Portal in order to
                    prepare themselves for the upcoming drives.
                  </p>
                </div>
                <div className="info-child-img">
                  <img className="bg-img" src={about} alt="bg-login" />
                </div>
              </div>
              <div className="info-child-description">
                <div className="info-child-img">
                  <img className="bg-img" src={objectives} alt="bg-login" />
                </div>
                <div className="info-child-about">
                  <ol>
                    <li>
                      Developing the students to meet the needs of the corporate
                      world and their recruitment process.
                    </li>
                    <li>
                      Motivate students to develop domain skills and soft skills
                      in terms of career planning, goal setting.
                    </li>
                    <li>
                      To motivate students to aspire for dream companies such as
                      Adobe, Amazon, Byju's, Jaro Education, Kronos, HUL etc.
                    </li>
                    <li>
                      Aiming to inspire maximum number of students to gain apt
                      employment in companies like TCS, Wipro, Capgemeni,
                      Cognizant, Tech Mahindra, Accenture, HCL, Infosys etc.
                    </li>
                    <li>
                      For this our technical team has designed and developed a
                      user-friendly portal through which any registered student
                      can go through the content and prepare according to the
                      demands of company.
                    </li>
                  </ol>
                </div>
              </div>
              <div className="info-team-description">
                <MDBTypography className="fs-2 fw-bolder">
                  Meet the Team
                </MDBTypography>
                <div className="info-team-about">
                  <MDBListGroup className="info-team-list">
                    <MDBListGroupItem id="team-header">
                      Mentors
                    </MDBListGroupItem>
                    <MDBListGroupItem className="bg-light">
                      <div className="d-flex flex-column w-100 justify-content-between">
                        <h6 className="mb-1 fw-bold">Ms. Puja Rohatgi</h6>
                        <small>
                          Additional HOD: Humanities &Social Sciences
                        </small>
                      </div>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="bg-light">
                      <div className="d-flex flex-column w-100 justify-content-between">
                        <h6 className="mb-1 fw-bold">Dr. Meetu Kumar</h6>
                        <small>
                          Assistant professor: Humanities &Social Sciences
                        </small>
                      </div>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="bg-light">
                      <div className="d-flex flex-column w-100 justify-content-between">
                        <h6 className="mb-1 fw-bold">Ms. Samiksha Tewari</h6>
                        <small>
                          Assistant professor: Humanities &Social Sciences
                        </small>
                      </div>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="bg-light">
                      <div className="d-flex flex-column w-100 justify-content-between">
                        <h6 className="mb-1 fw-bold">Ms. Isha Grewal</h6>
                        <small>
                          Assistant professor: Humanities &Social Sciences
                        </small>
                      </div>
                    </MDBListGroupItem>
                  </MDBListGroup>
                  <MDBListGroup className="info-team-list">
                    <MDBListGroupItem id="team-header">
                      Core Team Members
                    </MDBListGroupItem>
                    <MDBListGroupItem className="bg-light">
                      <div className="d-flex flex-column w-100 justify-content-between">
                        <h6 className="mb-1 fw-bold">Mr. Archit Rastogi</h6>
                        <small>Information Technology (2016-2020)</small>
                      </div>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="bg-light">
                      <div className="d-flex flex-column w-100 justify-content-between">
                        <h6 className="mb-1 fw-bold">Ms. Archy Mathur</h6>
                        <small>
                          Master of Computer Application (2017-2020)
                        </small>
                      </div>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="bg-light">
                      <div className="d-flex flex-column w-100 justify-content-between">
                        <h6 className="mb-1 fw-bold">Mr. Harsh Rawat</h6>
                        <small> Electronics & Communication (2016-2020)</small>
                      </div>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="bg-light">
                      <div className="d-flex flex-column w-100 justify-content-between">
                        <h6 className="mb-1 fw-bold">Mr. Mihir Gabba</h6>
                        <small> Electronics & Communication (2016-2020)</small>
                      </div>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="bg-light">
                      <div className="d-flex flex-column w-100 justify-content-between">
                        <h6 className="mb-1 fw-bold">Ms. Prachi</h6>
                        <small>
                          Computer Science and Engineering (2016-2020)
                        </small>
                      </div>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="bg-light">
                      <div className="d-flex flex-column w-100 justify-content-between">
                        <h6 className="mb-1 fw-bold">
                          Mr. Shreeyam Raghuvanshi
                        </h6>
                        <small>Mechanical Engineering (2016-2020)</small>
                      </div>
                    </MDBListGroupItem>
                  </MDBListGroup>
                  <MDBListGroup className="info-team-list">
                    <MDBListGroupItem id="team-header">
                      Current Team Members
                    </MDBListGroupItem>
                    <MDBListGroupItem className="bg-light">
                      <div className="d-flex flex-column w-100 justify-content-between">
                        <h6 className="mb-1 fw-bold">Mr. Archit Rastogi</h6>
                        <small>Information Technology (2016-2020)</small>
                      </div>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="bg-light">
                      <div className="d-flex flex-column w-100 justify-content-between">
                        <h6 className="mb-1 fw-bold">Ms. Archy Mathur</h6>
                        <small>
                          Master of Computer Application (2017-2020)
                        </small>
                      </div>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="bg-light">
                      <div className="d-flex flex-column w-100 justify-content-between">
                        <h6 className="mb-1 fw-bold">Mr. Harsh Rawat</h6>
                        <small> Electronics & Communication (2016-2020)</small>
                      </div>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="bg-light">
                      <div className="d-flex flex-column w-100 justify-content-between">
                        <h6 className="mb-1 fw-bold">Mr. Mihir Gabba</h6>
                        <small> Electronics & Communication (2016-2020)</small>
                      </div>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="bg-light">
                      <div className="d-flex flex-column w-100 justify-content-between">
                        <h6 className="mb-1 fw-bold">Ms. Prachi</h6>
                        <small>
                          Computer Science and Engineering (2016-2020)
                        </small>
                      </div>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="bg-light">
                      <div className="d-flex flex-column w-100 justify-content-between">
                        <h6 className="mb-1 fw-bold">
                          Mr. Shreeyam Raghuvanshi
                        </h6>
                        <small>Mechanical Engineering (2016-2020)</small>
                      </div>
                    </MDBListGroupItem>
                  </MDBListGroup>
                </div>
              </div>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
