import React from "react";
import PropTypes from "prop-types";
import "./MessageCard.css";

const MessageCard = props => {
  const { office, firstName, lastName, email, phone, message } = props;  
  const fullName = (firstName ? firstName : " ") + (lastName ? lastName : "");
  const hasFullName = Boolean(fullName && fullName.trim());

  return (
    <div className="MessageCard card">
      <div className="card-body">
        {hasFullName && (
          <>
            <h5 className="card-title">{fullName.trim()}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
          </>
        )}
        {!hasFullName && <h5 className="card-title">{email}</h5>}
        {office && <div>{"Office: " + office}</div>}
        {phone && <div>{"Phone: " + phone}</div>}
        <p className="card-text">{"Message: " + message}</p>
      </div>
    </div>
  );
};

MessageCard.propTypes = {
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  phone: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string
};

export default MessageCard;
