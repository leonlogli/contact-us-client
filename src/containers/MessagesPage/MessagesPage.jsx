import React from "react";
import { connect } from "react-redux";
import MessageCard from "../../components/MessageCard/MessageCard";
import "./MessagesPage.css";
import { ERROR, PENDING } from "../../constants";
import LinearProgress from "@material-ui/core/LinearProgress";

function MessagesPage({ saveMessage, getMessages, messages, status }) {
  return (
    <div className="MessagesPage container">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <h3>Messages</h3>
          {status.getMessages === PENDING && <LinearProgress />}
          {messages &&
            Object.entries(messages).map(([index, message]) => (
              <MessageCard {...message} key={index} />
            ))}
          {messages && <p>You have no message yet</p>}
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          {status.getMessages === ERROR && (
            <div className="alert alert-danger" role="alert">
              {status.getMessagesError}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  messages: state.messages,
  status: state.status
});

export default connect(
  mapStateToProps,
  null
)(MessagesPage);
