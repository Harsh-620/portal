import { Helmet } from "react-helmet";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

import DataTable from "../../../components/data-table";
import Navbar from "../../../components/navbar";
import ReportsSlider from "../../../components/slider";
import accentureLogo from "../../../asset/major/accenture.png";
import capgeminiLogo from "../../../asset/major/capgemini.png";
import cognizantLogo from "../../../asset/major/cognizant.png";
import hclLogo from "../../../asset/major/hcl.png";
import infosysLogo from "../../../asset/major/infosys.png";
import tcsLogo from "../../../asset/major/tcs.png";
import wiproLogo from "../../../asset/major/wipro.png";
import { history } from "../../../index";
import "./styles.scss";
import React, { useEffect } from "react";
import ListService from "./service";
import axios from "axios";

// const ReportList = () => {
class ReportList extends React.Component {
  constructor(props) {
    super(props);
    this.retrieveAllClassData = this.retrieveAllClassData.bind(this);
    this.retrieveAllCompanyData = this.retrieveAllCompanyData.bind(this);
    this.retrieveCompanyDetail = this.retrieveCompanyDetail.bind(this);
    this.state = { data1: [], data2: [], data3: [], data4: [], companyId1: "" };
  }
  componentDidMount() {
    this.retrieveAllClassData();
  }
  // componentDidMount() {
  //   Promise.all(
  //     this.state.classIdx.map((id) => {
  //       return new Promise((resolve) => {
  //         fetch(`http://localhost:5000/companies?classId=${id}`).then(
  //           (response) => {
  //             return new Promise(() => {
  //               response.json().then((res) => {
  //                 console.log(res);
  //                 resolve();
  //               });
  //             });
  //           }
  //         );
  //       });
  //     })
  //   for (var j = 1; j <= 4; j++) {
  //     ListService.retrieveClassData(j).then((response) => {
  //       this.setState({ classData: response.data.data });
  //       for (var i = 0; i <= this.state.classData.length; i++) {
  //         ListService.retrieveCompanyData(
  //           this.state.classData[i].companyID
  //         ).then((response) => {
  //           this.setState({ companyData: response.data.data[0].company });
  //         });
  //       }
  //     });
  //   }
  // }
  // async retrieveAllClassData(classId) {
  //   await Promise.all(
  //     this.state.classIdx.map(async (id) => {
  //       const response = await fetch(
  //         `http://localhost:5000/companies?classId=${id}`
  //       );
  //       const newClassData = await response.json();
  //       console.log(newClassData);
  //     })
  //   );
  retrieveAllClassData() {
    const classIdx = [1, 2, 3, 4];
    Promise.all(
      classIdx.map((id) => {
        return new Promise((resolve) => {
          fetch(`http://localhost:5000/companies?classId=${id}`).then(
            (response) => {
              return new Promise(() => {
                response.json().then((res) => {
                  // let data = [
                  //   {
                  //     key: "",
                  //     company: "",
                  //     eligibility: "",
                  //     profile: "",
                  //     ctc: "",
                  //   },
                  // ];
                  const classData = res.data;
                  let companyData = {};
                  console.log(classData[0].class.className);
                  // switch (classData[0].class.className) {
                  // case "Major":
                  if (classData[0].class.className === "Major") {
                    for (let i = 0; i < classData.length; i++) {
                      // ListService.retrieveCompanyData(
                      //   classData[i].companyID
                      // ).then((res) => {
                      //   companyData = res.data;
                      // });
                      // console.log(companyData);

                      fetch(
                        `http://localhost:5000/reports?companyId=${classData[0].companyID}`
                      ).then((response) => {
                        return new Promise(() => {
                          response.json().then((res) => {
                            companyData = res.data;
                            // console.log(res);
                            // console.log(companyData);
                            console.log(companyData[0].companyEligibility);
                            // this.setState((i) => {
                            let newdata = {
                              key: classData[i].companyID,
                              company: classData[i].companyName,
                              eligibility: companyData[0].companyEligibility,
                              profile: companyData[0].companyJOBProfile,
                              ctc: companyData[0].companyCTC,
                            };
                            this.setState((prevState) => ({
                              data1: [...prevState.data1, newdata],
                            }));

                            // });
                            // console.log(data);
                            resolve();
                            // return data;
                          });
                        });
                      });
                      // console.log(companyData);
                    }
                    console.log(this.state.data1);
                  } else if (classData[0].class.className === "Core") {
                    this.setState({ data2: [] });
                    for (let i = 0; i < classData.length; i++) {
                      // ListService.retrieveCompanyData(
                      //   classData[i].companyID
                      // ).then((res) => {
                      //   companyData = res.data;
                      // });
                      // console.log(companyData);

                      fetch(
                        `http://localhost:5000/reports?companyId=${classData[0].companyID}`
                      ).then((response) => {
                        return new Promise(() => {
                          response.json().then((res) => {
                            companyData = res.data;
                            // console.log(res);
                            // console.log(companyData);
                            console.log(companyData[0].companyEligibility);
                            // this.setState((i) => {
                            let newdata = {
                              key: i + 1,
                              company: classData[i].companyName,
                              eligibility: companyData[0].companyEligibility,
                              profile: companyData[0].companyJOBProfile,
                              ctc: companyData[0].companyCTC,
                            };
                            this.setState((prevState) => ({
                              data2: [...prevState.data2, newdata],
                            }));

                            // });
                            // console.log(data);
                            resolve();
                            // return data;
                          });
                        });
                      });
                      // console.log(companyData);
                    }
                    console.log(this.state.data2);
                  } else if (classData[0].class.className === "Elite") {
                    this.setState({ data3: [] });
                    for (let i = 0; i < classData.length; i++) {
                      // ListService.retrieveCompanyData(
                      //   classData[i].companyID
                      // ).then((res) => {
                      //   companyData = res.data;
                      // });
                      // console.log(companyData);

                      fetch(
                        `http://localhost:5000/reports?companyId=${classData[0].companyID}`
                      ).then((response) => {
                        return new Promise(() => {
                          response.json().then((res) => {
                            companyData = res.data;
                            // console.log(res);
                            // console.log(companyData);
                            console.log(companyData[0].companyEligibility);
                            // this.setState((i) => {
                            let newdata = {
                              key: i + 1,
                              company: classData[i].companyName,
                              eligibility: companyData[0].companyEligibility,
                              profile: companyData[0].companyJOBProfile,
                              ctc: companyData[0].companyCTC,
                            };
                            this.setState((prevState) => ({
                              data3: [...prevState.data3, newdata],
                            }));

                            // });
                            // console.log(data);
                            resolve();
                            // return data;
                          });
                        });
                      });
                      // console.log(companyData);
                    }
                    console.log(this.state.data3);
                  } else if (classData[0].class.className === "Others") {
                    this.setState({ data4: [] });
                    for (let i = 0; i < classData.length; i++) {
                      // ListService.retrieveCompanyData(
                      //   classData[i].companyID
                      // ).then((res) => {
                      //   companyData = res.data;
                      // });
                      // console.log(companyData);

                      fetch(
                        `http://localhost:5000/reports?companyId=${classData[0].companyID}`
                      ).then((response) => {
                        return new Promise(() => {
                          response.json().then((res) => {
                            companyData = res.data;
                            // console.log(res);
                            // console.log(companyData);
                            console.log(companyData[0].companyEligibility);
                            // this.setState((i) => {
                            let newdata = {
                              key: i + 1,
                              company: classData[i].companyName,
                              eligibility: companyData[0].companyEligibility,
                              profile: companyData[0].companyJOBProfile,
                              ctc: companyData[0].companyCTC,
                            };
                            this.setState((prevState) => ({
                              data4: [...prevState.data4, newdata],
                            }));

                            // });
                            // console.log(data);
                            resolve();
                            // return data;
                          });
                        });
                      });
                      // console.log(companyData);
                    }
                    console.log(this.state.data4);
                  }
                  // case "Core":
                  //   return this.state.data;
                  // case "Elite":
                  //   return this.state.data;
                  // case "Others":
                  //   return this.state.data;

                  resolve();
                });
              });
            }
          );
        });
      })
    );
    // await ListService.retrieveClassData(classId).then((response) => {
    //   this.setState({ classData: response.data.data });
    // });
  }
  retrieveAllCompanyData(companyId) {
    ListService.retrieveCompanyData(companyId).then((response) => {
      this.setState({ companyData: response.data.data[0].company });
    });
  }
  retrieveCompanyDetail(companyId) {
    this.props.history.push(`/reports/${companyId}`);
  }

