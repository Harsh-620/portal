import "./styles.scss";

const CompanyDetails = ({ details }) => {
  return (
    <>
      <div className="company-logo">
        <img src={details.logo.src} alt={details.logo.caption} />
      </div>
      <div className="company-details">
        <h3>{details.companyName}</h3>
        <p>{details.companyDescription}</p>
        <p>{details.companyEstablishment}</p>
        <p>{details.companyWebsite}</p>
        {/* <p>{details.class.name}</p> */}
      </div>
    </>
  );
};

export default CompanyDetails;
