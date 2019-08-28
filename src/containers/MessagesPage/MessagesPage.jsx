import { LinearProgress } from "@material-ui/core";
import React from "react";
import { Offline } from "react-detect-offline";
import { connect } from "react-redux";
import MessageCard from "../../components/MessageCard";
import { ERROR, PENDING } from "../../constants";
import "./MessagesPage.css";

function MessagesPage({ messages, status }) {
  const hasPendingStatus = status.getMessages === PENDING;

  return (
    <div className="MessagesPage container">
      <div className="row">
        <div className="col">
          <h3 className="text-center">Messages</h3>
          {messages && messages.length > 0 && (
            <p className="text-center pt-2">
              {`You have received ${messages.length} messages`}
            </p>
          )}
          {hasPendingStatus && <LinearProgress className="LinearProgress" />}
          <div className="d-flex flex-wrap justify-content-center">
            {messages &&
              Object.entries(messages).map(([index, message]) => (
                <MessageCard {...message} key={index} />
              ))}
            {(!messages || messages.length === 0) && (
              <p>You have no message yet</p>
            )}
            <Offline>
              <div className="alert alert-danger mt-3" role="alert">
                You're offline right now. Check your connection.
              </div>
            </Offline>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          {status.getMessages === ERROR && status.getMessagesError && (
            <div className="alert alert-danger mt-3" role="alert">
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
