import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import SelectBox from "../SelectBox/";
import TermsCheckBox from "../TermsCheckBox/TermsCheckBox";
import "./ContactUSForm.css";

const ContactUSForm = props => {
  const {
    office = "Offices - Lausanne",
    firstName = "",
    lastName = "",
    email = "",
    phone = "",
    message = "",
    onSubmit
  } = props;

  const [values, setValues] = React.useState({
    office,
    firstName,
    lastName,
    email,
    phone,
    message
  });

  const [errors, setErrors] = React.useState({
    email: "",
    message: ""
  });

  const [checked, setChecked] = React.useState(true);
  const [policyErrorVisible, setPolicyErrorVisible] = React.useState(false);
  const [isDirty, setDirty] = React.useState(false);
  const options = ["Offices - Lausanne", "Office - Genève", "Office - Paris"];

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
    handleError(name, event.target.value);
    setDirty(true);
    isFormValid() && setPolicyErrorVisible(false);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (isRequiredFieldEmpty()) {
      if (!values.email && !errors.email) {
        handleError("email", null);
      } else if (!values.message && !errors.message && !errors.email) {
        handleError("message", null);
      }
    } else if (isFormValid()) {
      if (!checked) {
        setPolicyErrorVisible(true);
      } else {
        onSubmit(values);

        setValues({
          ...values,
          office: "Offices - Lausanne",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: ""
        });
      }
    }
  };

  const handleError = (name, value) => {
    switch (name) {
      case "email":
        setErrors({
          ...errors,
          email:
            !value || !value.trim()
              ? "Email is required"
              : !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
              ? "Invalid email address !"
              : ""
        });
        break;
      case "message":
        setErrors({
          ...errors,
          message: !value || !value.trim() ? "Message is required" : ""
        });
        break;
      default:
        break;
    }
  };

  const isRequiredFieldEmpty = () => {
    return [values.email, values.message].filter(val => !val).length > 0;
  };

  const isFormValid = () => {
    return Object.values(errors).filter(err => err.length > 0).length === 0;
  };

  return (
    <form className="ContactUSForm d-flex flex-column" onSubmit={handleSubmit}>
      <div className="d-flex justify-content-center">
        <SelectBox options={options} onChange={handleChange("office")} />
      </div>
      <div className="d-flex justify-content-between">
        <TextField
          label="First name"
          value={values.firstName}
          onChange={handleChange("firstName")}
          margin="normal"
        />
        <TextField
          label="Last name"
          margin="normal"
          value={values.lastName}
          onChange={handleChange("lastName")}
        />
      </div>
      <div className="d-flex justify-content-between mb-4 pb-2">
        <TextField
          label="Your email"
          value={values.email}
          onChange={handleChange("email")}
          margin="normal"
          error={errors.email.length > 0}
          helperText={errors.email}
        />
        <TextField
          label="Phone"
          margin="normal"
          type="tel"
          value={values.phone}
          onChange={handleChange("phone")}
        />
      </div>
      <TextField
        label="Your message"
        margin="normal"
        value={values.message}
        onChange={handleChange("message")}
        variant="outlined"
        multiline
        error={errors.message.length > 0}
        helperText={errors.message}
      />
      <TermsCheckBox onChange={e => setChecked(e.target.checked)} />
      {policyErrorVisible && !checked && (
        <div className="alert alert-danger" role="alert">
          You must agree and consent to the Term &amp; Condition and the Privacy
          Policy
        </div>
      )}
      <div className="actions-area mt-3 d-flex justify-content-center">
        <button className="btn submit-button" type="submit" disabled={!isDirty}>
          Submit
          <span className="email-icon">
            <svg style={{ width: "12px", height: "12px" }} viewBox="0 0 24 24">
              <path
                fill="white"
                d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
              />
            </svg>
          </span>
        </button>
      </div>
    </form>
  );
};

ContactUSForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default ContactUSForm;
