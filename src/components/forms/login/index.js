import { MDBInputGroup, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { connect } from "react-redux";

import logo from "../../../asset/logo.png";
import actions from "../../../redux/auth/actions";
import "./styles.scss";

const mapStateToProps = ({ auth, dispatch }) => ({
  dispatch,
});

const LoginForm = ({ dispatch }) => {
  const onClick = (e) => {
    e.preventDefault();
    dispatch({
      type: actions.LOGIN,
      payload: {
        body: {
          libraryId: "1620EC1066",
          password: "abcdef",
        },
      },
    });
  };

  return (
    <>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <form className="login-form">
        <MDBInputGroup className="login-form-group">
          <MDBInput label="KIET Library ID" type="text" />
        </MDBInputGroup>

        <MDBInputGroup className="login-form-group">
          <MDBInput label="Password" type="password" />
        </MDBInputGroup>

        <MDBInputGroup className="login-form-group">
          <MDBBtn onClick={onClick} className=" btn-block login-form-btn">
            Login
          </MDBBtn>
        </MDBInputGroup>
      </form>
    </>
  );
};

export default connect(mapStateToProps)(LoginForm);
