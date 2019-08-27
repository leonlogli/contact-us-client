import React from "react";
import ContactUsForm from "../../components/ContactUsForm";
import { connect } from "react-redux";
import { Button, Snackbar } from "@material-ui/core";
import { saveMessage } from "../../actions/messagesActions";
import "./ContactUsPage.css";
import { ERROR } from "../../constants";

function ContactUsPage({ saveMessage, status }) {
  const [openSnackBar, setOpenSnackBar] = React.useState(false);

  const handleSubmit = message => {
    saveMessage(message);
    setOpenSnackBar(true);
  };

  function handleCloseSnackBar(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackBar(false);
  }

  return (
    <div className="ContactUsPage container">
      <div className="row justify-content-center">
        <div className="col-md-7 text-center">
          <h3 className="title mb-3">
            <span>./</span>Contact
          </h3>
          <h5>
            <strong>engice</strong> encadre votre projet de A à Z
          </h5>
          <p className="mt-2 mb-5">
            Le developpement sur mesure des sites web et
            d'ContactUsPagelications mobiles innovantes sont notre point fort.
            Du premier workshop à la maintenance, nous développons des solutions
            pointues centrées sur lutilisateur et les mettons en oeuvre
            efficacement à l'aide des méthodes agiles
          </p>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-md-6 col-lg-4">
          <ContactUsForm onSubmit={handleSubmit} />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          {status.saveMessage === ERROR && (
            <div className="alert alert-danger" role="alert">
              {status.saveMessageError}
            </div>
          )}
          <Snackbar
            open={openSnackBar}
            onClose={handleCloseSnackBar}
            autoHideDuration={1800}
            ContentProps={{ "aria-describedby": "savedSuccessMessageId" }}
            message={
              <span id="savedSuccessMessageId">
                Message sent successfully
              </span>
            }
            action={
              <Button size="small" color="secondary" onClick={handleCloseSnackBar}>
                OK
              </Button>
            }
          />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  messages: state.messages,
  status: state.status
});

const mapDispatchToProps = dispatch => ({
  saveMessage(message) {
    dispatch(saveMessage(message));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactUsPage);
