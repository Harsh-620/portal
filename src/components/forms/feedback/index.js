import { MDBBtn, MDBTypography, MDBIcon } from "mdb-react-ui-kit";

const FeedbackForm = () => {
  return (
    <>
      <div className="feedback-btn-div">
        <MDBTypography variant="h2">
          Like us? Click the button below for appreciation!
        </MDBTypography>
        <MDBBtn className="form-submit-btn">
          <MDBIcon className="form-submit-btn-icon" fas icon="thumbs-up" />
        </MDBBtn>
      </div>
    </>
  );
};

export default FeedbackForm;
