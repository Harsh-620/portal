import { Helmet } from "react-helmet";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

import Navbar from "../../../components/navbar";

import CompanyDetails from "../../../components/company-details";
import CompanyReports from "../../../components/company-reports";
import tcsLogo from "../../../asset/major/tcs.png";
import { history } from "../../../index";
import "./styles.scss";
import axios from "axios";
import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

// const ReportList = () => {
class ReportList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyID: this.props.match.params.companyId,
      companyDetails: {
        companyName: "",
        companyDescription: "",
        companyEstablishment: "",
        companyWebsite: "",
      },
    };
    this.backToListing = this.backToListing.bind(this);
    this.retrieveCompanyDetails = this.retrieveCompanyDetails.bind(this);
  }
  componentDidMount() {
    this.retrieveCompanyDetails();
  }
  backToListing() {
    history.push("/reports");
  }
  retrieveCompanyDetails() {
    axios
      .get(`http://localhost:5000/reports?companyId=${this.state.companyId}`)
      .then((res) =>
        this.setState({
          companyDetails: {
            companyName: res.data.companyName,
            companyDescription: res.data.companyDescription,
            companyEstablishment: res.data.companyEstablishment,
            companyWebsite: res.data.companyWebsite,
          },
        })
      );
  }
  render() {
    const details = {
      logo: {
        src: tcsLogo,
        caption: "TCS",
      },
      ...this.state.companyDetails,
    };

    // const backToListing = () => {
    //   history.push("/reports");
    // };

    return (
      <>
        <Helmet title={`Report ${details.companyName}`} />
        <Navbar />

        <MDBContainer fluid className="pb-4 bg-light">
          <MDBRow className="pt-3">
            <MDBCol xs="12" sm="12" md="12" lg="12" xl="12" xxl="12">
              <MDBBtn id="btn" onClick={this.backToListing}>
                <MDBIcon fas icon="angle-left" /> Back to Report Listing
              </MDBBtn>
            </MDBCol>
          </MDBRow>
          <MDBRow className="details-row">
            <MDBCol
              xs="12"
              sm="12"
              md="12"
              lg="12"
              xl="12"
              xxl="12"
              id="details-col"
              className="d-grid gap-3"
            >
              <CompanyDetails details={details} />
            </MDBCol>
          </MDBRow>
          <MDBRow className="details-row">
            <MDBCol
              xs="12"
              sm="12"
              md="12"
              lg="12"
              xl="12"
              xxl="12"
              id="details-col"
              className="d-grid gap-3"
            >
              <CompanyReports />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol xs="12" sm="12" md="12" lg="12" xl="12" xxl="12">
              <MDBBtn id="btn" onClick={this.backToListing}>
                <MDBIcon fas icon="angle-left" /> Back to Report Listing
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    );
  }
}

export default withRouter(ReportList);
