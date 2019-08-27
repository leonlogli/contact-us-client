import React from "react";
import { connect } from "react-redux";
import MessageCard from "../../components/MessageCard";
import { ERROR } from "../../constants";
import "./MessagesPage.css";

function MessagesPage({ messages, status }) {
  return (
    <div className="MessagesPage container">
      <div className="row">
        <div className="col">
          <h3 className="text-center">Messages</h3>
          <div className="d-flex flex-wrap justify-content-center py-3">
            {messages &&
              Object.entries(messages).map(([index, message]) => (
                <MessageCard {...message} key={index} />
              ))}
            {messages.length === 0 && <p>You have no message yet</p>}
          </div>
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
