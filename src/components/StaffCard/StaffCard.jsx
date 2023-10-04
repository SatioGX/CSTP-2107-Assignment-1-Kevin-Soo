import React from "react";
import PropTypes from "prop-types";
import "./StaffCard.css";

const StaffCard = ({ staff }) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={staff.image} alt={staff.title} />
      </div>
      <div className="info-container">
        <h1>{staff.title}</h1>
        <h3>{staff.email}</h3> <br />
        <p className="fun-fact">Fun Fact: <br />{staff.funFact}</p>

      </div>
    </div>
  );
};

StaffCard.propTypes = {
  staff: PropTypes.any,
};

export default StaffCard;
