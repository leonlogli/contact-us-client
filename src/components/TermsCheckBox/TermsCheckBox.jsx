import React from "react";
import PropTypes from "prop-types";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import "./TermsCheckBox.css";

const TermsCheckBox = ({ onChange}) => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = event => {
    setChecked(event.target.checked);
    onChange(event.target.checked);
  }

  return (
    <FormControlLabel
      className="TermsCheckBox"
          control={
            <Checkbox
              value="termChecked"
              checked={checked}
              color="primary"
              onChange={handleChange}
            />
          }
          label={
            <span>
              I agree and consent to the{" "}
              <a
                href="https://google.com"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                Terms &amp; Conditions
              </a>{" "}
              and the{" "}
              <a
                href="https://google.com"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                Privacy Policy
              </a>
            </span>
          }
        />
  );
};

TermsCheckBox.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default TermsCheckBox;