  render() {
    // const response = ListService.retrieveClassData();
    // const classIdx = [1, 2, 3, 4];
    // console.log(".....classData", this.state.classData);
    // console.log(".....companyData", this.state.companyData);
    const columns = [
      {
        title: "#",
        dataIndex: "key",
        key: "key",
        render: (text) => <span>{text}</span>,
      },
      {
        title: "Company",
        dataIndex: "company",
        key: "company",
        render: (text) => <span>{text}</span>,
      },
      {
        title: "Eligibility",
        dataIndex: "eligibility",
        key: "eligibility",
        render: (text) => <span>{text}</span>,
      },
      {
        title: "Profile",
        dataIndex: "profile",
        key: "profile",
        render: (text) => <span>{text}</span>,
      },
      {
        title: "CTC",
        dataIndex: "ctc",
        key: "ctc",
        responsive: ["md"],
        render: (text) => <span>{text}</span>,
      },
      {
        title: "Action",
        responsive: ["lg"],
        render: (text) => (
          <MDBBtn
            className="primary-bg"
            block
            onClick={(e) => {
              e.preventDefault();
              this.retrieveCompanyDetail(this.state.data1.key);
            }}
          >
            View <MDBIcon fas icon="angle-right" />
          </MDBBtn>
        ),
      },
    ];

    const data = [
      {
        key: "1",
        company: "John Brown",
        eligibility: "B. Tech.",
        profile: "Software Engineer",
        ctc: 32,
      },
      {
        key: "2",
        company: "John Brown",
        eligibility: "B. Tech.",
        profile: "Software Engineer",
        ctc: 32,
      },
      {
        key: "3",
        company: "John Brown",
        eligibility: "B. Tech.",
        profile: "Software Engineer",
        ctc: 32,
      },
      {
        key: "4",
        company: "John Brown",
        eligibility: "B. Tech.",
        profile: "Software Engineer",
        ctc: 32,
      },
      {
        key: "5",
        company: "John Brown",
        eligibility: "B. Tech.",
        profile: "Software Engineer",
        ctc: 32,
      },
      {
        key: "6",
        company: "John Brown",
        eligibility: "B. Tech.",
        profile: "Software Engineer",
        ctc: 32,
      },
      {
        key: "7",
        company: "John Brown",
        eligibility: "B. Tech.",
        profile: "Software Engineer",
        ctc: 32,
      },
      {
        key: "8",
        company: "John Brown",
        eligibility: "B. Tech.",
        profile: "Software Engineer",
        ctc: 32,
      },
      {
        key: "9",
        company: "John Brown",
        eligibility: "B. Tech.",
        profile: "Software Engineer",
        ctc: 32,
      },
      {
        key: "10",
        company: "John Brown",
        eligibility: "B. Tech.",
        profile: "Software Engineer",
        ctc: 32,
      },
      {
        key: "11",
        company: "John Brown",
        eligibility: "B. Tech.",
        profile: "Software Engineer",
        ctc: 32,
      },
      {
        key: "12",
        company: "John Brown",
        eligibility: "B. Tech.",
        profile: "Software Engineer",
        ctc: 32,
      },
      {
        key: "13",
        company: "John Brown",
        eligibility: "B. Tech.",
        profile: "Software Engineer",
        ctc: 32,
      },
      {
        key: "14",
        company: "John Brown",
        eligibility: "B. Tech.",
        profile: "Software Engineer",
        ctc: 32,
      },
      {
        key: "15",
        company: "John Brown",
        eligibility: "B. Tech.",
        profile: "Software Engineer",
        ctc: 32,
      },
      {
        key: "16",
        company: "John Brown",
        eligibility: "B. Tech.",
        profile: "Software Engineer",
        ctc: 32,
      },
      {
        key: "17",
        company: "John Brown",
        eligibility: "B. Tech.",
        profile: "Software Engineer",
        ctc: 32,
      },
      {
        key: "18",
        company: "John Brown",
        eligibility: "B. Tech.",
        profile: "Software Engineer",
        ctc: 32,
      },
    ];

    const images = [
      {
        src: accentureLogo,
        caption: "Accenture",
        showCaption: false,
      },
      {
        src: capgeminiLogo,
        caption: "Capgemini",
        showCaption: false,
      },
      {
        src: cognizantLogo,
        caption: "Cognizant",
        showCaption: false,
      },
      {
        src: hclLogo,
        caption: "HCL",
        showCaption: false,
      },
      {
        src: infosysLogo,
        caption: "Infosys",
        showCaption: false,
      },
      {
        src: tcsLogo,
        caption: "TCS",
        showCaption: false,
      },
      {
        src: wiproLogo,
        caption: "Wipro",
        showCaption: false,
      },
    ];

    return (
      <>
        <Helmet title="Reports" />
        <Navbar />

        <MDBContainer fluid className="pb-4 bg-light">
          <MDBRow>
            <MDBCol
              xs="12"
              sm="12"
              md="12"
              lg="12"
              xl="12"
              xxl="12"
              id="slider-col"
            >
              <ReportsSlider images={images} />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol
              xs="12"
              sm="12"
              md="12"
              lg="12"
              xl="12"
              xxl="12"
              id="reports-col"
            >
              List of all Reports
              <hr className="reports-col-divider" />
            </MDBCol>
          </MDBRow>
          <MDBRow className="reports-row">
            <MDBCol
              xs="12"
              sm="12"
              md="12"
              lg="12"
              xl="12"
              xxl="12"
              id="reports-table-col"
              className="d-grid gap-3"
            >
              <span className="table-header">MAJOR</span>
              <DataTable rows={this.state.data1} columns={columns} />
            </MDBCol>
          </MDBRow>
          <MDBRow className="reports-row">
            <MDBCol
              xs="12"
              sm="12"
              md="12"
              lg="12"
              xl="12"
              xxl="12"
              id="reports-table-col"
              className="d-grid gap-3"
            >
              <span className="table-header">ELIITE</span>
              <DataTable rows={this.state.data3} columns={columns} />
            </MDBCol>
          </MDBRow>
          <MDBRow className="reports-row">
            <MDBCol
              xs="12"
              sm="12"
              md="12"
              lg="12"
              xl="12"
              xxl="12"
              id="reports-table-col"
              className="d-grid gap-3"
            >
              <span className="table-header">CORE</span>
              <DataTable rows={this.state.data2} columns={columns} />
            </MDBCol>
          </MDBRow>
          <MDBRow className="reports-row">
            <MDBCol
              xs="12"
              sm="12"
              md="12"
              lg="12"
              xl="12"
              xxl="12"
              id="reports-table-col"
              className="d-grid gap-3"
            >
              <span className="table-header">OTHERS</span>
              <DataTable rows={this.state.data4} columns={columns} />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    );
  }
}
export default ReportList;
