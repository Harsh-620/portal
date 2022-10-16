import { Helmet } from "react-helmet";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

import InfoCard from "../../components/cards/info";
import Navbar from "../../components/navbar";
import "./styles.scss";
import SynopsisCarousel from "../../components/carousel";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "http://localhost:5000/dashboard";
let obj = 0;
const Dashboard = () => {
  const [dashboard, setDashboard] = useState(null);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      // console.log(
      //   JSON.stringify(response.data.companydatadivided[0]).replace(
      //     "count(*)",
      //     "val"
      //   )
      // );
      // var obj = JSON.parse(string);
      obj = JSON.parse(
        JSON.stringify(response.data.companydatadivided[0]).replace(
          "count(*)",
          "val"
        )
      );
      console.log(obj.val);
      setDashboard(obj.val);
      // console.log(val);
      // console.log(response.data.companydatadivided[0]);
      // const {count(*)}=response.data.companydatadivided[0];
      // const foo = response.data;
      // const [red] = foo;
      // console.log(red);
    });
  }, []);

  if (!dashboard) return null;
  return (
    <>
      <Helmet title="Dashboard" />
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
            id="info-user-col"
          >
            Welcome 1620EC1066
            <hr className="info-user-col-divider" />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol
            xs="12"
            sm="4"
            md="4"
            lg="4"
            xl="4"
            xxl="4"
            id="info-card-col"
          >
            <InfoCard metric={obj.val} title="Reports available" />
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
            id="info-synopsis-header"
          >
            Placement Synopsis
            <hr className="info-user-col-divider" />
          </MDBCol>
        </MDBRow>
        <MDBRow id="info-synopsis-col">
          <MDBCol xs="12" sm="12" md="12" lg="12" xl="6" xxl="6">
            <SynopsisCarousel />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Dashboard;
