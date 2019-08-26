import React from "react";
import ContactUSForm from "../../components/ContactUSForm";
import { connect } from "react-redux";
import { saveMessage } from "../../actions/messagesActions";
import "./App.css";

function App({ saveMessage }) {

  const handleSubmit = message => {
    saveMessage(message);
  }

  return (
    <div className="App container py-4">
      <div className="row justify-content-center">
        <div className="col-md-7 text-center">
          <h3 className="title mb-3">
            <span>./</span>Contact
          </h3>
          <h5>
            <strong>engice</strong> encadre votre projet de A à Z
          </h5>
          <p className="mt-2 mb-5">
            Le developpement sur mesure des sites web et d'applications mobiles
            innovantes sont notre point fort. Du premier workshop à la
            maintenance, nous développons des solutions pointues centrées sur
            lutilisateur et les mettons en oeuvre efficacement à l'aide des
            méthodes agiles
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <ContactUSForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  messages: state.messages
});

const mapDispatchToProps = dispatch => ({
  saveMessage(message) {
    dispatch(saveMessage(message));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
