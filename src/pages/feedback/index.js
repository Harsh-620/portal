import { Helmet } from "react-helmet";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

import FeedbackForm from "../../components/forms/feedback";
import Navbar from "../../components/navbar";
import "./styles.scss";

const Feedback = () => {
  return (
    <>
      <Helmet title="Feedback" />
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
            id="feedback-col"
          >
            Feedback
            <hr className="feedback-col-divider" />
          </MDBCol>
        </MDBRow>
        <MDBRow className="feedback-row">
          <MDBCol
            xs="12"
            sm="12"
            md="12"
            lg="12"
            xl="12"
            xxl="12"
            id="feedback-form-col"
          >
            <FeedbackForm />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Feedback;
